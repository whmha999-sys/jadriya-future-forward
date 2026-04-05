import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Send, X, MessageCircle } from "lucide-react";
import chatbotLogo from "@/assets/chatbot-logo.png";
import { useLanguage } from "@/contexts/useLanguage";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = "https://n8n.srv971269.hstgr.cloud/webhook/jadri-chat";

const ChatBot = () => {
  const { t, language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [welcomed, setWelcomed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useMemo(() => crypto.randomUUID(), []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-open when footer is visible (once per session)
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer || hasAutoOpened) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoOpened) {
          setHasAutoOpened(true);
          setIsOpen(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [hasAutoOpened]);

  // Add welcome message on first open
  useEffect(() => {
    if (isOpen && !welcomed) {
      setWelcomed(true);
      setMessages([{ role: "assistant", content: t("chatbot.welcome") }]);
    }
  }, [isOpen, welcomed, t]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, language, sessionId }),
      });
      const data = await res.json();
      const reply = typeof data === "string" ? data : data.output || data.message || data.response || JSON.stringify(data);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: language === "ar" ? "عذراً، حدث خطأ. حاول مرة أخرى." : "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, language]);

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center border border-border"
          aria-label="Open chat"
        >
          <img src={chatbotLogo} alt="Jadri" className="w-[50%] h-[50%] object-contain" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-[90] w-[350px] h-[450px] bg-background rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background">
            <img src={chatbotLogo} alt="Jadri" className="w-8 h-8 object-contain" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{t("chatbot.title")}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-xl px-3 py-2 text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-2 flex items-center gap-2 bg-background">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={t("chatbot.placeholder")}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="text-primary hover:text-primary/80 disabled:opacity-40 transition-colors"
            >
              <Send className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
