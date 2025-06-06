"use strict";

const nav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");

// Function to toggle navigation state
function toggleNav() {
  nav.classList.toggle("nav-expanded");
  // Set aria-expanded attribute for accessibility
  const isExpanded = nav.classList.contains("nav-expanded");
  toggleBtn.setAttribute("aria-expanded", isExpanded);

  // Optional: Adjust main content margin if nav pushes content down (less common for fixed overlay)
  // If you want main to push down, you'd need to measure nav height here and set main's margin.
  // For overlay menu, this isn't necessary as main stays put.
}

// Event listener for the toggle button
toggleBtn.addEventListener("click", toggleNav);

// Optional: Close nav when a nav item or social account is clicked (common mobile pattern)
document.querySelectorAll(".site-nav-item, .social-account").forEach((item) => {
  item.addEventListener("click", () => {
    if (nav.classList.contains("nav-expanded")) {
      toggleNav(); // Use the toggleNav function to also update aria-expanded
    }
  });
});

// Optional: Close nav if window is resized above mobile breakpoint (e.g., from expanded mobile to desktop view)
window.addEventListener("resize", () => {
  if (window.innerWidth > 544 && nav.classList.contains("nav-expanded")) {
    toggleNav(); // Collapse nav if resized to desktop while expanded
  }
});
