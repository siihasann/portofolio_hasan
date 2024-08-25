import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    mysql,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Redhat Linux System Administrator",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Ui Design",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Project Klephone",
        company_name: "Universitas Bina Sarana Informatika",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Project Collaboration",
        points: [
            "Klephone adalah aplikasi berbasis website untuk menejemen penjualan Smartphone, dengan tiga tingkat akses pengguna: Manager, Kasir, dan Staff Gudang. Proyek aplikasi Klephone tersebut menerapkan arsitektur MVC",
            "Perancangan ERD, LRS, Use Case dan Class Diagram",
            "Kolaborasi mendesain antarmuka pengguna yang intuitif dan responsif menggunakan Figma.",
            "Mengembangkan aplikasi menggunakan HTML, CSS, JavaScript, dan PHP dalam kerangka kerja CodeIgniter, memastikan performa yang efisien dan fungsionalitas",
        ],
    },
    {
        title: "Red Hat Certified System Administrator",
        company_name: "Infinite Learning",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2023 - December 2023",
        points: [
            "Ability to access the command line. Understand the Linux file system with a hierarchy of concepts. Read the manual page via the command line. Redirect output to a file or program. Describe user and group concepts. Interpreting linux file system permissions. Process status and lifecycle system. Identify system processes automatically. Remote access via SSH using the command line. Describe the system log architecture. Networking concepts. Manage compressed “tar” archives. Register systems for Red Hat support. Identify file systems and devices. Writing simple bash scripts. Create a user job schedule. Set tuning profiles. Configure SELinux mode enforcement. Manage partitions, file systems, persistent mounts, extend logical volumes. Manage network-attached storage with NFS. Select boot target. Configuring server firewalls. Install Red Hat Enterprise Linux. Container concepts"
        ],
    },
    {
        title: "IBM Academy AI & Cybersecurity",
        company_name: "Infinite Learning",
        icon: shopify,
        iconBg: "#383E56",
        date: "August 2023 - December 2023",
        points: [
            "IBM Cybersecurity: Ability to understand cyber threats taxonomy and explain cybersecurity real cases: cybersecurity domains, cybersecurity industry challenges, cyber resilience frameworks & lifecycle. Analytical skills in network security landscape, enterprise network security, anatomy of a network attack. Ability to understand mobile & IoT global trends, security landscape and end-point security. Ability to understand web applications, apply application security practices, analyze application security attacks, explain data breaches in the industrial world. Ability to analyze insider threats, phishing, ransomware, fraud attacks. Ability to understand industry cases: cloud global trends, cloud security challenges, cloud security in practice. Ability to explain landscape SIEM (Security Information and Event Management), SIEM Characteristics, SIEM in Action, SIEM Explained, SIEM Identifies a Phishing Attempt, Using the SIEM. Ability to analyze threat landscape, anatomy of a cyber attack, threat hunting methodology, tradecraft and TTPs. Ability to explain and implement the Security Operations Center, SOC operations team, SOC incident lifecycle. Ability to collaborate in design thinking.",
            "IBM AI: Ability to understand and explain artificial intelligence, AI industry adoption, natural language, computer vision, machine learning and deep learning, future trends in AI. Ability to apply client sentiment analysis with existing services in IBM Cloud, develop virtual assistants and AI conversational agents with Watson Assistant. Ability to analyze fairness models with Watson Openscale, Python programming ability to predict fraud with IBM Cloud Pack for Data's Jupyter notebook, and ability to collaborate in design thinking."
        ],
    },
    {
        title: "Project Aplikasi Barong",
        company_name: "Universitas Bina Sarana Informatika",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Project Collaboration",
        points: [
            "Menyusun Use Case, ERD, dan Class Diagram yang mendetail untuk mendukung kebutuhan sistem secara keseluruhan.",
            "Berkolaborasi mengembangkan desain (UI/UX) antarmuka yang intuitif dan user-friendly menggunakan Figma.",
            "Merancang struktur dan alur kerja aplikasi menggunakan TypeScript dengan framework Nuxt.js, menghasilkan sistem yang scalable dan maintainable.",
            "Merancang dan mengimplementasikan skema database yang efisien menggunakan Prisma ORM dengan TypeScript.",
            "Menghubungkan aplikasi dengan Supabase untuk database, storage dan autentikasi",
            "Mengembangkan API yang andal dan aman untuk mendukung interaksi dengan frontend.",
            "Mengoptimalkan query dan performa sistem serta memastikan pemeliharaan berkelanjutan.",



        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };