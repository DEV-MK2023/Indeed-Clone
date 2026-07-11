const jobs = [
  {
    isNew: true,
    title: "Full Stack Developer",
    company: "Devsinc",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$90,000 - $130,000",
    salaryRs: "Rs 100,000 - Rs 150,000 a month",
    type: "full-time",
    description: "Develop and maintain both front-end and back-end components of our web applications.",
    requirements: ["React, Node.js, and MongoDB", "4+ years experience", "Agile methodologies"],
    postedDaysAgo: 1,
    fullDetails:
      "We are seeking a versatile Full Stack Developer to join our team. The ideal candidate will have strong skills in the MERN stack and experience working in a fast-paced environment. This role involves designing and implementing new features, ensuring high performance, and collaborating with cross-functional teams.",
  },
  {
    isNew: false,
    title: "UI/UX Designer",
    company: "10Pearls",
    city: "Karachi",
    location: "Pakistan",
    salary: "$60,000 - $90,000",
    salaryRs: "Rs 80,000 - Rs 120,000 a month",
    type: "full-time",
    description: "Design user-friendly and aesthetically pleasing interfaces for our software products.",
    requirements: ["Figma & Sketch", "3+ years UI/UX experience", "Strong portfolio"],
    postedDaysAgo: 3,
    fullDetails:
      "As a UI/UX Designer, you will be responsible for the entire user experience lifecycle, from research and wireframing to prototyping and high-fidelity mockups. You should have a keen eye for design and a passion for creating intuitive digital experiences.",
  },
  {
    isNew: true,
    title: "Data Analyst",
    company: "Systems Limited",
    city: "Lahore",
    location: "Pakistan",
    salary: "$70,000 - $110,000",
    salaryRs: "Rs 90,000 - Rs 130,000 a month",
    type: "full-time",
    description: "Analyze large datasets to provide actionable insights for business decisions.",
    requirements: ["SQL, Python, and R", "Data visualization tools (Tableau, Power BI)", "Statistical analysis skills"],
    postedDaysAgo: 1,
    fullDetails:
      "We are looking for a Data Analyst to join our growing team. You will be responsible for collecting, cleaning, and interpreting data to help us optimize our operations and strategy. The role requires strong analytical skills and the ability to communicate findings to non-technical stakeholders.",
  },
  {
    isNew: false,
    title: "Mobile App Developer (Flutter)",
    company: "Techlogix",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$75,000 - $115,000",
    salaryRs: "Rs 95,000 - Rs 140,000 a month",
    type: "full-time",
    description: "Develop and maintain high-performance mobile applications for iOS and Android.",
    requirements: ["Flutter and Dart", "3+ years mobile development", "Firebase experience"],
    postedDaysAgo: 4,
    fullDetails:
      "This position is for a seasoned Flutter Developer who can build robust and scalable cross-platform applications. You will be part of a team responsible for the full development lifecycle, from concept to deployment and maintenance.",
  },
  {
    isNew: true,
    title: "DevOps Engineer",
    company: "Microsoft",
    city: "Lahore",
    location: "Pakistan",
    salary: "$100,000 - $150,000",
    salaryRs: "Rs 120,000 - Rs 180,000 a month",
    type: "full-time",
    description: "Manage and automate our cloud infrastructure and CI/CD pipelines.",
    requirements: ["AWS/Azure, Docker, Kubernetes", "5+ years DevOps experience", "CI/CD tools (Jenkins, GitLab CI)"],
    postedDaysAgo: 2,
    fullDetails:
      "We need a talented DevOps Engineer to help us streamline our development and deployment processes. You will be a key player in ensuring the reliability, scalability, and security of our systems.",
  },
  {
    isNew: false,
    title: "Cybersecurity Analyst",
    company: "Google",
    city: "Karachi",
    location: "Pakistan",
    salary: "$85,000 - $130,000",
    salaryRs: "Rs 110,000 - Rs 160,000 a month",
    type: "full-time",
    description: "Monitor and respond to security incidents, ensuring the protection of company data.",
    requirements: ["Network security principles", "Incident response", "Security information and event management (SIEM)"],
    postedDaysAgo: 6,
    fullDetails:
      "Join our security team to safeguard our digital assets. You will be responsible for threat detection, vulnerability analysis, and implementing security protocols to prevent cyber-attacks.",
  },
  {
    isNew: true,
    title: "Cloud Solutions Architect",
    company: "Amazon",
    city: "Lahore",
    location: "Pakistan",
    salary: "$110,000 - $170,000",
    salaryRs: "Rs 130,000 - Rs 200,000 a month",
    type: "full-time",
    description: "Design and implement scalable, secure, and reliable cloud solutions on AWS.",
    requirements: ["AWS Certified Solutions Architect", "8+ years experience", "Deep understanding of cloud architecture"],
    postedDaysAgo: 1,
    fullDetails:
      "This is a senior role for an experienced Cloud Solutions Architect. You will work directly with clients to understand their business needs and translate them into robust and cost-effective cloud solutions.",
  },
  {
    isNew: false,
    title: "Machine Learning Engineer",
    company: "Netflix",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$120,000 - $180,000",
    salaryRs: "Rs 150,000 - Rs 220,000 a month",
    type: "full-time",
    description: "Develop and deploy machine learning models to improve our recommendation systems.",
    requirements: ["Python, PyTorch/TensorFlow", "Experience with large-scale data", "Strong mathematical background"],
    postedDaysAgo: 5,
    fullDetails:
      "We are seeking a talented Machine Learning Engineer to innovate our core product features. You will be involved in every stage of model development, from data collection and training to deployment and monitoring in a production environment.",
  },
  {
    isNew: false,
    title: "Game Developer",
    company: "Tintash",
    city: "Lahore",
    location: "Pakistan",
    salary: "$65,000 - $100,000",
    salaryRs: "Rs 85,000 - Rs 125,000 a month",
    type: "full-time",
    description: "Create engaging and interactive mobile games for various platforms.",
    requirements: ["Unity or Unreal Engine", "C# or C++", "Experience with mobile game mechanics"],
    postedDaysAgo: 7,
    fullDetails:
      "Join our passionate team of game developers. You will be responsible for writing clean, efficient, and well-documented code for new game titles. A love for gaming is a must!",
  },
  {
    isNew: true,
    title: "Technical Support Specialist",
    company: "Careem",
    city: "Karachi",
    location: "Pakistan",
    salary: "$40,000 - $65,000",
    salaryRs: "Rs 50,000 - Rs 75,000 a month",
    type: "full-time",
    description: "Provide technical assistance and support to our internal and external users.",
    requirements: ["Troubleshooting skills", "Excellent communication", "Knowledge of IT systems"],
    postedDaysAgo: 2,
    fullDetails:
      "We are looking for a customer-focused Technical Support Specialist to handle inquiries and resolve issues. You will be the first point of contact for technical problems and will work closely with the engineering team to find solutions.",
  },
  {
    isNew: false,
    title: "Software Engineer",
    company: "Microsoft",
    city: "Lahore",
    location: "Pakistan",
    salary: "$80,000 - $120,000",
    salaryRs: "Rs 70,000 - Rs 96,000 a month",
    type: "full-time",
    description: "Work with a talented team on innovative software solutions.",
    requirements: ["React & Tailwind CSS", "3+ years experience", "Problem-solving skills"],
    postedDaysAgo: 2,
    fullDetails:
      "This role requires strong problem-solving abilities and deep expertise in front-end development. You'll collaborate with a dynamic team...",
  },
  {
    isNew: true,
    title: "Frontend Developer",
    company: "Google",
    city: "Karachi",
    location: "Pakistan",
    salary: "$70,000 - $100,000",
    salaryRs: "Rs 40,000 - Rs 45,000 a month",
    type: "part-time",
    description: "Create intuitive UIs and improve user experiences.",
    requirements: ["Strong JavaScript skills", "Tailwind CSS experience"],
    postedDaysAgo: 5,
    fullDetails:
      "We're looking for a developer passionate about designing scalable UI components and improving UX...",
  },
  {
    isNew: false,
    title: "Backend Engineer",
    company: "Amazon",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$95,000 - $140,000",
    salaryRs: "Rs 115,000 - Rs 170,000 a month",
    type: "full-time",
    description: "Develop scalable and resilient back-end services for e-commerce platforms.",
    requirements: ["Java or C++", "Microservices architecture", "Experience with AWS"],
    postedDaysAgo: 3,
    fullDetails:
      "As a Backend Engineer, you will be part of a team responsible for building the core services that power Amazon's online marketplace. You must have a strong background in distributed systems and high-availability design.",
  },
  {
    isNew: true,
    title: "IT Project Manager",
    company: "Systems Limited",
    city: "Lahore",
    location: "Pakistan",
    salary: "$85,000 - $125,000",
    salaryRs: "Rs 100,000 - Rs 150,000 a month",
    type: "full-time",
    description: "Oversee and manage IT projects from conception to completion.",
    requirements: ["PMP or Scrum certification", "5+ years project management", "Excellent leadership skills"],
    postedDaysAgo: 2,
    fullDetails:
      "We are seeking an experienced IT Project Manager to lead our teams on complex and challenging projects. You will be responsible for planning, execution, and delivery, ensuring projects are completed on time and within budget.",
  },
  {
    isNew: false,
    title: "Financial Analyst",
    company: "Nestlé Pakistan",
    city: "Lahore",
    location: "Pakistan",
    salary: "$50,000 - $80,000",
    salaryRs: "Rs 60,000 - Rs 95,000 a month",
    type: "full-time",
    description: "Analyze financial data, prepare reports, and forecast business performance.",
    requirements: ["CFA or ACCA", "3+ years financial analysis", "Advanced Excel skills"],
    postedDaysAgo: 8,
    fullDetails:
      "A great opportunity for a Financial Analyst to join our team. You will be instrumental in budgeting, forecasting, and providing financial insights to senior management to support strategic decisions.",
  },
  {
    isNew: true,
    title: "Marketing Manager",
    company: "Unilever Pakistan",
    city: "Karachi",
    location: "Pakistan",
    salary: "$65,000 - $100,000",
    salaryRs: "Rs 80,000 - Rs 120,000 a month",
    type: "full-time",
    description: "Develop and execute marketing campaigns to drive brand growth.",
    requirements: ["Digital marketing experience", "Brand strategy", "Excellent communication skills"],
    postedDaysAgo: 1,
    fullDetails:
      "We are looking for a creative and results-driven Marketing Manager to lead our brand's marketing efforts. This role requires a strong understanding of consumer behavior and a proven track record of successful marketing campaigns.",
  },
  {
    isNew: false,
    title: "Human Resources Manager",
    company: "Jazz",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$60,000 - $90,000",
    salaryRs: "Rs 75,000 - Rs 110,000 a month",
    type: "full-time",
    description: "Manage all aspects of the HR department, from recruitment to employee relations.",
    requirements: ["HR management experience", "Knowledge of labor laws", "Conflict resolution skills"],
    postedDaysAgo: 5,
    fullDetails:
      "As an HR Manager, you will be responsible for creating a positive and productive work environment. You will handle recruitment, training, performance management, and employee welfare.",
  },
  {
    isNew: true,
    title: "Civil Engineer",
    company: "FWO (Frontier Works Organization)",
    city: "Rawalpindi",
    location: "Pakistan",
    salary: "$55,000 - $85,000",
    salaryRs: "Rs 65,000 - Rs 100,000 a month",
    type: "full-time",
    description: "Design and oversee construction projects, ensuring safety and compliance.",
    requirements: ["B.S. in Civil Engineering", "3+ years experience", "Project management"],
    postedDaysAgo: 3,
    fullDetails:
      "We are seeking a Civil Engineer to join our project team. You will be responsible for planning, designing, and supervising the construction of infrastructure projects, including roads and bridges.",
  },
  {
    isNew: false,
    title: "Registered Nurse",
    company: "Shaukat Khanum Memorial Cancer Hospital",
    city: "Lahore",
    location: "Pakistan",
    salary: "$40,000 - $60,000",
    salaryRs: "Rs 45,000 - Rs 70,000 a month",
    type: "full-time",
    description: "Provide high-quality patient care in a compassionate and professional manner.",
    requirements: ["Registered Nurse license", "Experience in oncology", "Excellent communication skills"],
    postedDaysAgo: 4,
    fullDetails:
      "We are looking for dedicated and compassionate nurses to join our team. This role involves administering medication, monitoring patient health, and providing emotional support to patients and their families.",
  },
  {
    isNew: true,
    title: "Teacher (High School)",
    company: "Beaconhouse School System",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$30,000 - $50,000",
    salaryRs: "Rs 35,000 - Rs 55,000 a month",
    type: "full-time",
    description: "Educate high school students and prepare them for academic success.",
    requirements: ["Master's degree in a relevant subject", "Teaching certification", "Passion for education"],
    postedDaysAgo: 1,
    fullDetails:
      "We are seeking a passionate and experienced high school teacher. You will be responsible for developing lesson plans, assessing student progress, and fostering a positive and engaging learning environment.",
  },
  {
    isNew: false,
    title: "Financial Accountant",
    company: "PwC Pakistan",
    city: "Karachi",
    location: "Pakistan",
    salary: "$55,000 - $85,000",
    salaryRs: "Rs 65,000 - Rs 100,000 a month",
    type: "full-time",
    description: "Manage financial records, prepare financial statements, and ensure compliance.",
    requirements: ["ACCA/CA qualification", "3+ years accounting experience", "Knowledge of tax laws"],
    postedDaysAgo: 6,
    fullDetails:
      "Join our accounting team as a Financial Accountant. You will be responsible for preparing and analyzing financial reports, managing budgets, and ensuring all financial activities are compliant with regulations.",
  },
  {
    isNew: true,
    title: "Supply Chain Manager",
    company: "Engro Corporation",
    city: "Lahore",
    location: "Pakistan",
    salary: "$70,000 - $110,000",
    salaryRs: "Rs 85,000 - Rs 130,000 a month",
    type: "full-time",
    description: "Oversee the entire supply chain process from procurement to distribution.",
    requirements: ["Supply chain management degree", "5+ years experience", "Logistics and operations expertise"],
    postedDaysAgo: 2,
    fullDetails:
      "We are looking for a strategic Supply Chain Manager to optimize our supply chain operations. You will be responsible for improving efficiency, reducing costs, and ensuring timely delivery of products.",
  },
  {
    isNew: false,
    title: "Graphic Designer",
    company: "Creative Chaos",
    city: "Karachi",
    location: "Pakistan",
    salary: "$45,000 - $70,000",
    salaryRs: "Rs 55,000 - Rs 85,000 a month",
    type: "full-time",
    description: "Create visual concepts to communicate ideas that inspire, inform, and captivate consumers.",
    requirements: ["Adobe Creative Suite proficiency", "Strong portfolio", "Creative thinking"],
    postedDaysAgo: 5,
    fullDetails:
      "Join our creative team as a Graphic Designer. You will work on various projects, from marketing materials to digital campaigns, to bring our brand vision to life.",
  },
  {
    isNew: true,
    title: "Product Manager",
    company: "Finja",
    city: "Lahore",
    location: "Pakistan",
    salary: "$90,000 - $140,000",
    salaryRs: "Rs 110,000 - Rs 160,000 a month",
    type: "full-time",
    description: "Lead the development and launch of new financial technology products.",
    requirements: ["Product management experience", "Knowledge of fintech industry", "Strong analytical skills"],
    postedDaysAgo: 1,
    fullDetails:
      "We are seeking a Product Manager to drive the strategy and execution of our fintech products. You will work closely with engineering, design, and marketing teams to deliver innovative solutions.",
  },
  {
    isNew: false,
    title: "Content Writer",
    company: "Graana.com",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$35,000 - $55,000",
    salaryRs: "Rs 40,000 - Rs 60,000 a month",
    type: "full-time",
    description: "Write engaging and informative content for our real estate platform.",
    requirements: ["Excellent writing and editing skills", "SEO knowledge", "Portfolio of published work"],
    postedDaysAgo: 7,
    fullDetails:
      "We need a talented Content Writer to create compelling articles, blogs, and website copy. The ideal candidate will have a passion for real estate and a knack for storytelling.",
  },
  {
    isNew: false,
    title: "Sales Executive",
    company: "Telenor Pakistan",
    city: "Lahore",
    location: "Pakistan",
    salary: "$40,000 - $60,000",
    salaryRs: "Rs 45,000 - Rs 70,000 a month",
    type: "full-time",
    description: "Drive sales and build strong relationships with clients to achieve targets.",
    requirements: ["Proven sales track record", "Strong negotiation skills", "Customer-oriented approach"],
    postedDaysAgo: 4,
    fullDetails:
      "Join our sales team and help us expand our market reach. You will be responsible for generating leads, closing deals, and providing excellent customer service.",
  },
  {
    isNew: true,
    title: "Operations Manager",
    company: "Foodpanda",
    city: "Karachi",
    location: "Pakistan",
    salary: "$60,000 - $90,000",
    salaryRs: "Rs 75,000 - Rs 110,000 a month",
    type: "full-time",
    description: "Oversee daily operations and ensure efficient workflow and high productivity.",
    requirements: ["Operations management experience", "Problem-solving skills", "Leadership ability"],
    postedDaysAgo: 2,
    fullDetails:
      "We are seeking an Operations Manager to lead our on-the-ground teams. You will be crucial in optimizing our delivery logistics and ensuring smooth operations across all departments.",
  },
  {
    isNew: false,
    title: "Electrical Engineer",
    company: "KESC (Karachi Electric Supply Company)",
    city: "Karachi",
    location: "Pakistan",
    salary: "$50,000 - $80,000",
    salaryRs: "Rs 60,000 - Rs 95,000 a month",
    type: "full-time",
    description: "Design, develop, and maintain electrical systems and components.",
    requirements: ["B.S. in Electrical Engineering", "2+ years experience", "Knowledge of power systems"],
    postedDaysAgo: 6,
    fullDetails:
      "We are looking for a qualified Electrical Engineer to join our team. You will be involved in the design and maintenance of electrical infrastructure, ensuring safety and efficiency.",
  },
  {
    isNew: true,
    title: "Customer Service Representative",
    company: "Daraz",
    city: "Lahore",
    location: "Pakistan",
    salary: "$25,000 - $40,000",
    salaryRs: "Rs 30,000 - Rs 45,000 a month",
    type: "full-time",
    description: "Assist customers with their inquiries and resolve issues promptly and professionally.",
    requirements: ["Customer service experience", "Strong communication skills", "Problem-solving abilities"],
    postedDaysAgo: 1,
    fullDetails:
      "Join our customer service team and be the voice of our company. You will be responsible for handling customer complaints, providing information, and ensuring a positive customer experience.",
  },
  {
    isNew: false,
    title: "Architect",
    company: "Habib Rafiq (Pvt) Ltd.",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$60,000 - $95,000",
    salaryRs: "Rs 75,000 - Rs 115,000 a month",
    type: "full-time",
    description: "Plan, design, and oversee the construction of buildings and landscapes.",
    requirements: ["Bachelor's in Architecture", "5+ years experience", "Proficiency in AutoCAD"],
    postedDaysAgo: 4,
    fullDetails:
      "We are seeking a creative and experienced Architect to join our design team. You will be responsible for creating innovative designs, preparing architectural drawings, and managing projects from concept to completion.",
  },
  {
    isNew: true,
    title: "Pharmacist",
    company: "Medina Pharmacy",
    city: "Karachi",
    location: "Pakistan",
    salary: "$35,000 - $55,000",
    salaryRs: "Rs 40,000 - Rs 65,000 a month",
    type: "full-time",
    description: "Dispense medications, advise patients on drug usage, and ensure pharmacy operations run smoothly.",
    requirements: ["Doctor of Pharmacy (Pharm.D) degree", "Valid pharmacy license", "Attention to detail"],
    postedDaysAgo: 3,
    fullDetails:
      "We are looking for a skilled Pharmacist to join our team. You will be responsible for managing prescriptions, providing medication counseling to patients, and ensuring compliance with all regulations.",
  },
  {
    isNew: false,
    title: "Chef",
    company: "Monarch Restaurant",
    city: "Lahore",
    location: "Pakistan",
    salary: "$30,000 - $50,000",
    salaryRs: "Rs 35,000 - Rs 55,000 a month",
    type: "full-time",
    description: "Prepare and cook high-quality dishes, manage kitchen staff, and ensure food safety standards.",
    requirements: ["Culinary degree or certificate", "3+ years professional cooking", "Creativity and passion for food"],
    postedDaysAgo: 5,
    fullDetails:
      "We are seeking a talented Chef to lead our kitchen team. You will be responsible for menu development, food preparation, and maintaining a clean and organized kitchen environment.",
  },
  {
    isNew: true,
    title: "Librarian",
    company: "National Library of Pakistan",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$30,000 - $45,000",
    salaryRs: "Rs 35,000 - Rs 50,000 a month",
    type: "full-time",
    description: "Manage library resources, assist patrons, and promote literacy.",
    requirements: ["Master's in Library Science", "Excellent organizational skills", "Knowledge of cataloging systems"],
    postedDaysAgo: 1,
    fullDetails:
      "Join the National Library as a Librarian. You will be responsible for organizing our collection, assisting researchers and students, and developing programs to encourage reading.",
  },
  {
    isNew: false,
    title: "Journalist",
    company: "Geo News",
    city: "Karachi",
    location: "Pakistan",
    salary: "$40,000 - $65,000",
    salaryRs: "Rs 45,000 - Rs 75,000 a month",
    type: "full-time",
    description: "Research, write, and report on news stories for various media platforms.",
    requirements: ["Degree in Journalism", "Strong writing and research skills", "Ability to work under pressure"],
    postedDaysAgo: 6,
    fullDetails:
      "We are looking for a passionate Journalist to join our news team. You will be responsible for investigating stories, conducting interviews, and delivering timely and accurate reports.",
  },
  {
    isNew: true,
    title: "Pilot",
    company: "Pakistan International Airlines (PIA)",
    city: "Karachi",
    location: "Pakistan",
    salary: "$150,000 - $250,000",
    salaryRs: "Rs 200,000 - Rs 300,000 a month",
    type: "full-time",
    description: "Operate aircraft and ensure the safety of passengers and crew.",
    requirements: ["Commercial Pilot License", "Extensive flying hours", "Medical fitness"],
    postedDaysAgo: 2,
    fullDetails:
      "PIA is seeking experienced Pilots to join our team. You will be responsible for flying commercial routes, adhering to strict safety protocols, and ensuring a comfortable journey for all passengers.",
  },
  {
    isNew: false,
    title: "Interior Designer",
    company: "M. M. Aslam & Sons",
    city: "Lahore",
    location: "Pakistan",
    salary: "$50,000 - $80,000",
    salaryRs: "Rs 60,000 - Rs 95,000 a month",
    type: "full-time",
    description: "Create functional and aesthetically pleasing interior spaces.",
    requirements: ["Degree in Interior Design", "Portfolio of past work", "Knowledge of materials and design trends"],
    postedDaysAgo: 5,
    fullDetails:
      "We are looking for a creative Interior Designer to work on residential and commercial projects. You will be responsible for space planning, selecting materials and furniture, and supervising the execution of designs.",
  },
  {
    isNew: true,
    title: "Network Administrator",
    company: "PTCL",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$55,000 - $85,000",
    salaryRs: "Rs 65,000 - Rs 100,000 a month",
    type: "full-time",
    description: "Maintain and manage the company's computer network and telecommunications systems.",
    requirements: ["CCNA or equivalent certification", "3+ years experience", "Troubleshooting skills"],
    postedDaysAgo: 1,
    fullDetails:
      "Join our IT team as a Network Administrator. You will be responsible for installing, configuring, and maintaining network hardware and software, ensuring a secure and efficient network.",
  },
  {
    isNew: false,
    title: "Dentist",
    company: "Dr. A. Q. Dental Clinic",
    city: "Karachi",
    location: "Pakistan",
    salary: "$70,000 - $120,000",
    salaryRs: "Rs 85,000 - Rs 140,000 a month",
    type: "full-time",
    description: "Provide dental care, including routine checkups, cleanings, and complex procedures.",
    requirements: ["D.D.S. or D.M.D.", "Valid license to practice", "Excellent patient care skills"],
    postedDaysAgo: 8,
    fullDetails:
      "We are seeking a skilled and compassionate Dentist to join our private practice. You will be responsible for diagnosing and treating oral health issues, and educating patients on preventative care.",
  },
  {
    isNew: true,
    title: "Accountant",
    company: "KPMG Pakistan",
    city: "Lahore",
    location: "Pakistan",
    salary: "$60,000 - $90,000",
    salaryRs: "Rs 75,000 - Rs 110,000 a month",
    type: "full-time",
    description: "Prepare and analyze financial statements, manage audits, and ensure compliance.",
    requirements: ["CA, ACCA, or equivalent", "3+ years of experience", "Proficiency in accounting software"],
    postedDaysAgo: 2,
    fullDetails:
      "Join a leading professional services firm as an Accountant. You will play a key role in managing financial records, preparing reports for clients, and ensuring regulatory compliance.",
  },
  {
    isNew: false,
    title: "Electrical Engineer",
    company: "Siemens Pakistan",
    city: "Karachi",
    location: "Pakistan",
    salary: "$75,000 - $110,000",
    salaryRs: "Rs 90,000 - Rs 130,000 a month",
    type: "full-time",
    description: "Design and implement electrical systems for industrial and commercial projects.",
    requirements: ["B.S. in Electrical Engineering", "5+ years experience", "Knowledge of power distribution"],
    postedDaysAgo: 7,
    fullDetails:
      "We are looking for a seasoned Electrical Engineer to join our team. This role involves designing and overseeing the installation of complex electrical systems for a wide range of projects.",
  },
  {
    isNew: true,
    title: "Architectural Designer",
    company: "Nayyer Ali & Taimur Hassan Associates",
    city: "Lahore",
    location: "Pakistan",
    salary: "$50,000 - $80,000",
    salaryRs: "Rs 60,000 - Rs 95,000 a month",
    type: "full-time",
    description: "Assist lead architects in creating designs, models, and drawings for projects.",
    requirements: ["Bachelor's in Architecture", "Proficiency in Revit and AutoCAD", "Strong design skills"],
    postedDaysAgo: 1,
    fullDetails:
      "We are seeking an Architectural Designer to support our team. You will be involved in all phases of the design process, from initial concepts to final construction documents.",
  },
  {
    isNew: false,
    title: "Mechanical Engineer",
    company: "Honda Atlas Cars Pakistan",
    city: "Lahore",
    location: "Pakistan",
    salary: "$65,000 - $95,000",
    salaryRs: "Rs 80,000 - Rs 115,000 a month",
    type: "full-time",
    description: "Design, develop, and test mechanical components and systems for automobiles.",
    requirements: ["B.S. in Mechanical Engineering", "3+ years automotive experience", "CAD software proficiency"],
    postedDaysAgo: 4,
    fullDetails:
      "Join our engineering team and contribute to the development of new vehicle models. You will be responsible for designing and optimizing mechanical systems to improve performance and efficiency.",
  },
  {
    isNew: true,
    title: "Senior Product Manager",
    company: "KeepTruckin (Now Motive)",
    city: "Karachi",
    location: "Pakistan",
    salary: "$100,000 - $160,000",
    salaryRs: "Rs 120,000 - Rs 190,000 a month",
    type: "full-time",
    description: "Lead product strategy and execution for a key business vertical.",
    requirements: ["7+ years product management", "Experience in a B2B SaaS environment", "Data-driven decision making"],
    postedDaysAgo: 2,
    fullDetails:
      "This is a senior leadership role for an experienced Product Manager. You will be responsible for setting the product vision, roadmap, and leading a team of product professionals to deliver world-class solutions.",
  },
  {
    isNew: false,
    title: "Software Quality Assurance Engineer",
    company: "TRG Pakistan",
    city: "Karachi",
    location: "Pakistan",
    salary: "$50,000 - $80,000",
    salaryRs: "Rs 60,000 - Rs 95,000 a month",
    type: "full-time",
    description: "Develop and execute test plans, identify bugs, and ensure the quality of software products.",
    requirements: ["Experience with manual and automated testing", "Knowledge of QA methodologies", "Detail-oriented"],
    postedDaysAgo: 6,
    fullDetails:
      "We are looking for a meticulous SQA Engineer to join our development team. You will be responsible for creating test cases, executing tests, and working closely with developers to resolve issues.",
  },
  {
    isNew: true,
    title: "Biomedical Engineer",
    company: "Siemens Healthineers",
    city: "Lahore",
    location: "Pakistan",
    salary: "$65,000 - $100,000",
    salaryRs: "Rs 80,000 - Rs 120,000 a month",
    type: "full-time",
    description: "Design and maintain medical equipment and systems.",
    requirements: ["B.S. in Biomedical Engineering", "3+ years experience", "Knowledge of medical devices"],
    postedDaysAgo: 1,
    fullDetails:
      "Join our team to work on cutting-edge medical technology. You will be responsible for the installation, maintenance, and repair of various medical devices in hospitals and clinics.",
  },
  {
    isNew: false,
    title: "Aerospace Engineer",
    company: "Pakistan Aeronautical Complex (PAC)",
    city: "Kamra",
    location: "Pakistan",
    salary: "$70,000 - $110,000",
    salaryRs: "Rs 85,000 - Rs 130,000 a month",
    type: "full-time",
    description: "Design, develop, and maintain aircraft and related systems.",
    requirements: ["B.S. in Aerospace Engineering", "Knowledge of aerodynamics and propulsion", "Experience with CAD software"],
    postedDaysAgo: 5,
    fullDetails:
      "We are seeking a highly skilled Aerospace Engineer to join our team. This role involves working on the design and maintenance of military and commercial aircraft.",
  },
  {
    isNew: true,
    title: "Psychologist",
    company: "The Institute of Mind Sciences",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$45,000 - $70,000",
    salaryRs: "Rs 55,000 - Rs 85,000 a month",
    type: "full-time",
    description: "Provide counseling and psychological support to individuals and groups.",
    requirements: ["Master's in Psychology", "Licensed to practice", "Clinical experience"],
    postedDaysAgo: 3,
    fullDetails:
      "Join our team of mental health professionals. You will be responsible for conducting assessments, providing therapy, and developing treatment plans for clients with various mental health conditions.",
  },
  {
    isNew: false,
    title: "Social Media Manager",
    company: "Foodpanda",
    city: "Karachi",
    location: "Pakistan",
    salary: "$40,000 - $65,000",
    salaryRs: "Rs 45,000 - Rs 75,000 a month",
    type: "full-time",
    description: "Manage social media accounts, create content, and engage with the online community.",
    requirements: ["Experience with social media platforms", "Content creation skills", "Community management"],
    postedDaysAgo: 4,
    fullDetails:
      "We are looking for a creative Social Media Manager to grow our online presence. You will be responsible for developing social media strategies, creating engaging content, and analyzing performance metrics.",
  },
  {
    isNew: true,
    title: "Brand Manager",
    company: "Unilever Pakistan",
    city: "Karachi",
    location: "Pakistan",
    salary: "$80,000 - $120,000",
    salaryRs: "Rs 95,000 - Rs 140,000 a month",
    type: "full-time",
    description: "Develop and execute brand strategies to increase market share and profitability.",
    requirements: ["5+ years brand management", "Market research skills", "Strong communication and leadership"],
    postedDaysAgo: 1,
    fullDetails:
      "Join a global leader in consumer goods as a Brand Manager. You will be responsible for managing brand campaigns, product launches, and market analysis to drive brand success.",
  },
  {
    isNew: false,
    title: "Civil Engineer (Junior)",
    company: "NESPAK",
    city: "Lahore",
    location: "Pakistan",
    salary: "$45,000 - $65,000",
    salaryRs: "Rs 50,000 - Rs 75,000 a month",
    type: "full-time",
    description: "Assist in the design and supervision of civil engineering projects.",
    requirements: ["B.S. in Civil Engineering", "1-2 years experience", "Knowledge of engineering software"],
    postedDaysAgo: 6,
    fullDetails:
      "We are hiring a Junior Civil Engineer to work alongside our senior team. You will gain hands-on experience in project planning, design, and site supervision.",
  },
  {
    isNew: true,
    title: "Software Engineer",
    company: "Devsinc",
    city: "Lahore",
    location: "Pakistan",
    salary: "$90,000 - $130,000",
    salaryRs: "Rs 110,000 - Rs 150,000 a month",
    type: "full-time",
    description: "Develop scalable and high-performance software solutions.",
    requirements: ["Java/Python/C#", "5+ years of experience", "Cloud computing knowledge"],
    postedDaysAgo: 2,
    fullDetails:
      "Join our dynamic software development team. You will be responsible for designing, coding, and testing complex software systems for our enterprise clients.",
  },
  {
    isNew: false,
    title: "UX Researcher",
    company: "Careem",
    city: "Karachi",
    location: "Pakistan",
    salary: "$70,000 - $100,000",
    salaryRs: "Rs 85,000 - Rs 120,000 a month",
    type: "full-time",
    description: "Conduct user research to inform product design and strategy.",
    requirements: ["Qualitative and quantitative research methods", "Experience with user interviews and surveys", "Data analysis skills"],
    postedDaysAgo: 5,
    fullDetails:
      "We are seeking a UX Researcher to help us understand our users better. You will be responsible for planning and executing research studies, analyzing findings, and presenting insights to the product team.",
  },
  {
    isNew: true,
    title: "IT Support Specialist",
    company: "Engro Corporation",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$40,000 - $60,000",
    salaryRs: "Rs 45,000 - Rs 70,000 a month",
    type: "full-time",
    description: "Provide technical assistance to employees and resolve IT issues.",
    requirements: ["Troubleshooting hardware and software", "Knowledge of Windows/Mac OS", "Customer service skills"],
    postedDaysAgo: 1,
    fullDetails:
      "Join our IT team to provide crucial support to our staff. You will be responsible for setting up new equipment, resolving technical problems, and maintaining our IT infrastructure.",
  },
  {
    isNew: false,
    title: "Graphic Designer",
    company: "Daraz",
    city: "Lahore",
    location: "Pakistan",
    salary: "$50,000 - $75,000",
    salaryRs: "Rs 60,000 - Rs 90,000 a month",
    type: "full-time",
    description: "Design marketing materials, website banners, and promotional content.",
    requirements: ["Adobe Creative Suite", "Portfolio showcasing design skills", "E-commerce experience preferred"],
    postedDaysAgo: 4,
    fullDetails:
      "We are looking for a creative Graphic Designer to join our marketing team. You will be responsible for creating visually appealing content for our online platform and marketing campaigns.",
  },
  {
    isNew: true,
    title: "HR Business Partner",
    company: "Jazz",
    city: "Karachi",
    location: "Pakistan",
    salary: "$70,000 - $110,000",
    salaryRs: "Rs 85,000 - Rs 130,000 a month",
    type: "full-time",
    description: "Align HR strategy with business goals and provide support to department heads.",
    requirements: ["5+ years HR experience", "Knowledge of HR best practices", "Strong interpersonal skills"],
    postedDaysAgo: 2,
    fullDetails:
      "We are seeking an HR Business Partner to support our business units. You will act as a consultant on human resource issues, providing guidance on recruitment, employee relations, and performance management.",
  },
  {
    isNew: false,
    title: "Front-end Developer",
    company: "Google",
    city: "Karachi",
    location: "Pakistan",
    salary: "$70,000 - $100,000",
    salaryRs: "Rs 45,000 - Rs 65,000 a month",
    type: "part-time",
    description: "Create intuitive UIs and improve user experiences.",
    requirements: ["Strong JavaScript skills", "Tailwind CSS experience"],
    postedDaysAgo: 5,
    fullDetails:
      "We're looking for a developer passionate about designing scalable UI components and improving UX...",
  },
  {
    isNew: false,
    title: "Full Stack Engineer",
    company: "Microsoft",
    city: "Lahore",
    location: "Pakistan",
    salary: "$100,000 - $150,000",
    salaryRs: "Rs 120,000 - Rs 180,000 a month",
    type: "full-time",
    description: "Develop and maintain web applications with a focus on both front-end and back-end.",
    requirements: ["C# and .NET", "Angular or React", "Azure services"],
    postedDaysAgo: 3,
    fullDetails:
      "Join our engineering team to work on large-scale enterprise applications. This role requires expertise in both front-end and back-end technologies and a strong understanding of cloud-native development.",
  },
  {
    isNew: true,
    title: "Mobile App Developer (iOS)",
    company: "Amazon",
    city: "Karachi",
    location: "Pakistan",
    salary: "$90,000 - $140,000",
    salaryRs: "Rs 110,000 - Rs 160,000 a month",
    type: "full-time",
    description: "Design and build advanced applications for the iOS platform.",
    requirements: ["Swift and Objective-C", "iOS frameworks", "Experience with RESTful APIs"],
    postedDaysAgo: 1,
    fullDetails:
      "We are looking for a skilled iOS Developer to join our mobile team. You will be responsible for developing new features, improving app performance, and ensuring a seamless user experience.",
  },
  {
    isNew: false,
    title: "Data Scientist",
    company: "Google",
    city: "Islamabad",
    location: "Pakistan",
    salary: "$110,000 - $170,000",
    salaryRs: "Rs 130,000 - Rs 200,000 a month",
    type: "full-time",
    description: "Utilize statistical analysis and machine learning to solve complex business problems.",
    requirements: ["Python and R", "Data modeling", "Experience with big data technologies"],
    postedDaysAgo: 7,
    fullDetails:
      "As a Data Scientist, you will be part of a team that extracts insights from vast amounts of data to inform product strategy and business decisions. This role requires a strong analytical mind and a passion for data-driven solutions.",
  },
  {
    isNew: true,
    title: "Marketing Coordinator",
    company: "Nestlé Pakistan",
    city: "Lahore",
    location: "Pakistan",
    salary: "$35,000 - $55,000",
    salaryRs: "Rs 40,000 - Rs 60,000 a month",
    type: "full-time",
    description: "Support the marketing team in executing campaigns and managing promotional activities.",
    requirements: ["Marketing degree or experience", "Organizational skills", "Social media savvy"],
    postedDaysAgo: 2,
    fullDetails:
      "We are looking for a proactive Marketing Coordinator to assist our marketing team. You will be responsible for coordinating events, managing social media schedules, and tracking campaign performance.",
  },
  {
    isNew: false,
    title: "Technical Writer",
    company: "Systems Limited",
    city: "Karachi",
    location: "Pakistan",
    salary: "$60,000 - $90,000",
    salaryRs: "Rs 75,000 - Rs 110,000 a month",
    type: "full-time",
    description: "Create clear and concise technical documentation for software products.",
    requirements: ["Technical writing experience", "Knowledge of software development lifecycle", "Excellent writing skills"],
    postedDaysAgo: 5,
    fullDetails:
      "Join our documentation team and help us create user-friendly guides and API references. You will work closely with developers and product managers to ensure the accuracy of all technical documents.",
  },
];

