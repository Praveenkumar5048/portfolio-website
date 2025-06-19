
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    imageSrc: string;
}
  
export const projects: ProjectCardProps[] = [
    {
      title: "Virtual MediQueue",
      description: "A web application for managing doctor appointments, virtual queues, and real-time updates using WebSocket integration.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/Praveenkumar5048/Virtual-Queue",
      demoUrl: "",
      imageSrc: "/images/vr-medi.png"
    },
    {
      title: "FundVerify",
      description: "Automated Decentralised Government Fund Allocation and AI Verification.",
      technologies: ["TypeScript", "Tailwind CSS", "Solidity", "Python", "IPFS"],
      githubUrl: "https://github.com/Praveenkumar5048/Public-Fund-Management",
      demoUrl: "https://www.youtube.com/watch?v=mUQlpHkGYsg",
      imageSrc: "/images/FundVerfiy.png"
    },
    {
      title: "TweetHub",
      description: "A Social media platform that resembles Twitter. This project focuses DBMS using Mysql",
      technologies: ["Tailwind CSS", "Nextjs", "Node", "Mysql"],
      githubUrl: "https://github.com/Praveenkumar5048/TweetHub",
      imageSrc: "/images/tweethub.png"
    },
    {
      title: "Kannada kids",
      description: "A web-based interactive platform for Nursery children to learn Kannada alphabets through tracing, speech guidance, and gamified exercises. ",
      technologies: ["TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Praveenkumar5048/KannadaKids",
      demoUrl: "https://kannada-kids.vercel.app/",
      imageSrc: "/images/kannadakids.png"
    },
    {
      title: "Credit Risk",
      description: "Credit Risk Assessment ML model. The system not only predicts whether a borrower is likely to default, but also suggests Optimized Loan Amount ",
      technologies: ["Flask", "React"],
      githubUrl: "https://github.com/Praveenkumar5048/CreditRisk-Prediction",
      demoUrl: "https://credit-risk-prediction-rho.vercel.app/",
      imageSrc: "/images/creditrisk.png"
    },
    {
        title: "AutoTab Group",
        description: "Chrome Extension designed to automatically group and organize tabs from the same website under a single, identifiable tab group. ",
        technologies: ["HTML", "Javascript", "ChromeTab API"],
        githubUrl: "https://github.com/Praveenkumar5048/AutoTabGroup",
        imageSrc: "/images/autotab.png"
    },
    {
        title: "CEMS Module",
        description: "Club Event Management System is a comprehensive web application built to streamline event organization within clubs or organizations",
        technologies: ["Nextjs", "Tailwind CSS", "Node", "Mongodb"],
        githubUrl: "https://github.com/Praveenkumar5048/CEMS",
        imageSrc: "/images/cems.png"
    },
    {
        title: "CrowdChain",
        description: "An Ethereum Blockchain-based crowdfunding platform for creators to launch projects, set funding goals, and connect with backers for support.",
        technologies: ["React", "Solidity"],
        githubUrl: "https://github.com/Praveenkumar5048/Ethereum_campaign",
        imageSrc: "/images/placeholder.svg"
    },
    {
        title: "Sports Tracker",
        description: "This web application designed to help you track your favorite cricket teams' ongoing matches, view match results, and check upcoming schedules",
        technologies: ["React", "CSS", "Public API"],
        githubUrl: "https://github.com/Praveenkumar5048/sports-tracker",
        imageSrc: "/images/sportstrack.png"
    },
];