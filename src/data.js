export const profile = {
  name: 'Ayesha Shafiq',
  title: 'Computer Engineering & Software Technology Graduate',
  intro: 'Computer Engineering graduate with hands-on work across full-stack software, Android development, IoT systems, computer vision, and technical operations.',
  location: 'Sharjah / Abu Dhabi, UAE',
  email: 'ayeshashafiq22443@gmail.com',
  phone: '+971 55 725 0492',
  github: 'https://github.com/ayesha223-shafiq',
  linkedin: 'https://linkedin.com/in/ayesha-shafiq',
  about: 'Computer Engineering graduate with practical experience in full-stack web applications, Android development, IoT embedded systems, and computer vision. During technical operations work at Signature Impact / SIT Secretariat, I contributed to Node.js backend architecture, blockchain verification research, public-sector financial modeling, machine-learning workflows, and technical operations. I enjoy translating complex ideas into practical software and engineering solutions.',
  skills: {
    'Programming Languages': ['Java', 'Python', 'C', 'C++', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
    'Mobile & Web Backend': ['Android Studio', 'Node.js REST APIs', 'Firebase Realtime DB', 'Firebase Auth APIs'],
    'AI, Vision & Data Science': ['OpenCV Image Processing', 'Google Colab', 'Kaggle ML Models', 'CNN'],
    'Embedded Systems & IoT': ['Raspberry Pi', 'Microcontrollers', 'Sensor Interfacing', 'Hardware Automation'],
    'Databases & Engineering Tools': ['MySQL', 'Git & GitHub', 'VS Code', 'Advanced Excel Financial Automations']
  },
  experience: {
    role: 'Computer Engineering & Technical Operations Intern',
    company: 'Signature Impact / SIT Secretariat',
    date: '20 Jul 2026 – 30 Nov 2026',
    location: 'Islamabad, Pakistan',
    supervisor: 'Mr. M Umer Tariq (Secretary General) & Dr. Muhammad Afzal',
    highlights: [
      'Engineered responsive landing interfaces and Node.js backend REST services for Agrihawk Pro; integrated live Weather APIs and connected the codebase to Firebase Cloud Database for real-time telemetry.',
      'Researched and designed an independent layer-1 blockchain framework, mapping cryptographic hash functions and transactional data verification nodes without Ethereum constraints.',
      'Audited Sindh Public-Private Partnership bidding frameworks across 200 public school sites and engineered dynamic Excel formulas for construction budgeting and resource allocation.',
      'Executed neural-network training pipelines on Google Colab using multi-class Kaggle datasets for automated crop analytics and chemical data classification.',
      'Configured LMS course trees for Meezan School System, onboarded engineering interns, and facilitated corporate masterclasses under executive leadership.'
    ]
  },
  education: 'Bachelor of Science in Computer Engineering',
  institution: 'International Islamic University, Islamabad, Pakistan',
  year: '2026',
  languages: ['English — Professional / Fluent', 'Urdu — Native / Fluent', 'Punjabi — Native'],
  strengths: ['Analytical Problem Solving', 'SDLC Best Practices', 'Technical MoM Writing', 'Team Leadership']
};

export const projects = [
 {title:'Smart UAV for Precision Agriculture (Agrihawk Pro Core)',type:'Embedded & Robotics',tag:'Final Year Project',image:'/images/hero_agri_drone_agriculture_1790928179881.jpg',description:'Autonomous UAV concept integrating microcontrollers, IoT environmental sensors and aerial computer vision for crop health monitoring, weed/disease identification and targeted pesticide spraying routes.',stack:['Python','OpenCV','Raspberry Pi','Node.js','IoT Sensors'],details:['Integrated microcontrollers and IoT environmental sensors.','Applied image-processing workflows for crop health and disease/weed identification.','Designed targeted spraying route concepts for precision agriculture.']},
 {title:'Sindh Educational Infrastructure Compliance & Financial Engine',type:'Data & Financial Modeling',image:'/images/project_student_analysis_1790930316438.jpg',description:'Compliance and financial-modeling workflow for public-school infrastructure data under Sindh PPP bidding guidelines, covering 200 schools in the Thatta region.',stack:['Advanced Excel','Financial Modeling','Data Audit','PPP Procurement'],details:['Extracted and verified structural compliance data across 200 public schools.','Built multi-tab calculation engines for unit costing, student capacity mapping and resource allocation.']},
 {title:'Real-Time Mobile Messaging System (Discord Replica)',type:'Mobile Development',image:'/images/project_discord_chatverse_1790930377375.jpg',description:'Android messaging prototype featuring real-time updates, channel navigation, authentication and persistent profiles.',stack:['Android Studio','Java','Firebase DB','Auth API'],details:['Built mobile messaging UI and channel navigation.','Integrated authentication and Firebase data persistence.','Implemented real-time data update workflows.']},
 {title:'Secure Online Banking Application',type:'Mobile Development',image:'/images/project_banking_app_1790930353478.jpg',description:'Android banking interface with user authentication, balance tracking and transaction-record workflows.',stack:['Android','Java','Firebase Realtime DB'],details:['Implemented user authentication interface and account views.','Created balance tracking and transaction record workflows.']},
 {title:'Low-Light Computer Vision Surveillance Unit',type:'Computer Vision',image:'/images/project_lowlight_vision_1790928211756.jpg',description:'Raspberry Pi surveillance prototype using OpenCV enhancement filters to support person detection in low-contrast environments.',stack:['Raspberry Pi','OpenCV','Python','IoT'],details:['Optimized image-processing filters for low-light scenes.','Prototyped edge-enhancement processing for person detection.']},
 {title:'Hospital Management System Relational Database',type:'Database Design',image:'/images/project_hospital_management_1790929604720.jpg',description:'Relational SQL schema for hospital administration, with patient-record indexing, appointment queries and billing transactions.',stack:['MySQL','SQL','Database Design'],details:['Designed relational schema for hospital administration.','Optimized patient record indexes and appointment queries.','Structured billing transaction data.']},
 // Additional portfolio projects retained from the previous portfolio, beyond the CV's selected projects.
 {title:'Student Performance Analysis System',type:'Data & Python',image:'/images/project_student_analysis_1790930316438.jpg',description:'Python-based analysis project for tracking student performance trends and generating feedback from score data.',stack:['Python','Google Colab','Data Processing'],details:['Analyzes student score trends.','Identifies changes in performance over time.']},
 {title:'Rain Detector Embedded System',type:'Embedded & Hardware',image:'/images/project_rain_detector_1790929587127.jpg',description:'Microcontroller and rain-sensor prototype for detecting precipitation and triggering an alert or response.',stack:['C/C++','Microcontrollers','Sensors'],details:['Integrated rain sensor with microcontroller.','Used threshold-based detection for response logic.']}
];
