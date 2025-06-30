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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23dbeafe'/%3E%3Ccircle cx='200' cy='150' r='60' fill='%232563eb' opacity='0.8'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3ERent-All%3C/text%3E%3C/svg%3E",
    link: "https://scottefloyd.github.io/rent-all-case-study.html",
    categoryColor: "text-blue-600"
  },
  {
    id: "cyclist",
    title: "Cyclist Case Study",
    category: "UX Design", 
    description: "The design process from concept to high fidelity for a website to support community biking.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23dbeafe'/%3E%3Ccircle cx='120' cy='200' r='40' fill='none' stroke='%232563eb' stroke-width='4'/%3E%3Ccircle cx='280' cy='200' r='40' fill='none' stroke='%232563eb' stroke-width='4'/%3E%3Cpath d='M120 200 L200 120 L280 200' fill='none' stroke='%232563eb' stroke-width='4'/%3E%3Ctext x='200' y='80' text-anchor='middle' fill='%232563eb' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3ECyclist%3C/text%3E%3C/svg%3E",
    link: "https://scottefloyd.github.io/cyclist-case-study.html",
    categoryColor: "text-blue-600"
  },
  {
    id: "city-analysis",
    title: "City of Ann Arbor Website Task Analysis",
    category: "Usability",
    description: "A task analysis was conducted on a dated, overly technical city website.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23dcfce7'/%3E%3Crect x='150' y='80' width='100' height='120' fill='%2316a34a' opacity='0.8'/%3E%3Crect x='170' y='100' width='60' height='80' fill='%23ffffff'/%3E%3Ctext x='200' y='230' text-anchor='middle' fill='%2316a34a' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3EAnn Arbor%3C/text%3E%3C/svg%3E",
    link: "https://scottefloyd.github.io/assets/a2-task-analysis.pdf",
    categoryColor: "text-green-600"
  },
  {
    id: "photobook",
    title: "Photobook Usability Report",
    category: "User Research",
    description: "Usability analysis of digital photobook design UI.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3e8ff'/%3E%3Crect x='120' y='80' width='160' height='120' fill='%237c3aed' opacity='0.8'/%3E%3Crect x='140' y='100' width='40' height='30' fill='%23ffffff'/%3E%3Crect x='190' y='100' width='40' height='30' fill='%23ffffff'/%3E%3Crect x='240' y='100' width='40' height='30' fill='%23ffffff'/%3E%3Ctext x='200' y='230' text-anchor='middle' fill='%237c3aed' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3EPhotobook%3C/text%3E%3C/svg%3E",
    link: "https://scottefloyd.github.io/assets/usability-report-summary.pdf",
    categoryColor: "text-purple-600"
  },
  {
    id: "boogie-battle",
    title: "Boogie Battle Mobile App",
    category: "Mobile App",
    description: "Final project for a front-end web development bootcamp.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fed7aa'/%3E%3Crect x='160' y='60' width='80' height='140' rx='10' fill='%23ea580c' opacity='0.8'/%3E%3Ccircle cx='200' cy='120' r='25' fill='%23ffffff'/%3E%3Ctext x='200' y='128' text-anchor='middle' fill='%23ea580c' font-family='Arial, sans-serif' font-size='12' font-weight='bold'%3E♪%3C/text%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%23ea580c' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3EBoogie Battle%3C/text%3E%3C/svg%3E",
    link: "https://scottefloyd.github.io/assets/boogie-battle-report.pdf",
    categoryColor: "text-orange-600"
  },
  {
    id: "extreme-sports",
    title: "Extreme Sports Competition App Survey",
    category: "User Research", 
    description: "A survey and analysis of an app concept for extreme sports.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3e8ff'/%3E%3Cpath d='M100 220 Q150 100 200 150 T300 120' fill='none' stroke='%237c3aed' stroke-width='4'/%3E%3Ccircle cx='200' cy='150' r='15' fill='%237c3aed'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%237c3aed' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3EExtreme Sports%3C/text%3E%3C/svg%3E",
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