const job1 = [
  {
    isNew: true,
    title: "Senior Backend Engineer (Node.js)",
    company: "Microsoft",
    city: "Karachi",
    location: "Hybrid (3 days office)",
    salary: "PKR 350,000 - 450,000/mo",
    type: "full-time",
    description: "Design and implement scalable microservices architecture for our cloud products. Lead a team of 5 backend developers.",
    requirements: [
      "5+ years Node.js experience",
      "Expertise in AWS Lambda & API Gateway",
      "Strong SQL/NoSQL knowledge",
      "Experience with Docker and Kubernetes",
      "Computer Science degree preferred"
    ],
    id: "msft-be-2024-001"
  },
  {
    isNew: false,
    title: "Frontend Developer (React)",
    company: "Techlogix",
    city: "Lahore",
    salary: "PKR 250,000 - 300,000/mo",
    type: "full-time",
    description: "Build responsive UIs for enterprise SaaS applications using modern React ecosystem.",
    requirements: [
      "3+ years React experience",
      "Proficient in TypeScript",
      "Experience with Redux Toolkit",
      "Knowledge of Webpack/Vite",
      "UI/UX sensibilities"
    ],
    id: "tlx-fe-2024-042"
  },
  {
    title: "DevOps Engineer",
    company: "Systems Limited",
    city: "Islamabad",
    location: "On-site",
    salary: "PKR 400,000 - 500,000/mo",
    type: "contract",
    description: "Implement CI/CD pipelines and manage cloud infrastructure for financial systems.",
    requirements: [
      "Azure/GCP certification",
      "Terraform expertise",
      "Jenkins/GitHub Actions",
      "Python/Bash scripting",
      "3+ years production experience"
    ],
    id: "sys-devops-2024-017"
  },
  {
    isNew: true,
    title: "Data Scientist",
    company: "Airlift",
    city: "Karachi",
    salary: "PKR 500,000+/mo",
    type: "full-time",
    description: "Develop ML models for demand forecasting and route optimization in our logistics platform.",
    requirements: [
      "PhD/MS in Data Science",
      "PyTorch/TensorFlow mastery",
      "Pandas/NumPy expertise",
      "Experience with BigQuery",
      "Published research preferred"
    ],
    id: "al-ds-2024-003"
  },
  {
    title: "UX Designer",
    company: "Tintash",
    city: "Lahore",
    location: "Remote",
    type: "part-time",
    description: "Create intuitive user experiences for mobile gaming applications.",
    requirements: [
      "Portfolio required",
      "Figma/Sketch expertise",
      "2+ years mobile design",
      "Understanding of Material Design",
      "Animation skills a plus"
    ],
    id: "tt-ux-2024-028"
  },
  {
    isNew: true,
    title: "Flutter Developer",
    company: "Careem",
    city: "Karachi",
    salary: "PKR 400,000 - 600,000/mo",
    type: "full-time",
    description: "Build cross-platform features for our ride-hailing super app.",
    requirements: [
      "2+ apps on Play Store/App Store",
      "Dart proficiency",
      "State management solutions",
      "Firebase integration experience",
      "CI/CD knowledge"
    ],
    id: "crm-flutter-2024-011"
  },
  {
    title: "Technical Writer",
    company: "10Pearls",
    city: "Islamabad",
    location: "Hybrid",
    salary: "PKR 150,000 - 200,000/mo",
    type: "full-time",
    description: "Create developer documentation for API products and SDKs.",
    requirements: [
      "Computer Science background",
      "Markdown/Asciidoc proficiency",
      "Git version control",
      "Sample technical writings",
      "Basic coding knowledge"
    ],
    id: "10p-tw-2024-035"
  },
  {
    isNew: false,
    title: "QA Automation Engineer",
    company: "Confiz",
    city: "Lahore",
    salary: "PKR 300,000 - 350,000/mo",
    type: "full-time",
    description: "Develop test automation frameworks for enterprise software solutions.",
    requirements: [
      "Selenium/Cypress expertise",
      "Java/Python scripting",
      "JIRA/TestRail experience",
      "Performance testing knowledge",
      "3+ years QA experience"
    ],
    id: "confiz-qa-2024-022"
  },
  {
    title: "IT Project Manager",
    company: "Systems Limited",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 350,000 - 450,000/mo",
    type: "full-time",
    description: "Lead and manage IT projects from initiation to closure.",
    requirements: [
      "PMP or PRINCE2 certification",
      "5+ years project management experience",
      "Agile/Scrum methodologies",
      "Excellent communication and leadership"
    ],
    id: "sys-pm-2024-055"
  },
  {
    isNew: true,
    title: "Cybersecurity Analyst",
    company: "Jazz",
    city: "Islamabad",
    location: "Hybrid",
    salary: "PKR 280,000 - 350,000/mo",
    type: "full-time",
    description: "Monitor, analyze, and respond to security threats and vulnerabilities.",
    requirements: [
      "CISSP or CEH certification",
      "2+ years cybersecurity experience",
      "Incident response knowledge",
      "SIEM tools experience"
    ],
    id: "jazz-csa-2024-009"
  },
  {
    title: "Network Engineer",
    company: "PTCL",
    city: "Lahore",
    location: "On-site",
    salary: "PKR 180,000 - 250,000/mo",
    type: "full-time",
    description: "Manage and maintain the company's network infrastructure.",
    requirements: [
      "CCNA certification",
      "3+ years network administration",
      "Routing and switching protocols",
      "Troubleshooting skills"
    ],
    id: "ptcl-ne-2024-013"
  },
  {
    isNew: false,
    title: "Financial Analyst",
    company: "Nestlé Pakistan",
    city: "Karachi",
    salary: "PKR 200,000 - 280,000/mo",
    type: "full-time",
    description: "Conduct financial forecasting, reporting, and analysis.",
    requirements: [
      "ACCA or CFA",
      "4+ years financial analysis",
      "Advanced Excel and financial modeling",
      "Knowledge of IFRS"
    ],
    id: "nestle-fa-2024-031"
  },
  {
    title: "HR Business Partner",
    company: "Unilever Pakistan",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 320,000 - 400,000/mo",
    type: "full-time",
    description: "Provide strategic HR support to business units and management.",
    requirements: [
      "Master's in HR Management",
      "6+ years HR experience",
      "Talent management and employee relations",
      "Strong communication and negotiation"
    ],
    id: "unilever-hrbp-2024-045"
  },
  {
    isNew: true,
    title: "Civil Engineer",
    company: "FWO (Frontier Works Organization)",
    city: "Rawalpindi",
    salary: "PKR 220,000 - 300,000/mo",
    type: "full-time",
    description: "Oversee the design and execution of major civil infrastructure projects.",
    requirements: [
      "B.S. in Civil Engineering",
      "5+ years construction experience",
      "Knowledge of AutoCAD and project management",
      "PE registration preferred"
    ],
    id: "fwo-ce-2024-007"
  },
  {
    title: "Registered Nurse",
    company: "Shaukat Khanum Memorial Cancer Hospital",
    city: "Lahore",
    location: "On-site",
    salary: "PKR 120,000 - 180,000/mo",
    type: "full-time",
    description: "Provide patient care and support in an oncology setting.",
    requirements: [
      "B.S. in Nursing",
      "Valid PNC license",
      "Experience in oncology or critical care",
      "Compassionate and empathetic"
    ],
    id: "skmch-rn-2024-019"
  },
  {
    isNew: false,
    title: "Teacher (Primary School)",
    company: "Beaconhouse School System",
    city: "Lahore",
    salary: "PKR 80,000 - 120,000/mo",
    type: "full-time",
    description: "Educate and mentor primary school students in a stimulating environment.",
    requirements: [
      "Bachelor's in Education",
      "2+ years teaching experience",
      "Classroom management skills",
      "Creative and engaging teaching methods"
    ],
    id: "bhs-teacher-2024-025"
  },
  {
    title: "Audit Manager",
    company: "PwC Pakistan",
    city: "Islamabad",
    location: "On-site",
    salary: "PKR 450,000 - 600,000/mo",
    type: "full-time",
    description: "Lead audit engagements, manage a team, and ensure regulatory compliance.",
    requirements: [
      "CA/ACCA qualified",
      "7+ years audit experience",
      "Knowledge of IFRS and ISAs",
      "Strong analytical and leadership skills"
    ],
    id: "pwc-am-2024-033"
  },
  {
    isNew: true,
    title: "Supply Chain Analyst",
    company: "Engro Corporation",
    city: "Karachi",
    salary: "PKR 250,000 - 350,000/mo",
    type: "full-time",
    description: "Analyze supply chain data to identify efficiencies and cost savings.",
    requirements: [
      "Degree in Supply Chain or Logistics",
      "3+ years experience",
      "Data analysis tools (SQL, Excel)",
      "Knowledge of logistics and procurement"
    ],
    id: "engro-sca-2024-041"
  },
  {
    title: "Electrical Engineer",
    company: "KESC (Karachi Electric Supply Company)",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 200,000 - 280,000/mo",
    type: "full-time",
    description: "Design and maintain electrical power systems and distribution networks.",
    requirements: [
      "B.S. in Electrical Engineering",
      "4+ years experience",
      "Knowledge of high-voltage systems",
      "PEC registration"
    ],
    id: "kesc-ee-2024-005"
  },
  {
    isNew: false,
    title: "Social Media Manager",
    company: "Foodpanda",
    city: "Lahore",
    salary: "PKR 180,000 - 250,000/mo",
    type: "full-time",
    description: "Develop and execute social media strategies to grow brand presence.",
    requirements: [
      "3+ years social media management",
      "Experience with social media tools",
      "Content creation skills",
      "Knowledge of digital marketing"
    ],
    id: "foodpanda-smm-2024-015"
  },
  {
    title: "Data Engineer",
    company: "Devsinc",
    city: "Islamabad",
    location: "Hybrid",
    salary: "PKR 400,000 - 550,000/mo",
    type: "full-time",
    description: "Build and optimize data pipelines and data storage systems.",
    requirements: [
      "Python/Scala",
      "Spark/Hadoop",
      "SQL/NoSQL databases",
      "Cloud platforms (AWS, Azure)"
    ],
    id: "ds-de-2024-008"
  },
  {
    isNew: true,
    title: "Cloud Security Engineer",
    company: "Microsoft",
    city: "Lahore",
    location: "On-site",
    salary: "PKR 500,000 - 700,000/mo",
    type: "full-time",
    description: "Secure cloud environments and develop security solutions for Azure.",
    requirements: [
      "Azure Security certification",
      "4+ years cloud security experience",
      "Penetration testing and vulnerability scanning",
      "Threat modeling"
    ],
    id: "msft-cse-2024-002"
  },
  {
    title: "Product Marketing Manager",
    company: "Techlogix",
    city: "Karachi",
    location: "Hybrid",
    salary: "PKR 300,000 - 400,000/mo",
    type: "full-time",
    description: "Lead go-to-market strategies and product messaging.",
    requirements: [
      "5+ years product marketing",
      "Experience in B2B tech",
      "Market research and competitive analysis",
      "Excellent communication and presentation skills"
    ],
    id: "tlx-pmm-2024-043"
  },
  {
    isNew: false,
    title: "Full Stack Developer",
    company: "Systems Limited",
    city: "Lahore",
    salary: "PKR 350,000 - 450,000/mo",
    type: "full-time",
    description: "Build and maintain full-stack web applications using modern frameworks.",
    requirements: [
      "React/Angular, Node.js, Express",
      "3+ years full-stack experience",
      "MongoDB or SQL experience",
      "RESTful API design"
    ],
    id: "sys-fsd-2024-018"
  },
  {
    title: "Logistics Manager",
    company: "Amazon",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 400,000 - 550,000/mo",
    type: "full-time",
    description: "Manage and optimize logistics and delivery operations.",
    requirements: [
      "5+ years logistics management",
      "Experience with transportation planning",
      "Warehouse management systems",
      "Process optimization skills"
    ],
    id: "amazon-lm-2024-010"
  },
  {
    isNew: true,
    title: "Technical Program Manager",
    company: "Google",
    city: "Lahore",
    salary: "PKR 600,000 - 800,000/mo",
    type: "full-time",
    description: "Lead and manage large-scale technical projects across teams.",
    requirements: [
      "8+ years technical program management",
      "Experience with software development lifecycle",
      "Strong communication and leadership",
      "Bachelor's in Engineering or CS"
    ],
    id: "google-tpm-2024-004"
  },
  {
    title: "UI/UX Designer",
    company: "Apple",
    city: "Karachi",
    location: "Remote",
    salary: "PKR 300,000 - 450,000/mo",
    type: "full-time",
    description: "Design user interfaces and experiences for new Apple products.",
    requirements: [
      "Portfolio of mobile and web design",
      "Figma, Sketch, Adobe XD",
      "3+ years UI/UX experience",
      "Attention to detail and creativity"
    ],
    id: "apple-uxd-2024-006"
  },
  {
    isNew: false,
    title: "Senior Product Manager",
    company: "Airlift",
    city: "Lahore",
    salary: "PKR 600,000+/mo",
    type: "full-time",
    description: "Define product strategy and roadmap for new product features.",
    requirements: [
      "5+ years product management",
      "Experience with B2C applications",
      "Data-driven decision making",
      "Agile/Scrum methodologies"
    ],
    id: "al-pm-2024-034"
  },
  {
    title: "Game Designer",
    company: "Tintash",
    city: "Islamabad",
    location: "On-site",
    salary: "PKR 250,000 - 350,000/mo",
    type: "full-time",
    description: "Create game mechanics, narratives, and levels for mobile games.",
    requirements: [
      "Portfolio of game design work",
      "Experience with Unity/Unreal",
      "Knowledge of game theory",
      "Strong creative and storytelling skills"
    ],
    id: "tt-gd-2024-029"
  },
  {
    isNew: true,
    title: "E-commerce Manager",
    company: "Daraz",
    city: "Lahore",
    location: "Hybrid",
    salary: "PKR 300,000 - 400,000/mo",
    type: "full-time",
    description: "Manage and grow the e-commerce platform and optimize sales.",
    requirements: [
      "4+ years e-commerce experience",
      "Digital marketing expertise",
      "Data analysis skills",
      "P&L management"
    ],
    id: "daraz-ecm-2024-012"
  },
  {
    title: "Frontend Developer",
    company: "Confiz",
    city: "Lahore",
    location: "Hybrid",
    salary: "PKR 250,000 - 320,000/mo",
    type: "full-time",
    description: "Develop user interfaces for enterprise software solutions.",
    requirements: [
      "3+ years Angular/React experience",
      "TypeScript, HTML, CSS",
      "State management (NGRX/Redux)",
      "Unit testing (Jest/Enzyme)"
    ],
    id: "confiz-fe-2024-023"
  },
  {
    isNew: false,
    title: "IT Support Specialist",
    company: "Telenor Pakistan",
    city: "Islamabad",
    salary: "PKR 150,000 - 200,000/mo",
    type: "full-time",
    description: "Provide technical support to internal employees for hardware and software issues.",
    requirements: [
      "1-2 years IT support experience",
      "Troubleshooting skills",
      "Knowledge of Windows and Mac OS",
      "Excellent communication"
    ],
    id: "telenor-its-2024-030"
  },
  {
    title: "Marketing Executive",
    company: "Jazz",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 180,000 - 250,000/mo",
    type: "full-time",
    description: "Assist in executing marketing campaigns and promotional activities.",
    requirements: [
      "1-2 years marketing experience",
      "Social media marketing",
      "Content creation",
      "Event management"
    ],
    id: "jazz-me-2024-009-2"
  },
  {
    isNew: true,
    title: "Project Coordinator",
    company: "10Pearls",
    city: "Lahore",
    location: "Hybrid",
    salary: "PKR 200,000 - 280,000/mo",
    type: "full-time",
    description: "Support project managers in planning and executing software projects.",
    requirements: [
      "2+ years project coordination",
      "Knowledge of project management tools (Jira)",
      "Excellent organizational skills",
      "Communication and teamwork"
    ],
    id: "10p-pc-2024-036"
  },
  {
    title: "Brand Manager",
    company: "Unilever Pakistan",
    city: "Karachi",
    location: "On-site",
    salary: "PKR 450,000 - 600,000/mo",
    type: "full-time",
    description: "Develop and implement brand strategies to drive market growth and profitability.",
    requirements: [
      "5+ years brand management",
      "Experience with consumer goods",
      "Market analysis and P&L management",
      "Creative and strategic thinking"
    ],
    id: "unilever-bm-2024-046"
  },
  {
    isNew: false,
    title: "HR Generalist",
    company: "Nestlé Pakistan",
    city: "Islamabad",
    salary: "PKR 180,000 - 250,000/mo",
    type: "full-time",
    description: "Manage day-to-day HR functions, including recruitment, payroll, and employee relations.",
    requirements: [
      "3+ years HR experience",
      "Knowledge of labor laws",
      "HRIS software experience",
      "Problem-solving skills"
    ],
    id: "nestle-hrg-2024-032"
  },
  {
    title: "Content Writer",
    company: "Graana.com",
    city: "Islamabad",
    location: "Remote",
    salary: "PKR 80,000 - 120,000/mo",
    type: "full-time",
    description: "Create engaging and SEO-friendly content for our real estate website.",
    requirements: [
      "Excellent writing and editing",
      "SEO and keyword research",
      "Portfolio of published articles",
      "Research skills"
    ],
    id: "graana-cw-2024-047"
  },
  {
    isNew: true,
    title: "Mechanical Engineer",
    company: "Honda Atlas Cars Pakistan",
    city: "Lahore",
    salary: "PKR 250,000 - 350,000/mo",
    type: "full-time",
    description: "Design and test mechanical components for automotive applications.",
    requirements: [
      "B.S. in Mechanical Engineering",
      "3+ years automotive experience",
      "CAD software proficiency",
      "Knowledge of manufacturing processes"
    ],
    id: "honda-me-2024-048"
  },
  {
    title: "Sales Manager",
    company: "Telenor Pakistan",
    city: "Lahore",
    location: "On-site",
    salary: "PKR 350,000 - 450,000/mo",
    type: "full-time",
    description: "Lead the sales team and develop strategies to achieve sales targets.",
    requirements: [
      "5+ years sales management",
      "Experience in the telecom industry",
      "Strong leadership and negotiation",
      "Results-driven mindset"
    ],
    id: "telenor-sm-2024-037"
  },
  {
    isNew: false,
    title: "Operations Manager",
    company: "Foodpanda",
    city: "Karachi",
    salary: "PKR 280,000 - 380,000/mo",
    type: "full-time",
    description: "Oversee daily operations and optimize delivery logistics.",
    requirements: [
      "4+ years operations experience",
      "Experience in logistics or food delivery",
      "Data analysis and problem-solving",
      "Team management skills"
    ],
    id: "foodpanda-om-2024-016"
  },
  {
    title: "Data Analyst",
    company: "Daraz",
    city: "Karachi",
    location: "Hybrid",
    salary: "PKR 220,000 - 300,000/mo",
    type: "full-time",
    description: "Analyze business data to provide insights and support decision-making.",
    requirements: [
      "3+ years data analysis",
      "SQL and Python/R",
      "Tableau or Power BI",
      "Knowledge of e-commerce metrics"
    ],
    id: "daraz-da-2024-049"
  },
  {
    isNew: true,
    title: "Architect",
    company: "Habib Rafiq (Pvt) Ltd.",
    city: "Lahore",
    location: "On-site",
    salary: "PKR 300,000 - 400,000/mo",
    type: "full-time",
    description: "Lead architectural design and project management for construction projects.",
    requirements: [
      "Master's in Architecture",
      "8+ years experience",
      "Proficiency in architectural software (AutoCAD, Revit)",
      "Strong portfolio"
    ],
    id: "hrpl-arch-2024-026"
  },
  {
    title: "Pharmacist",
    company: "Aga Khan University Hospital",
    city: "Karachi",
    salary: "PKR 180,000 - 250,000/mo",
    type: "full-time",
    description: "Dispense medications, advise patients, and ensure pharmacy operations run smoothly.",
    requirements: [
      "Doctor of Pharmacy (Pharm.D)",
      "Valid pharmacy license",
      "Experience in a hospital setting",
      "Knowledge of pharmacy software"
    ],
    id: "akuh-ph-2024-050"
  },
  {
    isNew: false,
    title: "Journalist",
    company: "Dawn News",
    city: "Islamabad",
    location: "On-site",
    salary: "PKR 150,000 - 220,000/mo",
    type: "full-time",
    description: "Investigate, write, and report on news stories for publication.",
    requirements: [
      "Degree in Journalism or Communications",
      "2+ years experience",
      "Strong research and writing skills",
      "Ability to work under tight deadlines"
    ],
    id: "dawn-jr-2024-038"
  },
  {
    title: "Aerospace Engineer",
    company: "Pakistan Aeronautical Complex (PAC)",
    city: "Kamra",
    location: "On-site",
    salary: "PKR 250,000 - 350,000/mo",
    type: "full-time",
    description: "Design and analyze aircraft structures and systems.",
    requirements: [
      "B.S. in Aerospace/Mechanical Engineering",
      "Knowledge of CAD and FEA software",
      "Experience with composite materials",
      "PEC registration"
    ],
    id: "pac-ae-2024-044"
  },
  {
    isNew: true,
    title: "Senior Software Engineer",
    company: "Devsinc",
    city: "Karachi",
    location: "Remote",
    salary: "PKR 500,000 - 650,000/mo",
    type: "full-time",
    description: "Lead the development of complex software solutions and mentor junior engineers.",
    requirements: [
      "7+ years software development",
      "Expertise in Java, Python, or C#",
      "Experience with microservices and distributed systems",
      "Strong problem-solving skills"
    ],
    id: "ds-sse-2024-009"
  },
  {
    title: "UI/UX Designer",
    company: "Careem",
    city: "Lahore",
    salary: "PKR 250,000 - 350,000/mo",
    type: "full-time",
    description: "Create user-centered designs for the Careem app and services.",
    requirements: [
      "Figma and Sketch expertise",
      "3+ years UI/UX experience",
      "Prototyping and user testing",
      "Strong portfolio"
    ],
    id: "crm-uxd-2024-011-2"
  },
];

