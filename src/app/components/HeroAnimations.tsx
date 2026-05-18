import { useEffect } from "react";

/**
 * Injects premium Bloomberg-style animations into the existing hero section
 * Uses vanilla CSS animations to avoid modifying the large Home.tsx file
 */
export default function HeroAnimations() {
  useEffect(() => {
    // Add animation styles
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInBlur {
        from {
          opacity: 0;
          filter: blur(8px);
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }
      }

      @keyframes slideUpFade {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes scaleUpFade {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes glowPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(252, 200, 45, 0); }
        50% { box-shadow: 0 0 20px 4px rgba(252, 200, 45, 0.3); }
      }

      @keyframes progressFill {
        0% { right: 72.68%; }
        50% { right: 0%; }
        100% { right: 72.68%; }
      }

      @keyframes lightSweep {
        from { left: -50%; }
        to { left: 150%; }
      }

      @keyframes particleFloat {
        0%, 100% {
          opacity: 0;
          transform: translate(-5px, -10px);
        }
        50% {
          opacity: 0.5;
          transform: translate(5px, 10px);
        }
      }

      @keyframes dotPulse {
        0%, 100% { box-shadow: 0 0 0 4px rgba(255, 130, 0, 0.18); }
        50% { box-shadow: 0 0 0 6px rgba(255, 130, 0, 0.25); }
      }

      /* Hero section animations */
      [data-name="Home"] > div:first-child {
        animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Label animation - EFG HERMES RESEARCH */
      [data-name="Home"] > div:first-child p:has([class*="EFG"]),
      [data-name="Home"] > div:first-child p:has([class*="HERMES"]) {
        animation: fadeInBlur 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Search bar animation */
      [data-name="Home"] > div:first-child [class*="backdrop-blur"] {
        animation: scaleUpFade 0.5s 0.7s cubic-bezier(0.16, 1, 0.3, 1) backwards;
      }

      /* Search button glow */
      [data-name="Home"] > div:first-child [class*="bg-[#fcc82d]"][class*="rounded-[8px]"] {
        animation: glowPulse 5s 1s infinite ease-in-out;
      }

      /* Progress bar animation */
      [data-name="Horizontal Divider"] > div[class*="bg-[#fcc82d]"] {
        animation: progressFill 8s infinite ease-in-out;
      }

      /* Dot pulse */
      [data-name="Background"] > div[data-name="Overlay+Shadow"] {
        animation: dotPulse 3s infinite ease-in-out;
      }

      /* Add particles */
      [data-name="Home"] > div:first-child::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 0% 50%, rgba(252, 200, 45, 0.08) 0%, transparent 50%);
        mix-blend-mode: overlay;
        pointer-events: none;
        animation: lightSweep 10s linear infinite;
      }
    `;
    document.head.appendChild(style);

    // Create floating particles
    const heroSection = document.querySelector('[data-name="Home"] > div:first-child');
    if (heroSection) {
      const particleContainer = document.createElement("div");
      particleContainer.style.cssText = "position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 10;";

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #fcc82d;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: particleFloat ${4 + Math.random() * 3}s ${Math.random() * 5}s infinite ease-in-out;
        `;
        particleContainer.appendChild(particle);
      }

      heroSection.appendChild(particleContainer);
    }

    // Animate heading lines with stagger
    const headings = document.querySelectorAll('[data-name="Home"] > div:first-child [class*="Newsreader"] p');
    headings.forEach((heading, index) => {
      (heading as HTMLElement).style.animation = `slideUpFade 0.8s ${0.2 + index * 0.15}s cubic-bezier(0.16, 1, 0.3, 1) backwards`;
    });

    // Animate description
    const description = document.querySelector('[data-name="Home"] > div:first-child [class*="Inter"][class*="text-[#bfbfbf]"]');
    if (description) {
      (description as HTMLElement).style.animation = "fadeIn 0.6s 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards";
    }

    return () => {
      document.head.removeChild(style);
      if (heroSection && particleContainer) {
        heroSection.removeChild(particleContainer);
      }
    };
  }, []);

  return null;
}
