
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
      technologies: ["TypeScript", "Tailwind CSS", "Solidity", "Python"],
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
        title: "AutoTab Group",
        description: "Chrome Extension designed to automatically group and organize tabs from the same website under a single, identifiable tab group. ",
        technologies: ["HTML", "Javascript", "ChromeTab API"],
        githubUrl: "https://github.com/Praveenkumar5048/AutoTabGroup",
        imageSrc: "/images/autotab.png"
    },
    {
        title: "CEMS Module",
        description: "Club Event Management System is a comprehensive web application built to streamline event organization within clubs or organizations",
        technologies: ["Tailwind CSS", "Nextjs", "Node", "Mongodb"],
        githubUrl: "https://github.com/Praveenkumar5048/CEMS",
        imageSrc: "/images/placeholder.svg"
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
        imageSrc: "/images/placeholder.svg"
    },
];