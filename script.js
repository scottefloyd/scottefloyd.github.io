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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize components
    new ThemeManager();
    new NavigationManager();
});