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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/rent-all-case-study.html",
    categoryColor: "text-secondary"
  },
  {
    id: "cyclist",
    title: "Cyclist Case Study",
    category: "UX Design", 
    description: "The design process from concept to high fidelity for a website to support community biking.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/cyclist-case-study.html",
    categoryColor: "text-secondary"
  },
  {
    id: "city-analysis",
    title: "City of Ann Arbor Website Task Analysis",
    category: "USABILITY",
    description: "A task analysis was conducted on a dated, overly technical city website.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/assets/a2-task-analysis.pdf",
    categoryColor: "text-accent"
  },
  {
    id: "photobook",
    title: "Photobook Usability Report",
    category: "USER RESEARCH",
    description: "Usability analysis of digital photobook design UI.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/assets/usability-report-summary.pdf",
    categoryColor: "text-emerald-600"
  },
  {
    id: "boogie-battle",
    title: "Boogie Battle Mobile App",
    category: "MOBILE APP",
    description: "Final project for a front-end web development bootcamp.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/assets/boogie-battle-report.pdf",
    categoryColor: "text-purple-600"
  },
  {
    id: "extreme-sports",
    title: "Extreme Sports Competition App Survey",
    category: "USER RESEARCH", 
    description: "A survey and analysis of an app concept for extreme sports.",
    image: "https://images.unsplash.com/photo-1544737151672-6e4d999de2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://scottefloyd.github.io/assets/comp-app-survey.pdf",
    categoryColor: "text-emerald-600"
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
