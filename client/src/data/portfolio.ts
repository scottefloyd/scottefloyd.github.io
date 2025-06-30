export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  categoryColor: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "rent-all",
    title: "Rent-All Case Study",
    category: "UX Design",
    description: "Design process for an app that enables people to make money by renting out their unused household items.",
    image: "https://scottefloyd.github.io/images/ra-cover.jpg",
    link: "https://scottefloyd.github.io/rent-all-case-study.html",
    categoryColor: "text-blue-600"
  },
  {
    id: "cyclist",
    title: "Cyclist Case Study",
    category: "UX Design", 
    description: "The design process from concept to high fidelity for a website to support community biking.",
    image: "https://scottefloyd.github.io/images/cyclist-preview.jpg",
    link: "https://scottefloyd.github.io/cyclist-case-study.html",
    categoryColor: "text-blue-600"
  },
  {
    id: "city-analysis",
    title: "City of Ann Arbor Website Task Analysis",
    category: "Usability",
    description: "A task analysis was conducted on a dated, overly technical city website.",
    image: "https://scottefloyd.github.io/images/a2.png",
    link: "https://scottefloyd.github.io/assets/a2-task-analysis.pdf",
    categoryColor: "text-green-600"
  },
  {
    id: "photobook",
    title: "Photobook Usability Report",
    category: "User Research",
    description: "Usability analysis of digital photobook design UI.",
    image: "https://scottefloyd.github.io/images/photobook.jpeg",
    link: "https://scottefloyd.github.io/assets/usability-report-summary.pdf",
    categoryColor: "text-purple-600"
  },
  {
    id: "boogie-battle",
    title: "Boogie Battle Mobile App",
    category: "Mobile App",
    description: "Final project for a front-end web development bootcamp.",
    image: "https://scottefloyd.github.io/images/boogie-preview.jpg",
    link: "https://scottefloyd.github.io/assets/boogie-battle-report.pdf",
    categoryColor: "text-orange-600"
  },
  {
    id: "extreme-sports",
    title: "Extreme Sports Competition App Survey",
    category: "User Research", 
    description: "A survey and analysis of an app concept for extreme sports.",
    image: "https://scottefloyd.github.io/images/kiter.jpg",
    link: "https://scottefloyd.github.io/assets/comp-app-survey.pdf",
    categoryColor: "text-purple-600"
  }
];

export const skills = {
  design: [
    "User Research",
    "Wireframing", 
    "Prototyping",
    "Usability Testing"
  ],
  technical: [
    "QA Automation",
    "Front-end Development",
    "Design Systems",
    "Accessibility"
  ]
};
