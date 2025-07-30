// Modern Portfolio JavaScript

// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('i');
            if (icon) {
                icon.setAttribute('data-feather', theme === 'dark' ? 'sun' : 'moon');
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Cycling Text Animation
class CyclingText {
    constructor() {
        this.cyclingWords = document.querySelectorAll('.cycling-word');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.cyclingWords.length > 0) {
            this.startCycling();
        }
    }

    startCycling() {
        setInterval(() => {
            this.cyclingWords[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex + 1) % this.cyclingWords.length;
            this.cyclingWords[this.currentIndex].classList.add('active');
        }, 2000); // Change every 2 seconds
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Close mobile menu when clicking links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Scroll effects
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Set initial active link
        this.updateActiveLink();
    }

    toggleMobileMenu() {
        this.navToggle?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
    }

    closeMobileMenu() {
        this.navToggle?.classList.remove('active');
        this.navMenu?.classList.remove('active');
    }

    handleNavClick(e) {
        const href = e.target.getAttribute('href');
        
        // If link contains a different page (like index.html#section), allow normal navigation
        if (href.includes('.html')) {
            return; // Let the browser handle the navigation
        }
        
        // Only prevent default for same-page anchor links
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    handleScroll() {
        this.updateActiveLink();
    }

    updateActiveLink() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.observeSkillBars();
        this.observeCards();
    }

    observeSkillBars() {
        const skillBars = document.querySelectorAll('.progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
            });
        }, this.observerOptions);

        skillBars.forEach(bar => observer.observe(bar));
    }

    observeCards() {
        const cards = document.querySelectorAll('.expertise-card, .project-card, .skill-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, this.observerOptions);

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
}

// Project Filtering
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        // Set default active filter to UX Design
        const defaultFilter = document.querySelector('[data-filter="ux-design"]');
        if (defaultFilter) {
            this.filterProjects({ target: defaultFilter });
        }
        
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => this.filterProjects(e));
        });
    }

    filterProjects(e) {
        const filter = e.target.getAttribute('data-filter');
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter projects
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const tags = card.getAttribute('data-tags');
            const tagList = tags ? tags.split(',') : [];
            
            let shouldShow = false;
            
            if (filter === 'all') {
                shouldShow = true;
            } else if (category === filter) {
                shouldShow = true;
            } else if (tagList.includes(filter)) {
                shouldShow = true;
            }
            
            if (shouldShow) {
                card.classList.remove('hidden');
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.classList.add('hidden');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    if (card.classList.contains('hidden')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    }
}

// Expandable Skills Manager
class ExpandableSkills {
    constructor() {
        this.masterToggle = document.getElementById('skillsMasterToggle');
        this.skillContainers = document.querySelectorAll('.skill-items-container');
        this.isExpanded = false;
        this.init();
    }

    init() {
        if (this.masterToggle) {
            this.masterToggle.addEventListener('click', (e) => this.toggleAllSkills(e));
        }
        
        // Add click listeners to category headers
        const categoryHeaders = document.querySelectorAll('.skill-category-header');
        categoryHeaders.forEach(header => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', (e) => this.toggleSingleCategory(e));
        });
    }
    
    toggleSingleCategory(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const header = e.currentTarget;
        const category = header.closest('.skill-category');
        const container = category.querySelector('.skill-items-container');
        
        if (!container) return;
        
        const isExpanded = container.classList.contains('expanded');
        
        if (isExpanded) {
            container.classList.remove('expanded');
        } else {
            container.classList.add('expanded');
        }
        
        // Update master toggle state based on all categories
        this.updateMasterToggleState();
    }
    
    updateMasterToggleState() {
        const expandedContainers = document.querySelectorAll('.skill-items-container.expanded');
        const allExpanded = expandedContainers.length === this.skillContainers.length;
        const noneExpanded = expandedContainers.length === 0;
        
        this.isExpanded = allExpanded;
        
        const toggleText = this.masterToggle.querySelector('span');
        const icon = this.masterToggle.querySelector('i');
        
        if (allExpanded) {
            this.masterToggle.classList.add('expanded');
            if (toggleText) toggleText.textContent = 'Hide All Details';
            if (icon) icon.setAttribute('data-feather', 'chevron-up');
        } else {
            this.masterToggle.classList.remove('expanded');
            if (toggleText) toggleText.textContent = 'Show All Details';
            if (icon) icon.setAttribute('data-feather', 'chevron-down');
        }
        
        // Re-render feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    toggleAllSkills(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.isExpanded = !this.isExpanded;
        
        const toggleText = this.masterToggle.querySelector('span');
        const icon = this.masterToggle.querySelector('i');
        
        if (this.isExpanded) {
            // Expand all
            this.skillContainers.forEach(container => {
                container.classList.add('expanded');
            });
            this.masterToggle.classList.add('expanded');
            if (toggleText) toggleText.textContent = 'Hide All Details';
            if (icon) icon.setAttribute('data-feather', 'chevron-up');
        } else {
            // Collapse all
            this.skillContainers.forEach(container => {
                container.classList.remove('expanded');
            });
            this.masterToggle.classList.remove('expanded');
            if (toggleText) toggleText.textContent = 'Show All Details';
            if (icon) icon.setAttribute('data-feather', 'chevron-down');
        }
        
        // Re-render feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const submitButton = this.form.querySelector('button[type="submit"]');
        
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            this.showMessage('Thank you! Your message has been sent successfully.', 'success');
            this.form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            font-weight: 600;
            ${type === 'success' 
                ? 'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;' 
                : 'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;'
            }
        `;
        
        this.form.appendChild(messageDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Smooth scroll performance optimization
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Polyfill for smooth scrolling in older browsers
        if (!('scrollBehavior' in document.documentElement.style)) {
            this.addSmoothScrollPolyfill();
        }
    }

    addSmoothScrollPolyfill() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.smoothScrollTo(targetElement.offsetTop - 80, 800);
                }
            });
        });
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuart(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
}

// Scroll to Top Button
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => this.toggleVisibility());
        
        // Handle click to scroll to top
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        const scrolled = window.pageYOffset;
        const threshold = 300; // Show after scrolling 300px

        if (scrolled > threshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Retro TV Channel Switcher
class RetroTVChannels {
    constructor() {
        this.channels = document.querySelectorAll('.channel-item');
        this.currentChannel = 0;
        this.init();
    }

    init() {
        if (this.channels.length > 0) {
            this.startChannelCycling();
        }
    }

    startChannelCycling() {
        setInterval(() => {
            this.switchChannel();
        }, 4000); // Switch every 4 seconds
    }

    switchChannel() {
        // Hide current channel
        this.channels[this.currentChannel].classList.remove('active');
        
        // Move to next channel
        this.currentChannel = (this.currentChannel + 1) % this.channels.length;
        
        // Show new channel
        this.channels[this.currentChannel].classList.add('active');
    }
}

// Expandable Tech Stack
class ExpandableTechStack {
    constructor() {
        this.expandBtn = document.getElementById('expandTechStack');
        this.techContent = document.getElementById('techContent');
        this.init();
    }

    init() {
        if (!this.expandBtn || !this.techContent) return;
        
        this.expandBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        const isExpanded = this.techContent.classList.contains('expanded');
        
        if (isExpanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    expand() {
        this.techContent.classList.add('expanded');
        this.expandBtn.classList.add('expanded');
        this.expandBtn.innerHTML = '<i data-feather="minus"></i>';
        
        // Re-initialize feather icons for the new minus icon
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    collapse() {
        this.techContent.classList.remove('expanded');
        this.expandBtn.classList.remove('expanded');
        this.expandBtn.innerHTML = '<i data-feather="plus"></i>';
        
        // Re-initialize feather icons for the new plus icon
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize all components
    new ThemeManager();
    new CyclingText();
    new NavigationManager();
    new AnimationObserver();
    new ProjectFilter();
    new ExpandableSkills();
    new ContactForm();
    new SmoothScroll();
    new ScrollToTop();
    new RetroTVChannels();
    new ExpandableTechStack();

    // Add loading complete class for CSS animations
    document.body.classList.add('loaded');
});

// Handle window resize for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate any position-dependent elements
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.style.transform = 'translateY(0)';
        }
    }, 250);
});

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Script error handled:', e.message);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationManager,
        AnimationObserver,
        ProjectFilter,
        ContactForm
    };
}