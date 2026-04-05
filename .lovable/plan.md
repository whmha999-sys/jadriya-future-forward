

## Plan: Add AI Chatbot Widget

### Overview
Add a floating chatbot widget (bottom-right, all pages) connected to the n8n webhook. It auto-opens when the user scrolls to the footer, with a localized welcome message from "Jadri."

### Changes

**1. Copy uploaded logo → `src/assets/chatbot-logo.png`**

**2. New: `src/components/ChatBot.tsx`**
- Fixed floating button (bottom-right) with white circle + gold knot logo
- Toggles a chat panel (~350×450px, white background)
- Header: logo + "Jadri — AL-JADRIYA Assistant"
- Messages sent via POST to `https://n8n.srv971269.hstgr.cloud/webhook/jadri-chat` with `{ message, language }`
- Opening message (auto-displayed on first open):
  - EN: "Hello! I'm Jadri, your AL-JADRIYA GROUP assistant. How can I help you today?"
  - AR: "مرحباً! أنا جدري، مساعدك من مجموعة الجادرية. كيف يمكنني مساعدتك؟"
- Auto-open via IntersectionObserver on footer (once per session)
- RTL support when language is Arabic

**3. Edit: `src/App.tsx`**
- Render `<ChatBot />` globally inside the router

**4. Edit: `src/contexts/LanguageContext.ts`**
- Add translation keys: `chatbot.welcome`, `chatbot.placeholder`, `chatbot.title`
- EN welcome: "Hello! I'm Jadri, your AL-JADRIYA GROUP assistant. How can I help you today?"
- AR welcome: "مرحباً! أنا جدري، مساعدك من مجموعة الجادرية. كيف يمكنني مساعدتك؟"

**5. Edit: `src/components/FooterSection.tsx`**
- Add `id="footer"` to the root footer element for IntersectionObserver targeting

