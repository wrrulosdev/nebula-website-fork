interface CountUpOptions {
  selector?: string;
  onComplete?: (element: HTMLElement, finalValue: number) => void;
}

/**
 * Applies a count-up animation to all elements that match the selector.
 *
 * Each element must have a `data-count-target` attribute containing the numeric value
 * it should animate toward. The animation starts only when the element becomes
 * visible in the viewport. Elements may optionally include `data-suffix`
 * to append custom text after the number (%, years, etc.).
 *
 * @param selector - CSS selector used to find target elements.
 * @param onComplete - Optional callback fired after each element finishes animating.
 */
export const applyCountUpAnimation = ({
  selector = ".stat-number",
  onComplete,
}: CountUpOptions = {}): void => {

  /**
   * Animate a single element from 0 up to the given target value.
   *
   * @param element - HTMLElement whose text will be animated.
   * @param target - The final number to reach.
   * @param suffix - Optional text appended after the number.
   */
  const animateNumber = (
    element: HTMLElement,
    target: number,
    suffix: string
  ): void => {
    const durationMs: number = 1000;
    const startTimestamp: number = performance.now();

    /**
     * Updates the text content each animation frame.
     *
     * @param now - Current timestamp provided by requestAnimationFrame.
     */
    const update = (now: number): void => {
      const elapsed: number = now - startTimestamp;
      const progress: number = Math.min(elapsed / durationMs, 1);
      const currentValue: number = Math.floor(progress * target);

      element.textContent = formatNumber(currentValue) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatNumber(target) + suffix;
        onComplete?.(element, target);
      }
    };

    requestAnimationFrame(update);
  };

  /**
   * Formats a number into a readable compact string (e.g., 1500 → "+1K").
   *
   * @param num - Number to format.
   * @returns Formatted string.
   */
  const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000_000) {
      return `+${Math.floor(num / 1_000_000_000_000)}T`;
    }

    if (num >= 1_000_000) {
      return `+${Math.floor(num / 1_000_000)}M`;
    }

    if (num >= 1000) {
      return `+${Math.floor(num / 1000)}K`;
    }

    return num.toString();
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], obs: IntersectionObserver): void => {
      entries.forEach((entry: IntersectionObserverEntry): void => {
        if (!entry.isIntersecting) return;

        const el: HTMLElement = entry.target as HTMLElement;

        const rawTarget: string | null = el.getAttribute("data-count-target");
        const suffix: string = el.getAttribute("data-suffix") ?? "";

        if (!rawTarget) return;

        const targetValue: number = Number(rawTarget);
        if (isNaN(targetValue)) return;

        animateNumber(el, targetValue, suffix);
        obs.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(selector).forEach((el: Element): void => {
    observer.observe(el as HTMLElement);
  });
};
