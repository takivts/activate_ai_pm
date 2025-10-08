import VtsAiDefault from "./vts-ai/vts-ai-default";
import VtsAiTenantProfile from "./vts-ai/vts-ai-tenant-profile";
import VtsAiAssistant from "./vts-ai/vts-ai-assistant";
import { usePromptCycle } from "./hooks/usePromptCycle";
import { useAppContext } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import vtsAiMorph from "../../../../public/vts-ai-morph.json";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const promptVariants = {
  hidden: {
    opacity: 0,
    x: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: 10,
    scale: 0.95,
  },
};

export default function VtsAiFloatingCTA({ className }: { className?: string }) {
  const { isVtsAiOpen, setIsVtsAiOpen, vtsAiContentType, setVtsAiContentType } = useAppContext();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [wasClosedFromOverlay, setWasClosedFromOverlay] = useState(false);
  const pathname = usePathname();

  const FormatVtsAiContent = () => {
    // Show Assistant modal on deals profile, activate, and dealsv2 pages
    const isAssistantPage = pathname?.includes("/vts/lease/deals/profile") || 
                           pathname?.includes("/vts/activate") ||
                           pathname?.includes("/vts/lease/dealsv2");
    
    console.log("VTS AI Debug:", { pathname, isAssistantPage, vtsAiContentType });
    
    if (isAssistantPage) {
      return <VtsAiAssistant className="absolute right-24 bottom-16" isOpen={isVtsAiOpen} />;
    } else if (vtsAiContentType === "tenant") {
      return <VtsAiTenantProfile className="absolute right-24 bottom-16" isOpen={isVtsAiOpen} />;
    } else {
      return <VtsAiDefault className="absolute right-24 bottom-16" isOpen={isVtsAiOpen} />;
    }
  };

  useEffect(() => {
    lottieRef.current?.goToAndStop(15, true);
    setTimeout(() => {
      lottieRef.current?.playSegments([15, 0], true);
    }, 1000);
  }, []);

  // Handle overlay close animation
  useEffect(() => {
    if (!isVtsAiOpen && wasClosedFromOverlay) {
      lottieRef.current?.playSegments([30, 0], true);
      setWasClosedFromOverlay(false);
    }
  }, [isVtsAiOpen, wasClosedFromOverlay]);

  // Listen for overlay close event
  useEffect(() => {
    const handleOverlayClose = () => {
      lottieRef.current?.playSegments([30, 0], true);
    };

    window.addEventListener("vts-ai-overlay-close", handleOverlayClose);

    return () => {
      window.removeEventListener("vts-ai-overlay-close", handleOverlayClose);
    };
  }, []);

  const handleFloatingCTAClick = () => {
    // Don't set content type on assistant pages - let assistant handle it
    const isAssistantPage = pathname?.includes("/vts/lease/deals/profile") || 
                           pathname?.includes("/vts/activate") ||
                           pathname?.includes("/vts/lease/dealsv2");
    if (!isAssistantPage) {
      setVtsAiContentType("default");
    }
    setIsVtsAiOpen(!isVtsAiOpen);
    lottieRef.current?.setSpeed(2);
    if (!isVtsAiOpen) {
      lottieRef.current?.playSegments([15, 30], true);
    } else {
      lottieRef.current?.setDirection(-1);
      lottieRef.current?.playSegments([30, 15], true);
    }
  };

  const isAssistantPage = pathname?.includes("/vts/lease/deals/profile") || 
                           pathname?.includes("/vts/activate") ||
                           pathname?.includes("/vts/lease/dealsv2");
  
  const { currentPrompt } = usePromptCycle({
    promptDuration: 8000,
    promptDelay: 8000,
    initialDelay: 5000,
    isActive: !isVtsAiOpen && !isAssistantPage, // Disable prompts on assistant pages
  });

  const handlePromptClick = () => {
    if (currentPrompt) {
      setVtsAiContentType("default", currentPrompt.payload);
      setIsVtsAiOpen(true);
      lottieRef.current?.playSegments([15, 30], true);
    }
  };

  return (
    <>
      <div
        className={`group fixed right-8 bottom-8 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full ${className}`}
        onClick={handleFloatingCTAClick}
        onMouseEnter={() => {
          if (!isVtsAiOpen) {
            lottieRef.current?.setSpeed(2);
            lottieRef.current?.playSegments([0, 15], true);
          }
        }}
        onMouseLeave={() => {
          if (!isVtsAiOpen) {
            lottieRef.current?.setSpeed(2);
            lottieRef.current?.playSegments([15, 0], true);
          }
        }}
      >
        <div
          className={`animate-fab-glow pointer-events-none absolute -inset-1 -z-10 scale-0 rounded-full bg-[radial-gradient(at_top,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_25%,var(--color-vts-ai-dark)_75%,var(--color-vts-ai-gray)_100%)] blur-xs ${
            isVtsAiOpen ? "scale-85 opacity-75" : "scale-0 opacity-0"
          }`}
        />
        <div
          className={`layered-shadow absolute z-50 overflow-clip rounded-full transition-all duration-200 ease-in-out ${
            isVtsAiOpen ? "size-12" : "size-13 group-hover:size-14"
          }`}
        >
          {/* <div className="absolute -top-4.5 -left-4.5 size-22">
            <video src="/vts-ai-swirl.mp4" autoPlay loop muted />
          </div> */}
          <div className="animate-fab-glow absolute -top-2 -left-2 z-50 size-18 rounded-full bg-[linear-gradient(45deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_125%)]" />
        </div>
        {!isVtsAiOpen && (
          <AnimatePresence mode="wait">
            {currentPrompt && (
              <motion.div
                key={currentPrompt.prompt}
                variants={promptVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`layered-shadow border-vts-purple-300 bg-vts-purple-100 absolute top-2 right-18 w-fit cursor-pointer rounded-2xl border px-3 py-2 whitespace-nowrap`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePromptClick();
                }}
              >
                <p className="text-vts-purple-700 cursor-pointer text-sm underline-offset-2 select-none">
                  {currentPrompt.prompt}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <Lottie
          lottieRef={lottieRef}
          animationData={vtsAiMorph}
          autoplay={false}
          loop={false}
          className="z-50 size-8"
        />
      </div>
      {FormatVtsAiContent()}
    </>
  );
}
