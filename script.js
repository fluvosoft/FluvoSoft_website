// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
            const answer = faq.querySelector('.faq-answer');
            if (answer) {
                answer.style.maxHeight = null;
            }
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            if (answer) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        }
    });
});

// Tabs Functionality
const tabs = document.querySelectorAll('.tab');
const previewFrame = document.querySelector('.preview-frame');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // You can add logic here to change the preview frame content
        // based on which tab is active
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.bento-tile, .feature-item, .testimonial-card, .pricing-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(9, 9, 11, 0.8)';
        navbar.style.backdropFilter = 'blur(12px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.01)';
        navbar.style.backdropFilter = 'blur(12px)';
    }
    
    lastScroll = currentScroll;
});

// Device Toggle Functionality
const deviceButtons = document.querySelectorAll('.device-toggle button');

deviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        deviceButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-ghost');
        });
        
        button.classList.add('active');
        button.classList.remove('btn-ghost');
        button.classList.add('btn-secondary');
    });
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroMockup = document.querySelector('.hero-mockup');
    
    if (heroMockup) {
        heroMockup.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Add ripple effect to cards on click
const cards = document.querySelectorAll('.bento-tile, .testimonial-card, .pricing-card');

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Logo Grid Animation
const logoItems = document.querySelectorAll('.logo-item');
logoItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Testimonial Cards Stagger Animation
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

// Feature Items Stagger Animation
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Pricing Cards Hover Effect
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(251, 146, 60, 0.60)';
        card.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.borderColor = 'rgba(250, 250, 250, 0.20)';
        }
        card.style.transform = 'scale(1)';
    });
});

// Mobile Menu Toggle (if needed)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768 && navMenu) {
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-toggle btn-ghost';
        menuButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        navbar.appendChild(menuButton);
    }
}

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Preload critical images
const preloadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
};

// Call preload on page load
window.addEventListener('load', preloadImages);

// Add smooth reveal for sections on scroll
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.05
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(9, 9, 11, 0.8)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.01)';
    }
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add copy functionality for code snippets (if any)
const copyButtons = document.querySelectorAll('.copy-button');
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const code = button.previousElementSibling;
        navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
});

// Console log for developers
console.log('%c🚀 Launch UI', 'font-size: 24px; font-weight: bold; color: #FB923C;');
console.log('%cBuilt with React, Shadcn/ui and Tailwind', 'font-size: 14px; color: #FDBA74;');
