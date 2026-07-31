// Shared smooth-scroll helper used by both Navbar and MobileMenu so neither
// menu writes a URL hash.
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
