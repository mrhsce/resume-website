import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohammadreza Heydarian - PhD researcher, software engineer',
  description: 'Portfolio of Mohammadreza Heydarian, a PhD student of Computer Science Engineering with extensive experience in software development and research.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohammadreza Heydarian.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full-stack software engineer</strong> and <strong className="text-stone-100">final-year PhD candidate</strong> with <strong className="text-stone-100">6+ years of experience</strong> building backend, web, and mobile systems. Experienced in <strong className="text-stone-100">Python, JavaScript frameworks, SQL</strong>, and end-to-end software development. Strong background in <strong className="text-stone-100">scalable systems</strong>, <strong className="text-stone-100">research-driven engineering</strong>, and translating complex problems into production-ready solutions.
      </p>
    </>
  ),

  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Full-stack software engineer and final-year PhD candidate at Ghent University - imec. With 6+ years of professional experience, I specialize in building backend, web, and mobile systems. I hold an MSc in Computer Science Engineering from Sharif University of Technology and a BSc from Iran University of Science and Technology.

My expertise spans Python, JavaScript frameworks, SQL databases, REST API design, and end-to-end software development across scalable systems. My PhD research focuses on optimization and control algorithms for industrial wireless networks, particularly MIMO-based Time-Sensitive Networks (TSN), where I've achieved significant improvements in network capacity through advanced scheduling and resource allocation strategies.

