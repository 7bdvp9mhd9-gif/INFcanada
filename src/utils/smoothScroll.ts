import Lenis from "lenis";

declare global {
  interface Window {
    __infLenis?: Lenis;
  }
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

window.__infLenis?.destroy();

if (!prefersReducedMotion.matches) {
  window.__infLenis = new Lenis({
    lerp: 0.24,
    wheelMultiplier: 1.12,
    gestureOrientation: "vertical",
    smoothWheel: true,
    syncTouch: false,
    anchors: true,
    autoRaf: true,
    stopInertiaOnNavigate: true,
  });
} else {
  window.__infLenis = undefined;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    window.__infLenis?.destroy();
    window.__infLenis = undefined;
  });
}
