# Scott Floyd - Portfolio Website

A modern, responsive portfolio website showcasing expertise in QA automation, test engineering, and AI consulting services.

## 🚀 Live Site
[View Portfolio](https://scottefloyd.github.io/portfolio) <!-- Update with your actual GitHub Pages URL -->

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and transitions
- **Contact Form**: Functional contact form powered by Formspree
- **Analytics**: Google Analytics 4 integration for visitor insights
- **Project Showcase**: Detailed case studies and project portfolio
- **Skills Section**: Expandable expertise categories

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Feather Icons
- **Fonts**: Inter (Google Fonts)
- **Form Handling**: Formspree
- **Analytics**: Google Analytics 4
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
├── index.html              # Main portfolio page
├── resume.html             # Resume page
├── cyclist-case-study.html # UX case study
├── rent-all-case-study.html # UX case study
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── env-config.js           # Environment configuration
├── assets/                 # PDF documents and files
├── images/                 # Project images and graphics
└── attached_assets/        # Additional assets
```

## 🎯 Key Sections

- **Hero**: Dynamic text animation and professional introduction
- **Current Work**: SPOTR app development timeline and status
- **Projects On Deck**: Upcoming client projects pipeline
- **Past Projects**: UX design work and case studies
- **Skills & Expertise**: Collapsible categories with detailed descriptions
- **Contact**: Functional contact form with project type selection

## 🚀 Local Development

1. Clone the repository
```bash
git clone https://github.com/scottefloyd/portfolio.git
cd portfolio
```

2. Start a local server
```bash
# Python
python -m http.server 5000

# Node.js
npx serve .

# PHP
php -S localhost:5000
```

3. Open `http://localhost:5000` in your browser

## 📧 Contact Form Setup

The contact form uses Formspree for form submissions. To set up:

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `index.html` with your endpoint
4. Configure Google Analytics measurement ID in environment variables

## 📊 Analytics

Google Analytics 4 is integrated to track:
- Page views
- Contact form submissions
- Project link clicks
- Navigation interactions
- Skills section expansions
- Theme toggle usage

## 🎨 Design Features

- **Typography**: Modern system font stack with Inter fallback
- **Color Scheme**: Custom CSS variables for consistent theming
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized images and minimal dependencies

## 📱 Mobile Experience

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images for different screen sizes
- Fast loading times

## 🔧 Customization

The website uses CSS custom properties for easy theming:

```css
:root {
  --accent-primary: #4f46e5;
  --accent-secondary: #7c3aed;
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
  /* ... more variables */
}
```

## 📄 License

© 2025 Scott Floyd. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. If you find any issues or have suggestions, feel free to open an issue.

---

Built with ❤️ by Scott Floyd