I am seeking full-stack or backend-focused software engineering roles, with strong interest and adaptability in areas such as AI engineering and applied machine learning.`,
  aboutItems: [
    {label: 'Location', text: 'Technologiepark-Zwijnaarde 126, 9052 Gent, Belgium', Icon: MapIcon},
    {label: 'Study', text: 'Ghent University • Sharif University of Technology • Iran University of Science and Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'PhD Researcher at Ghent University - imec', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'PHP',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'REST APIs',
        level: 9,
      },
      {
        name: 'API Design',
        level: 8,
      },
      {
        name: 'Service Architecture',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Android (Java)',
        level: 8,
      },
      {
        name: 'HTML/CSS',
        level: 8,
      },
    ],
  },
  {
    name: 'Databases & Tools',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
      {
        name: 'SQLite',
        level: 8,
      },
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Linux',
        level: 8,
      },
    ],
  },
  {
    name: 'Specialized',
    skills: [
      {
        name: 'OpenCV',
        level: 7,
      },
      {
        name: 'Arduino',
        level: 8,
      },
      {
        name: 'Embedded Systems',
        level: 8,
      },
      {
        name: 'IoT Systems',
        level: 8,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Persian',
        level: 10,
      },
      {
        name: 'Kurdish',
        level: 10,
      },
      {
        name: 'Dutch',
        level: 5,
      },
    ],
  },
];

/**
 * Projects section
 */
export const projects: TimelineItem[] = [
  {
    date: '2023 - 2024',
    location: 'Personal Project',
    title: 'IoT Smart Home Monitoring and Control System',
    content: (
      <p>
        Designed and built an IoT-based smart home system using ESP32, Raspberry Pi, and environmental sensors.<br/>
        Developed embedded software with Arduino/C++ for wireless sensor data collection and transmission.<br/>
        Implemented server-side control logic to automate devices based on real-time sensor data.
      </p>
    ),
  },
  {
    date: '2023',
    location: 'Personal Project',
    title: 'Investment Fund Reporting Telegram Bot',
    content: (
      <p>
        Built a Python-based Telegram bot for investment fund reporting with Google Sheets integration.<br/>
        Implemented features for portfolio updates, activity tracking, automated PDF report generation, and audit logging.<br/>
        Structured using a layered, service-oriented architecture for maintainability and extensibility.
      </p>
    ),
  },
  {
    date: '2021 - 2023',
    location: 'Personal Project',
    title: 'Vision-Based Drone Guidance System',
    content: (
      <p>
        Developed an Android-based drone guidance system for civilian and emergency-response scenarios.<br/>
        Implemented computer vision with OpenCV to track visual guidance markers and translate to control inputs.<br/>
        Integrated DJI SDK for real-time drone control from an Android application.
      </p>
    ),
  },
  {
    date: '2020 - 2021',
    location: 'Personal Project',
    title: 'Android VoIP Client Using PJSIP',
    content: (
      <p>
        Developed an Android VoIP client by compiling, embedding, and debugging the PJSIP stack.<br/>
        Implemented core client functionality for use within a VoIP telephony system using Java (Android) and C.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'Full-Stack Project',
    title: 'Locksmith Dispatch Platform',
    content: (
      <p>
        Built a full-stack dispatching system including backend services, a mobile app (React Native), and an admin panel (Angular).<br/>
        Designed the platform to connect customers with locksmiths and support service request management and dispatch operations.
      </p>
    ),
  },
];

/**
 * Honors and Awards section
 */
export const awards: TimelineItem[] = [
  {
    date: '2024',
    location: 'Iran',
    title: 'Top 0.2% in Iranian National Graduate Entrance Exam',
    content: (
      <p>
        Ranked 36th out of 30K candidates (~top 0.2%) in the Iranian National Graduate Entrance Exam (Master's level).
      </p>
    ),
  },
  {
    date: '2012',
    location: 'Iran',
    title: 'Top 0.05% in Iranian National University Entrance Exam',
    content: (
      <p>
        Ranked 126th out of 250K candidates (~top 0.05%) in the Iranian National University Entrance Exam (Bachelor's level).
      </p>
    ),
  },
  {
    date: '2012',
    location: 'Iran',
    title: 'NODET Excellence Recognition',
    content: (
      <p>
        Ranked 1st (High School) and 2nd (Middle School) in Provincial Entrance Exams for the National Organization for Development of Exceptional Talents (NODET / "Sampad").
      </p>
    ),
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2022 - Present',
    location: 'Ghent University',
    title: 'PhD in Computer Science Engineering',
    content: (
      <p>
        <strong>Thesis:</strong> Software based networking for 6G<br/>
        <strong>Focus:</strong> Time-Sensitive Networks, mmWave MIMO, wireless systems
      </p>
    ),
  },
  {
    date: 'Sep 2016 - Dec 2018',
    location: 'Sharif University of Technology',
    title: 'MSc in Computer Science Engineering',
    content: (
      <p>
        <strong>Thesis:</strong> A real-time and energy-efficient infrastructure for computation offloading in IoT
      </p>
    ),
  },
  {
    date: 'Sep 2012 - Sep 2016',
    location: 'Iran University of Science and Technology',
    title: 'BSc in Computer Science Engineering',
    content: (
      <p>
        <strong>Final Project:</strong> Smart Training and Flashcard Formation System
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2022 - Present',
    location: 'Ghent University – imec',
    title: 'PhD Researcher',
    content: (
      <p>
        Developed optimization and control algorithms for industrial wireless networks, focusing on MIMO-based Time-Sensitive Networking (TSN).<br/>
        Designed and implemented a modular simulation framework in Python to model wireless channels, physical environments, mobility, and traffic behavior.<br/>
        Achieved up to 300% improvement in network capacity for TSN traffic through advanced scheduling and resource allocation strategies.<br/>
        Authored 1 peer-reviewed journal publication; 2 additional manuscripts under review and 1 in preparation.
      </p>
    ),
  },
  {
    date: 'Nov 2019 - Aug 2022',
    location: 'Center for Infrastructure Sustainability and Resilience Research, Sharif University',
    title: 'Full-Stack Developer',
    content: (
      <p>
        Designed and developed a building information collection platform across backend (Node.js, MongoDB, SQLite), mobile (React Native), and web admin panel (Angular).<br/>
        Implemented end-to-end features across the full development lifecycle, including backend services, API integration, and frontend interfaces.<br/>
        Deployed and maintained a production system used by 40+ surveyors and administrators.
      </p>
    ),
  },
  {
    date: 'Nov 2018 - Nov 2019',
    location: 'Monta – E-learning Platform',
    title: 'Full-Stack Developer',
    content: (
      <p>
        Developed native mobile applications for Android and iOS, implementing UI components and integrating backend APIs using Java (Android) and React Native.<br/>
        Contributed to backend development by implementing server-side features in Java.<br/>
        Delivered a production platform serving 50K+ active learners.
      </p>
    ),
  },
  {
    date: 'Jul 2018 - Nov 2018',
    location: 'TIK – Education Consultation Platform',
    title: 'Front-End Developer',
    content: (
      <p>
        Developed a web-based admin panel for teacher and student management using Angular, including UI components and backend API integration.<br/>
        Delivered a production system adopted by 10K+ students and education consultants.
      </p>
    ),
  },
  {
    date: 'Feb 2017 - Mar 2018',
    location: 'Intelligent Information Solutions, Sharif University',
    title: 'Full-Stack Developer',
    content: (
      <p>
        Developed backend and frontend components for a social network engine (Motoshub) using JavaScript, PHP, and Android(Java).<br/>
        Contributed to a nationally recognized project adopted by the Iranian Ministry of Higher Education.
      </p>
    ),
  },
  {
    date: 'Apr 2016 - Feb 2017',
    location: 'Viratech Sharif (Gandom Team)',
    title: 'Android Developer',
    content: (
      <p>
        Developed and released multiple Android applications using Java for production use.<br/>
        Delivered applications adopted by 5K–20K users.
      </p>
    ),
  },
  {
    date: 'Jul 2014 - Apr 2016',
    location: 'Self-employed',
    title: 'Freelance Android Developer',
    content: (
      <p>
        Developed and published multiple Android apps.<br/>
        Built messaging systems and training applications.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you have any questions or just want to connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'mrhsce@gmail.com',
      href: 'mailto:mrhsce@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Technologiepark-Zwijnaarde 126, 9052 Gent, Belgium',
      href: 'https://maps.app.goo.gl/qywCi2ddwULW7P8Z7',
    },
    {
      type: ContactType.Github,
      text: 'mrhsce',
      href: 'https://github.com/mrhsce',
    },
    {
      type: ContactType.Instagram,
      text: '@mrhsce',
      href: 'https://instagram.com/mrhsce',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mrhsce'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/mrhsce'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mrheydarian/'}, // Assuming LinkedIn icon can be used for a personal website as a placeholder
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/2063639/mohammadreza-heydarian'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/M_R_Heydarian'},
];
