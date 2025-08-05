// Modern Portfolio JavaScript - Clean Version

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
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
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
        if (this.navToggle && this.navMenu) {
            this.navToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        }
    }

    closeMobileMenu() {
        this.navToggle?.classList.remove('active');
        this.navMenu?.classList.remove('active');
    }

    handleNavClick(e) {
        const href = e.target.getAttribute('href');
        
        if (href.includes('.html')) {
            return;
        }
        
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            setTimeout(() => {
                this.updateActiveLink();
            }, 100);
        }
    }

    handleScroll() {
        this.updateActiveNavBackground();
        this.updateActiveLink();
    }

    updateActiveNavBackground() {
        const scrolled = window.pageYOffset > 50;
        this.nav?.classList.toggle('scrolled', scrolled);
    }

    updateActiveLink() {
        const scrollPosition = window.pageYOffset + 100;
        
        let current = '';
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeToggleMobile = document.getElementById('themeToggleMobile');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        if (this.themeToggleMobile) {
            this.themeToggleMobile.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcons();
    }

    updateThemeIcons() {
        const isDark = this.currentTheme === 'dark';
        const iconName = isDark ? 'sun' : 'moon';
        const themeText = isDark ? 'Light Mode' : 'Dark Mode';
        
        [this.themeToggle, this.themeToggleMobile].forEach(toggle => {
            if (toggle) {
                const icon = toggle.querySelector('i');
                const span = toggle.querySelector('span');
                
                if (icon) {
                    icon.setAttribute('data-feather', iconName);
                }
                if (span) {
                    span.textContent = themeText;
                }
            }
        });
        
        if (typeof feather !== 'undefined') {
            feather.replace();
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
        }, 2000);
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

        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        const scrolled = window.pageYOffset;
        const threshold = 300;

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

// Google Analytics Integration
class GoogleAnalytics {
    constructor() {
        this.measurementId = window.ENV?.GA_MEASUREMENT_ID || null;
        if (this.measurementId && this.measurementId !== 'PLACEHOLDER_GA_ID') {
            this.init();
        }
    }

    init() {
        if (typeof window === 'undefined') return;
        this.loadGoogleAnalytics();
        this.trackPageView(window.location.pathname);
    }

    loadGoogleAnalytics() {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${this.measurementId}');
        `;
        document.head.appendChild(script2);
    }

    trackPageView(url) {
        if (typeof window === 'undefined' || !window.gtag) return;
        
        window.gtag('config', this.measurementId, {
            page_path: url
        });
    }

    trackEvent(action, category = 'engagement', label = '', value = 1) {
        if (typeof window === 'undefined' || !window.gtag) return;
        
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize components
    new GoogleAnalytics();
    new ThemeManager();
    new CyclingText();
    new NavigationManager();
    new ScrollToTop();
});