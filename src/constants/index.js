import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 3+ years of hands-on experience, I have honed my skills in front-end technologies like React, Angular, Vue, Redux and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, Asp.NET Core and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3+ years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'Jan 2024 - Aug 2024',
    role: 'Software Developer Intern',
    company: 'Bombardier Recreational Products',
    description: `Enhanced RF screens for the EWM module using ReactJS and Redux, automating manual processes and increasing warehouse efficiency. Integrated DHL's new API with internal systems, optimizing data flow and user interaction. Built an interactive dashboard in PowerBI, transforming data into insightful visualizations for decision-making.`,
    technologies: [
      'Javascript',
      'React.js',
      'Next.js',
      'Redux',
      'mongoDB',
      'Power BI',
    ],
  },
  {
    year: 'Aug 2022 - Dec 2022',
    role: 'Software Engineer',
    company: 'TurnOutNow',
    description: `Constructed the complete website for Amazon Re-invent’22 with advanced search capabilities. Designed the peerConnect tool, significantly elevating platform functionality and user experience.Enhanced customer database queries using GraphQL, resulting in a 40% reduction in response times and significant system performance improvement. `,
    technologies: ['HTML', 'CSS', 'React', 'Algolia', 'GraphQL'],
  },
  {
    year: 'Aug 2020 - Aug 2022',
    role: 'Senior Analyst',
    company: 'Capgemini',
    description: `Developed the Purchase Order Management system for a British utilities provider using Angular, integrating secure authentication services and seamless data handling. Built Angular components for Return Merchandise Authorization (RMA) processes, enhancing responsiveness and user-friendliness.`,
    technologies: ['Angular', 'RxJs', 'TypeScript', 'ASP.NET', 'Postgres'],
  },
];

export const PROJECTS = [
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
    deployedLink: 'https://vishaljain840.github.io/ecommerce-app/',
  },
  {
    title: 'Expense Calculator',
    image: project2,
    description:
      'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
    technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
    deployedLink: 'https://vishaljain840.github.io/expense-tracker/',
  },
  {
    title: 'Portfolio Website',
    image: project3,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Tailwind'],
    deployedLink: 'https://vishaljain840.github.io/ecommerce-app/',
  },
];

export const CONTACT = {
  address: '13 Henry Street, Toronto ON M5T 1W9',
  phoneNo: '+1-226-961-7434',
  email: 'jain87@uwindsor.ca',
};
