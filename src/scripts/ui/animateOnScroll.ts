const ANIMATE_CLASSES: string[] = [
  ".animate-fade-slide-down",
  ".text-glow-pulse",
  ".animate-fade-slide-up",
];

/**
 * Initializes an IntersectionObserver that adds the "active" class
 * to elements matching predefined animation classes when they scroll
 * into view, then stops observing them.
 */
export function initAnimateOnScroll(): void {
  const selector: string = ANIMATE_CLASSES.join(", ");
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(selector);

  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.1,
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observerInstance: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("active");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    options
  );

  elements.forEach((el: HTMLElement) => observer.observe(el));
}