const companies = [
  {
    id: 1,
    name: "Microsoft",
    reviews: 12453,
    rating: 4.7,
    icon: "MS",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    website: "https://microsoft.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Software Engineer",
          salary: "$120,000",
          reported: "1,234 reports",
          description: "Develops software applications and systems.",
          experience: "2+ years",
          benefits: "Health insurance, stock options, flexible work"
        },
        {
          id: 2,
          title: "Product Manager",
          salary: "$145,000",
          reported: "876 reports",
          description: "Leads product development and strategy.",
          experience: "5+ years",
          benefits: "Bonus, stock options, wellness programs"
        }
      ],
      engineering: [
        {
          id: 3,
          title: "Senior Developer",
          salary: "$160,000",
          reported: "543 reports",
          description: "Leads technical projects and mentors junior developers.",
          experience: "7+ years",
          benefits: "Generous PTO, retirement matching"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Google",
    reviews: 18932,
    rating: 4.8,
    icon: "GO",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    website: "https://google.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Software Engineer",
          salary: "$130,000",
          reported: "2,345 reports",
          description: "Builds scalable software solutions.",
          experience: "2+ years",
          benefits: "Free meals, gym membership"
        }
      ],
      engineering: [
        {
          id: 2,
          title: "Machine Learning Engineer",
          salary: "$175,000",
          reported: "890 reports",
          description: "Develops AI/ML models and systems.",
          experience: "5+ years",
          benefits: "Research opportunities, stock grants"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Apple",
    reviews: 9876,
    rating: 4.6,
    icon: "AP",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-800",
    website: "https://apple.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "iOS Developer",
          salary: "$135,000",
          reported: "1,120 reports",
          description: "Develops applications for Apple platforms.",
          experience: "3+ years",
          benefits: "Product discounts, stock options"
        }
      ],
      hardware: [
        {
          id: 2,
          title: "Hardware Engineer",
          salary: "$150,000",
          reported: "650 reports",
          description: "Designs Apple hardware components.",
          experience: "6+ years",
          benefits: "Lab access, prototyping budget"
        }
      ]
    }
  },
  {
    id: 4,
    name: "Amazon",
    reviews: 15678,
    rating: 4.3,
    icon: "AM",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    website: "https://amazon.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Software Development Engineer",
          salary: "$125,000",
          reported: "1,890 reports",
          description: "Builds and maintains Amazon services.",
          experience: "2+ years",
          benefits: "Stock options, relocation package"
        }
      ],
      cloud: [
        {
          id: 2,
          title: "AWS Solutions Architect",
          salary: "$155,000",
          reported: "780 reports",
          description: "Designs cloud infrastructure solutions.",
          experience: "5+ years",
          benefits: "Certification budget, travel opportunities"
        }
      ]
    }
  },
  {
    id: 5,
    name: "Netflix",
    reviews: 5432,
    rating: 4.2,
    icon: "NF",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    website: "https://netflix.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Streaming Engineer",
          salary: "$180,000",
          reported: "320 reports",
          description: "Optimizes video delivery pipelines.",
          experience: "4+ years",
          benefits: "Unlimited vacation, top-tier health plan"
        }
      ],
      content: [
        {
          id: 2,
          title: "Content Strategist",
          salary: "$140,000",
          reported: "210 reports",
          description: "Develops original content strategies.",
          experience: "6+ years",
          benefits: "Creative freedom, production access"
        }
      ]
    }
  },
  {
    id: 6,
    name: "Devsinc",
    reviews: 342,
    rating: 4.2,
    icon: "DI",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    website: "https://devsinc.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Full Stack Developer",
          salary: "$85,000",
          reported: "45 reports",
          description: "Develops web applications and services.",
          experience: "2+ years",
          benefits: "Health insurance, training budget"
        }
      ],
      consulting: [
        {
          id: 2,
          title: "Technical Consultant",
          salary: "$95,000",
          reported: "32 reports",
          description: "Provides technical solutions to clients.",
          experience: "4+ years",
          benefits: "Performance bonuses, flexible hours"
        }
      ]
    }
  },
  {
    id: 7,
    name: "10Pearls",
    reviews: 287,
    rating: 4.0,
    icon: "10P",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    website: "https://10pearls.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Software Engineer",
          salary: "$80,000",
          reported: "38 reports",
          description: "Develops custom software solutions.",
          experience: "2+ years",
          benefits: "Health coverage, annual raises"
        }
      ],
      mobile: [
        {
          id: 2,
          title: "Mobile Developer",
          salary: "$90,000",
          reported: "25 reports",
          description: "Builds iOS/Android applications.",
          experience: "3+ years",
          benefits: "Device allowance, conference tickets"
        }
      ]
    }
  },
  {
    id: 8,
    name: "Systems Limited",
    reviews: 512,
    rating: 4.1,
    icon: "SL",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    website: "https://systemsltd.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "ERP Consultant",
          salary: "$75,000",
          reported: "68 reports",
          description: "Implements enterprise resource planning systems.",
          experience: "3+ years",
          benefits: "Certification support, travel allowance"
        }
      ],
      enterprise: [
        {
          id: 2,
          title: "Enterprise Architect",
          salary: "$110,000",
          reported: "42 reports",
          description: "Designs large-scale business solutions.",
          experience: "8+ years",
          benefits: "Leadership training, stock options"
        }
      ]
    }
  },
  {
    id: 9,
    name: "Techlogix",
    reviews: 198,
    rating: 3.9,
    icon: "TL",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    website: "https://techlogix.com",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Business Analyst",
          salary: "$70,000",
          reported: "28 reports",
          description: "Bridges business needs with technical solutions.",
          experience: "2+ years",
          benefits: "Professional development budget"
        }
      ],
      digital: [
        {
          id: 2,
          title: "Digital Transformation Lead",
          salary: "$95,000",
          reported: "18 reports",
          description: "Leads organizational digital initiatives.",
          experience: "5+ years",
          benefits: "Strategic role, executive exposure"
        }
      ]
    }
  },
  {
    id: 10,
    name: "Jazz",
    reviews: 789,
    rating: 4.4,
    icon: "JZ",
    iconBg: "bg-red-100",
    iconColor: "text-red-800",
    website: "https://jazz.com.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Marketing Manager",
          salary: "PKR 450,000",
          reported: "55 reports",
          description: "Develops and executes marketing campaigns.",
          experience: "5+ years",
          benefits: "Quarterly bonuses, telecom benefits"
        }
      ],
      telecom: [
        {
          id: 2,
          title: "Network Engineer",
          salary: "PKR 300,000",
          reported: "40 reports",
          description: "Maintains and optimizes network infrastructure.",
          experience: "3+ years",
          benefits: "On-call allowance, professional courses"
        }
      ]
    }
  },
  {
    id: 11,
    name: "Unilever Pakistan",
    reviews: 954,
    rating: 4.5,
    icon: "UL",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-800",
    website: "https://unilever.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Brand Manager",
          salary: "PKR 600,000",
          reported: "70 reports",
          description: "Manages a specific product brand.",
          experience: "6+ years",
          benefits: "Annual bonus, health insurance"
        }
      ],
      marketing: [
        {
          id: 2,
          title: "Assistant Manager Marketing",
          salary: "PKR 350,000",
          reported: "50 reports",
          description: "Supports brand managers in campaign execution.",
          experience: "2+ years",
          benefits: "Performance-based incentives"
        }
      ]
    }
  },
  {
    id: 12,
    name: "FWO (Frontier Works Organization)",
    reviews: 150,
    rating: 3.8,
    icon: "FWO",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-900",
    website: "https://fwo.com.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Civil Engineer",
          salary: "PKR 250,000",
          reported: "25 reports",
          description: "Designs and supervises civil construction projects.",
          experience: "3+ years",
          benefits: "Site allowance, life insurance"
        }
      ],
      construction: [
        {
          id: 2,
          title: "Project Engineer",
          salary: "PKR 320,000",
          reported: "15 reports",
          description: "Manages engineering aspects of large projects.",
          experience: "5+ years",
          benefits: "Travel allowance, accommodation"
        }
      ]
    }
  },
  {
    id: 13,
    name: "Shaukat Khanum Memorial Cancer Hospital",
    reviews: 430,
    rating: 4.6,
    icon: "SK",
    iconBg: "bg-green-100",
    iconColor: "text-green-800",
    website: "https://shaukatkhanum.org.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Registered Nurse",
          salary: "PKR 150,000",
          reported: "45 reports",
          description: "Provides care to cancer patients.",
          experience: "2+ years",
          benefits: "Medical insurance, professional development"
        }
      ],
      medical: [
        {
          id: 2,
          title: "Medical Oncologist",
          salary: "PKR 800,000",
          reported: "10 reports",
          description: "Diagnoses and treats cancer patients.",
          experience: "8+ years",
          benefits: "Research grants, paid conferences"
        }
      ]
    }
  },
  {
    id: 14,
    name: "Beaconhouse School System",
    reviews: 580,
    rating: 4.1,
    icon: "BSS",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-800",
    website: "https://beaconhouse.edu.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Teacher",
          salary: "PKR 100,000",
          reported: "60 reports",
          description: "Educates and mentors students.",
          experience: "2+ years",
          benefits: "Professional training, school tuition discount"
        }
      ],
      education: [
        {
          id: 2,
          title: "Principal",
          salary: "PKR 350,000",
          reported: "12 reports",
          description: "Leads and manages a school campus.",
          experience: "10+ years",
          benefits: "Leadership bonuses, annual trip"
        }
      ]
    }
  },
  {
    id: 15,
    name: "PwC Pakistan",
    reviews: 345,
    rating: 4.3,
    icon: "PWC",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-800",
    website: "https://pwc.com.pk",
    salaryData: {
      average: [
        {
          id: 1,
          title: "Auditor",
          salary: "PKR 300,000",
          reported: "40 reports",
          description: "Conducts financial audits for clients.",
          experience: "3+ years",
          benefits: "CA/ACCA study support, performance bonus"
        }
      ],
      finance: [
        {
          id: 2,
          title: "Senior Tax Consultant",
          salary: "PKR 450,000",
          reported: "20 reports",
          description: "Provides tax advisory services to corporate clients.",
          experience: "6+ years",
          benefits: "International travel opportunities"
        }
      ]
    }
  },
];

export { jobs, job1, companies };