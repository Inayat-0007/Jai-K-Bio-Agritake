// Enhanced scroll animations with stagger effect and better performance
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          // Add stagger delay for multiple elements
          setTimeout(() => {
            entry.target.classList.add('visible');
            // Add additional animation classes for enhanced effects
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.opacity = '1';
          }, index * 100);
          observer.unobserve(entry.target);
        });
      }
    });
  }, observerOptions);

  // Enhanced fade-in elements with initial styling
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element, index) => {
    element.style.transform = 'translateY(30px) scale(0.95)';
    element.style.opacity = '0';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
  });

  // Add hover animations to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Optimized parallax with throttling for better performance
function initParallaxEffect() {
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.bg-fixed');
    
    parallaxElements.forEach((element) => {
      const speed = 0.3;
      element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
    });
    
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    initScrollAnimations();
    initParallaxEffect();
  } catch (error) {
    console.error('Animation initialization error:', error);
  }
});