import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

interface TransitionContextType {
  navigateWithTransition: (to: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({ navigateWithTransition: () => {} });

export const usePageTransition = () => useContext(TransitionContext);

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState("");

  const navigateWithTransition = useCallback((to: string) => {
    setTarget(to);
    setShow(true);

    // After slide-up completes (0.5s), navigate and hold logo for 0.8s
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 600);

    // Then fade out
    setTimeout(() => {
      setShow(false);
    }, 1400);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "#2d3a4a" }}
          >
            <motion.img
              src={logoIcon}
              alt="AL-JADRIYA"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
