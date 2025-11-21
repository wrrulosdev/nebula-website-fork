/**
 * Generates and appends a specified number of star elements
 * with randomized positions and animation delays to the container
 * element with the ID "stars".
 */
export function generateStars(): void {
  const starsContainer: HTMLElement | null = document.getElementById("stars");

  if (starsContainer instanceof HTMLElement) {
    const totalStars: number = 100;

    for (let i = 0; i < totalStars; i++) {
      const star: HTMLDivElement = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
  }
}
