import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Muhammadreza Heydarian - Software Engineer',
  description: 'Portfolio of Muhammadreza Heydarian, a MSc graduate in Computer Engineering with extensive experience in software development and research.',
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
  name: `I'm Muhammadreza Heydarian.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am an <strong className="text-stone-100">MSc graduate in Computer Engineering</strong> from Sharif University of Technology, with a deep passion for <strong className="text-stone-100">software development</strong> and research in <strong className="text-stone-100">IoT, Cyber-physical Systems</strong>, and <strong className="text-stone-100">Machine Learning</strong>. With over seven years of professional experience, I thrive on solving challenging problems and learning new technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of work, I enjoy <strong className="text-stone-100">reading</strong>, <strong className="text-stone-100">swimming</strong>, playing <strong className="text-stone-100">video games</strong>, <strong className="text-stone-100">cycling</strong>, and <strong className="text-stone-100">mountain hiking</strong>. These activities help me maintain a balanced and healthy lifestyle.
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
  profileImageSrc: profilepic, // Assuming 'profilepic' is the correct reference to his profile picture
  description: `MSc graduate of computer engineering from Sharif University of Technology and BSc from Iran University of Science and Technology, with over seven years of professional experience in software development across a range of languages, frameworks, and technologies. My research interests include IoT, Cyber-physical Systems, Edge Computing, and Machine Learning. I am passionate about solving challenging problems and learning new technologies.`,
  aboutItems: [
    {label: 'Location', text: 'District 5, Karaj, Iran', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Swimming, Video Games, Cycling, Mountain Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Sharif University of Technology, Iran University of Science and Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full-stack Developer at RKAA Group', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Linguistic Skills',
    skills: [
      {
        name: 'English',
        level: 10, // Assuming proficiency on a scale of 1 to 10, with 10 being native or bilingual proficiency
      },
      {
        name: 'Kurdish',
        level: 8, // Assumed proficiency level
      },
      {
        name: 'Persian',
        level: 10, // Native proficiency
      },
      {
        name: 'Arabic',
        level: 4, // Basic proficiency
      },
      {
        name: 'Spanish',
        level: 3, // Elementary proficiency
      },
    ],
  },
  {
    name: 'Programming Skills',
    skills: [
      {
        name: 'React-Native',
        level: 9,
      },
      {
        name: 'Java (Android)',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'GIT',
        level: 9,
      },
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'NodeJs',
        level: 8,
      },
      {
        name: 'PHP',
        level: 7,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'OpenCV',
        level: 6,
      },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2016 - Jan 2019',
    location: 'Sharif University of Technology',
    title: 'Master of Software Engineering',
    content: (
      <p>
        Completed my Master's degree with a thesis titled "A real-time and energy-efficient decision-making framework for computation offloading in IoT".
        The thesis was defended in Jan 2019 and scored "excellent" by the examiners. Supervised by Dr. Mohammad Amin Fazli. Achieved a GPA of 3.22/4. Courses
        included Software Architecture, Software Development Methodologies, Secure Software Development, and Requirement Engineering. Scored 20/20 in Software Formal Definition and Verification and 17.8/20 in Semantic Web.
      </p>
    ),
  },
  {
    date: 'Sep 2012 - Sep 2016',
    location: 'Iran University of Science and Technology',
    title: 'Bachelor of Software Engineering',
    content: (
      <p>
        For my final project, I developed "Smart Training and Flashcard Formation System (STAFFS)", a software system to automatically create flashcards for evaluating and teaching jargon in different fields using the Leitner technique by web crawling on the Wikipedia website. The project was defended in Sep 2016 and scored "excellent" by the examiners. Courses included Advanced Programming, Operating Systems, Compilers, Software Engineering, and Computer Networks.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2021 - Present',
    location: 'RKAA Group',
    title: 'Full-stack Developer',
    content: (
      <p>
        At RKAA Group, a company active in smart home devices manufacturing, I am responsible for developing software infrastructure to support smart home systems. My role involves extensive use of technologies including Micropython, NodeJS, React-Native, React, and MongoDB. I work closely under the supervision of Dr. Shragim Shirkhanlou to innovate and implement robust solutions for smart home integration.
      </p>
    ),
  },
  {
    date: 'Nov 2019 - Aug 2021',
    location: 'Center for Infrastructure Sustainability and Resilience Research at Sharif University',
    title: 'Full-stack Developer',
    content: (
      <p>
        In this role, I focused on developing a comprehensive database system, server API, web panel, and mobile application to be utilized by surveyors. My work contributed significantly to the center's ability to manage and analyze data efficiently. I utilized NodeJS, React-Native, Angular, SQLite, and MongoDB to deliver high-quality software solutions. Supervised by Dr. Hamed Kashani, my contributions facilitated improved resilience and sustainability research initiatives.
      </p>
    ),
  },
  {
    date: 'Nov 2018 - Nov 2019',
    location: 'Monta',
    title: 'Front-end Developer',
    content: (
      <p>
        At Monta, a company active in e-learning, I was engaged in developing the Monta android app, focusing on e-learning for students, and Montaman, an app for building expenses management. My responsibilities included improving user interfaces and experiences using Java (Android), React-Native, and NodeJS, under the supervision of Arash Mahabadian.
      </p>
    ),
  },
  // Additional experiences can be added in a similar format
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
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
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
      text: 'District 5, Karaj, Iran',
      href: 'https://maps.google.com/?q=District+5,+Karaj,+Iran',
    },
    {
      type: ContactType.Github,
      text: 'mrhsce',
      href: 'https://github.com/mrhsce',
    },
    {
      type: ContactType.Instagram,
      text: '@mrheydarian',
      href: 'https://instagram.com/mrheydarian',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mrhsce'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/mrheydarian'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'http://ce.sharif.edu/~heidarian'}, // Assuming LinkedIn icon can be used for a personal website as a placeholder
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
