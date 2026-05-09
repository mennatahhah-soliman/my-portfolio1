/**
 * Portfolio Script
 * Handles: Translations, Theme Toggle, Typing Animation, Scroll Effects
 * Contact Form: FormSubmit Integration
 */

// --- Translations Data ---
const translations = {
    en: {
        navHome: "HOME",
        navAbout: "ABOUT",
        navEducation: "EDUCATION",
        navSkills: "SKILLS",
        navExperience: "EXPERIENCE",
        expTitle: "My Professional Journey",
        exp1Title: "Full-Stack Web Developer - Digilians",
        exp1Date: "Feb 2026 - Present",
        exp1Challenge: "Build scalable web applications with modern stack",
        exp1Action: "Developed apps using React.js and Node.js with REST APIs and database integration",
        exp1Result: "Delivered production-ready applications with clean, maintainable code",
        exp2Title: "React.js Frontend Developer (Intern) - Web Masters Company",
        exp2Date: "Jul 2025 - Aug 2025",
        exp2Challenge: "Build responsive and user-friendly UI components with consistent design across different devices",
        exp2Action: "Designed UI layouts using Figma and developed 10+ reusable React components, implementing responsive design with Bootstrap and integrating REST APIs using Axios",
        exp2Result: "Delivered clean, responsive, and maintainable user interfaces that improved user experience and performance",
        viewCertificate: "View Certificate",
        labelChallenge: "Challenge",
        labelAction: "Action",
        labelResult: "Result",
        navServices: "SERVICES",
        navProjects: "PROJECTS",
        navAchievements: "ACHIEVEMENTS",
        navTestimonials: "TESTIMONIALS",
        comingSoonTitle: "Coming Soon!",
        comingSoonDesc: "My achievements and milestones will be displayed here soon. Stay tuned!",
        heroGreeting: "Hello, I'm",
        heroSummary: "Building scalable React applications focused on performance and user experience.",
        btnViewProjects: "View My Work",
        btnDownloadCV: "Download CV",
        btnDownloadCVText: "Download CV",
        navContactBtn: "Contact Me",
        aboutTitle: "About Me",
        aboutText1: "I am Menna, a Frontend Developer specializing in React, building interactive and high-performance web applications that help startups and growing businesses achieve measurable results. My passion for creating intuitive user interfaces and turning designs into real applications drives me to continuously learn best practices and enhance the overall user experience.",
        aboutText2: "I have hands-on experience in <span class='highlight-text'>over 3 React projects</span>, including professional web applications and scalable dashboards. I focus on writing clean, maintainable code, optimizing performance, and delivering responsive designs that work efficiently across all devices. My work includes transforming complex UI/UX designs into functional applications, managing state, building reusable components, and delivering tangible results for both users and businesses.",
        aboutText3: "I am skilled in React, JavaScript, HTML, CSS, Bootstrap, REST APIs, and Git, with a strong emphasis on performance optimization and creating seamless user experiences. I continuously refine my skills according to modern frontend standards, believing that great code should be functional, clear, maintainable, and impactful.",
        ach1Title: "ITI Summer Training",
        ach1Desc: "Completed intensive training in Angular and modern web development.",
        ach2Title: "SEF Academy",
        ach2Desc: "Certified in Frontend Development Training.",
        eduHeader: "Education",
        eduDegree: "Bachelor of Computer and Information Technology",
        eduInstitution: "Egyptian E-Learning University (EELU)",
        eduMajor: "Major: Information Technology (IT)",
        eduProject: "Final Project: Autism champions-Excellent grade",
        eduGPA: "GPA: 3.45 / 4.0 (Very Good) with Honors",
        certHeader: "Certificates",
        cert0Name: "Full-Stack Web Development",
        cert0Inst: "Digilians Professional Track",
        cert0Date: "2026 - Present",
        cert1Name: "React.js Training",
        cert1Inst: "Web Masters Company",
        cert1Date: "Jul 2025 - Aug 2025",
        cert1Desc: "Training on building interactive web applications using React.",
        cert2Name: "Frontend Development Training",
        cert2Inst: "SEF Academy",
        cert2Date: "2024",
        cert2Desc: "Training in HTML, CSS, JavaScript, and responsive design.",
        cert3Name: "ITI Summer Training Program",
        cert3Inst: "Information Technology Institute (ITI)",
        cert3Date: "2024",
        cert3Desc: "Training on Angular and building scalable applications.",
        btnViewCert: "View Certificate",
        tabFrontend: "FRONTEND",
        tabBackend: "BACKEND",
        tabSoft: "SOFT SKILLS",
        tabTools: "TOOLS & TECHNOLOGIES",
        tabLanguages: "LANGUAGES",
        frontendDesc: "Designing and developing scalable, high-performance web applications with React.js, focusing on clean architecture, maintainable code, optimized rendering, and seamless user experience across devices.",
        backendDesc: "Building secure and scalable backend services using Node.js and Express.js, implementing structured architecture patterns and efficient database integration to ensure reliability and performance.",
        skillsTitle: "My Skills",
        servicesTitle: "Services",
        service1Title: "UI Development",
        service1Desc: "Designing and building modern, responsive user interfaces from concept to implementation, focusing on usability and clean design.",
        service2Title: "Web Applications",
        service2Desc: "Building full-featured web applications using React & Node JS.",
        btnViewPricing: "View Pricing Planning",
        service3Title: "API Development",
        service3Desc: "Secure and documented RESTful APIs for web app.",
        projectsTitle: "Featured Projects",
        project1Title: "E-Commerce Platform",
        project1Challenge: "Build a scalable and user-friendly e-commerce application with dynamic product filtering and cart management",
        project1Action: "Developed a responsive frontend using React.js, implemented dynamic filtering and shopping cart functionality, and integrated REST APIs for real-time data handling",
        project1Result: "Delivered a fully functional e-commerce platform with smooth user experience and efficient state management",
        project2Title: "Autism Champions Platform",
        project2Challenge: "Create an interactive platform to support users with autism through modern web technologies and AI-based assistance",
        project2Action: "Designed and developed a responsive web platform using React.js and Tailwind CSS, and integrated an AI chatbot to enhance user support and engagement",
        project2Result: "Delivered an intelligent and user-friendly platform that improves accessibility and provides real-time assistance",
        btnVideo: "Video",
        btnCode: "Code",
        contactTitle: "Get In Touch",
        contactEmailLabel: "Email Me",
        contactPhoneLabel: "Call Me",
        contactLocationLabel: "Location",
        contactLocation: "Fayoum, Egypt",
        contactWhatsappLabel: "WhatsApp",
        btnSendMessage: "Send Message",
        footerCopyright: "© 2026 Mennatallah Soliman. All rights reserved.",
        footerShyTitle: "DON'T BE SHY!",
        footerShyText: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        footerWhoTitle: "WHO AM I?",
        footerWhoText: "I'm a Front end Developer & React.js Enthusiast, passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, scalable web applications that make your project a success.",
        typingRoles: ["Developer", "Engineer", "Enthusiast"],
        formSuccess: "✓ Message sent successfully! I'll get back to you soon.",
        formError: "✗ Failed to send message. Please try again.",
        pricingTitle: "Pricing Plans",
        pricingSubtitle: "Choose Your Plan",
        pricingDesc: "No hidden fees. Every plan is scoped to deliver real value — from a simple landing page to a full web application.",
        pricingBadge: "Transparent Pricing",
        pricingBanner: "All plans include clean code, responsive design, and post-launch support. As a junior developer, I offer affordable rates to build my portfolio while delivering quality work.",
        planStarter: "STARTER",
        planBalance: "BALANCE",
        planProfessional: "PROFESSIONAL",
        planCustom: "CUSTOM",
        planBasicTitle: "Basic",
        planBalanceTitle: "Balance",
        planProTitle: "PRO",
        planTalkTitle: "Let's Talk",
        planBasicDesc: "Perfect for simple static websites or personal landing pages.",
        planBalanceDesc: "Ideal for business websites with dynamic content and basic React.",
        planProDesc: "Full-stack project with React, Node.js, and database.",
        planTalkDesc: "Tailored solutions for complex projects with specific requirements.",
        priceProject: "/project",
        priceFlexible: "Flexible",
        btnGetStarted: "Get Started",
        btnContactMe: "Contact Me",
        backToPortfolio: "Back to Portfolio"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navEducation: "التعليم",
        navSkills: "مهاراتي",
        navExperience: "الخبرة",
        expTitle: "رحلتي المهنية",
        exp1Title: "مطور ويب شامل (Full-Stack) - Digilians",
        exp1Date: "فبراير 2026 - الحاضر",
        exp1Challenge: "بناء تطبيقات ويب قابلة للتوسع باستخدام تقنيات حديثة",
        exp1Action: "تطوير تطبيقات باستخدام React.js و Node.js مع واجهات برمجة تطبيقات REST ودمج قواعد البيانات",
        exp1Result: "تقديم تطبيقات جاهزة للإنتاج بكود نظيف وقابل للصيانة",
        exp2Title: "مطور واجهات أمامية React.js (متدرب) - شركة Web Masters",
        exp2Date: "يوليو 2025 - أغسطس 2025",
        exp2Challenge: "بناء مكونات واجهة مستخدم استجابية وسهلة الاستخدام بتصميم متسق عبر الأجهزة المختلفة",
        exp2Action: "تصميم مخططات واجهة المستخدم باستخدام Figma وتطوير أكثر من 10 مكونات React قابلة لإعادة الاستخدام، مع تنفيذ تصميم استجابي باستخدام Bootstrap ودمج واجهات برمجة تطبيقات REST باستخدام Axios",
        exp2Result: "تقديم واجهات مستخدم نظيفة واستجابية وقابلة للصيانة أدت إلى تحسين تجربة المستخدم والأداء",
        viewCertificate: "عرض الشهادة",
        labelChallenge: "التحدي",
        labelAction: "الإجراء",
        labelResult: "النتيجة",
        navServices: "خدماتي",
        navProjects: "مشاريعي",
        navAchievements: "الإنجازات",
        navTestimonials: "التوصيات",
        comingSoonTitle: "قريباً!",
        comingSoonDesc: "إنجازاتي وإنجازاتي ستعرض هنا قريباً. ترقبوا!",
        heroGreeting: "مرحباً، أنا",
        heroSummary: "بناء تطبيقات React قابلة للتوسع تركز على الأداء وتجربة المستخدم.",
        btnViewProjects: "عرض أعمالي",
        btnDownloadCV: "تحميل السيرة الذاتية",
        btnDownloadCVText: "تحميل CV",
        navContactBtn: "تواصل معي",
        aboutTitle: "من أنا",
        aboutText1: "أنا منة، مطورة واجهات أمامية متخصصة في React، أقوم ببناء تطبيقات ويب تفاعلية وعالية الأداء تساعد الشركات الناشئة والشركات المتنامية على تحقيق نتائج ملموسة. شغفي بإنشاء واجهات مستخدم بديهية وتحويل التصاميم إلى تطبيقات حقيقية يدفعني للتعلم المستمر لأفضل الممارسات وتحسين تجربة المستخدم بشكل عام.",
        aboutText2: "<span class='highlight-text'>لدي خبره عملية فى اكثر من 3 مشاريع</span> React، بما في ذلك تطبيقات الويب الاحترافية ولوحات التحكم القابلة للتوسع. أركز على كتابة كود نظيف وقابل للصيانة، وتحسين الأداء، وتقديم تصميمات استجابية تعمل بكفاءة عبر جميع الأجهزة. يتضمن عملي تحويل تصميمات UI/UX المعقدة إلى تطبيقات وظيفية، وإدارة الحالة، وبناء مكونات قابلة لإعادة الاستخدام، وتقديم نتائج ملموسة لكل من المستخدمين والشركات.",
        aboutText3: "أنا ماهرة في React و JavaScript و HTML و CSS و Bootstrap و REST APIs و Git، مع تركيز قوي على تحسين الأداء وإنشاء تجارب مستخدم سلسة. أقوم باستمرار بصقل مهاراتي وفقاً لمعايير الواجهة الأمامية الحديثة، معتقدة أن الكود الرائع يجب أن يكون وظيفياً وواضحاً وقابلاً للصيانة ومؤثراً.",
        ach1Title: "تدريب ITI الصيفي",
        ach1Desc: "إكمال تدريب مكثف في Angular وتطوير الويب الحديث.",
        ach2Title: "أكاديمية SEF",
        ach2Desc: "حاصلة على شهادة في تدريب تطوير الواجهات الأمامية.",
        eduHeader: "التعليم",
        eduDegree: "بكالوريوس الحاسبات وتكنولوجيا المعلومات",
        eduInstitution: "الجامعة المصرية للتعلم الإلكتروني (EELU)",
        eduMajor: "التخصص: تكنولوجيا المعلومات (IT)",
        eduProject: "مشروع التخرج: أبطال التوحد - تقدير ممتاز",
        eduGPA: "المعدل التراكمي: 3.45 / 4.0 (جيد جداً) مع مرتبة الشرف",
        certHeader: "الشهادات",
        cert0Name: "تطوير الويب المتكامل (Full-Stack)",
        cert0Inst: "مسار Digilians الاحترافي",
        cert0Date: "2026 - الحاضر",
        cert1Name: "تدريب React.js",
        cert1Inst: "شركة Web Masters",
        cert1Date: "يوليو 2025 - أغسطس 2025",
        cert1Desc: "تدريب على بناء تطبيقات ويب تفاعلية باستخدام React.",
        cert2Name: "تدريب تطوير الواجهات الأمامية",
        cert2Inst: "أكاديمية SEF",
        cert2Date: "2024",
        cert2Desc: "تدريب في HTML و CSS و JavaScript والتصميم الاستجابي.",
        cert3Name: "برنامج تدريب ITI الصيفي",
        cert3Inst: "معهد تكنولوجيا المعلومات (ITI)",
        cert3Date: "2024",
        cert3Desc: "تدريب على Angular وبناء تطبيقات قابلة للتوسع.",
        btnViewCert: "عرض الشهادة",
        tabFrontend: "واجهات أمامية",
        tabBackend: "واجهات خلفية",
        tabSoft: "المهارات الشخصية",
        tabTools: "الأدوات والتقنيات",
        tabLanguages: "اللغات",
        frontendDesc: "تصميم وتطوير تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام React.js، مع التركيز على البنية النظيفة، والكود القابل للصيانة، والتحسين، وتجربة المستخدم السلسة عبر الأجهزة.",
        backendDesc: "بناء خدمات خلفية آمنة وقابلة للتوسع باستخدام Node.js و Express.js، مع تنفيذ أنماط بنية منظمة وتكامل فعال لقواعد البيانات لضمان الموثوقية والأداء.",
        skillsTitle: "مهاراتي",
        servicesTitle: "خدماتي",
        service1Title: "تطوير واجهات المستخدم",
        service1Desc: "تصميم وبناء واجهات مستخدم حديثة واستجابية من المفهوم إلى التنفيذ، مع التركيز على سهولة الاستخدام والتصميم النظيف.",
        service2Title: "تطبيقات الويب",
        service2Desc: "بناء تطبيقات ويب كاملة الميزات باستخدام React و Node JS.",
        btnViewPricing: "عرض خطط التسعير",
        service3Title: "تطوير واجهات البرمجيات (API)",
        service3Desc: "تطوير واجهات برمجة تطبيقات RESTful آمنة وموثقة لتطبيقات الويب.",
        projectsTitle: "أبرز المشاريع",
        project1Title: "منصة التجارة الإلكترونية",
        project1Challenge: "بناء تطبيق تجارة إلكترونية قابل للتوسع وسهل الاستخدام مع تصفية ديناميكية للمنتجات وإدارة عربة التسوق",
        project1Action: "تطوير واجهة أمامية استجابية باستخدام React.js، وتنفيذ وظائف التصفية الديناميكية وعربة التسوق، ودمج واجهات برمجة تطبيقات REST للتعامل مع البيانات في الوقت الفعلي",
        project1Result: "تقديم منصة تجارة إلكترونية كاملة الوظائف مع تجربة مستخدم سلسة وإدارة فعالة للحالة",
        project2Title: "منصة أبطال التوحد",
        project2Challenge: "إنشاء منصة تفاعلية لدعم المستخدمين المصابين بالتوحد من خلال تقنيات الويب الحديثة والمساعدة القائمة على الذكاء الاصطناعي",
        project2Action: "تصميم وتطوير منصة ويب استجابية باستخدام React.js و Tailwind CSS، ودمج روبوت دردشة يعمل بالذكاء الاصطناعي لتعزيز دعم المستخدم وتفاعله",
        project2Result: "تقديم منصة ذكية وسهلة الاستخدام تعمل على تحسين إمكانية الوصول وتوفر مساعدة في الوقت الفعلي",
        btnVideo: "فيديو",
        btnCode: "كود",
        contactTitle: "تواصل معي",
        contactEmailLabel: "راسلني",
        contactPhoneLabel: "اتصل بي",
        contactLocationLabel: "الموقع",
        contactLocation: "الفيوم، مصر",
        contactWhatsappLabel: "واتساب",
        btnSendMessage: "إرسال الرسالة",
        footerCopyright: "© 2026 منة الله سليمان. جميع الحقوق محفوظة.",
        footerShyTitle: "لا تكن خجولاً!",
        footerShyText: "لا تتردد في التواصل معي. أنا متاح دائماً لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لأكون جزءاً من رؤيتك.",
        footerWhoTitle: "من أنا؟",
        footerWhoText: "أنا مطور وجهه اماميه (Front end) وشغوف بـ React.js، مخلص ومتفاني في عملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تطبيقات ويب سهلة الاستخدام وقابلة للتوسع تجعل مشروعك ناجحاً.",
        typingRoles: ["مطورة", "مهندسة", "شغوفة"],
        formSuccess: "✓ تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.",
        formError: "✗ فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى.",
        pricingTitle: "خطط الأسعار",
        pricingSubtitle: "اختر خطتك",
        pricingDesc: "لا توجد رسوم خفية. كل خطة مصممة لتقديم قيمة حقيقية - من صفحة هبوط بسيطة إلى تطبيق ويب كامل.",
        pricingBadge: "تسعير شفاف",
        pricingBanner: "تشمل جميع الخطط كوداً نظيفاً، وتصميماً استجابياً، ودعماً بعد الإطلاق. كمطور مبتدئ، أقدم أسعاراً معقولة لبناء معرض أعمالي مع تقديم عمل عالي الجودة.",
        planStarter: "البداية",
        planBalance: "التوازن",
        planProfessional: "الاحترافي",
        planCustom: "مخصص",
        planBasicTitle: "أساسي",
        planBalanceTitle: "متوازن",
        planProTitle: "برو",
        planTalkTitle: "دعنا نتحدث",
        planBasicDesc: "مثالي لمواقع الويب الثابتة البسيطة أو صفحات الهبوط الشخصية.",
        planBalanceDesc: "مثالي لمواقع الأعمال ذات المحتوى الديناميكي و React الأساسي.",
        planProDesc: "مشروع كامل (Full-stack) مع React و Node.js وقاعدة بيانات.",
        planTalkDesc: "حلول مخصصة للمشاريع المعقدة ذات المتطلبات المحددة.",
        priceProject: "/للمشروع",
        priceFlexible: "مرن",
        btnGetStarted: "ابدأ الآن",
        btnContactMe: "تواصل معي",
        backToPortfolio: "العودة للمعرض"
    }
};

// --- State Management ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// --- Skills Data ---
const skillsData = {
    frontend: [
        { name: "React.js", desc: "Hooks, Components, and advanced patterns.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML5", desc: "Semantic structure and modern web standards.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", desc: "Modern styling techniques and animations.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", desc: "Rapid UI development with robust grid systems.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind", desc: "Utility-first CSS framework for modern UIs.", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "JavaScript", desc: "Modern ES6+ syntax and asynchronous programming.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    backend: [
        { name: "Node.js", desc: "Scalable server-side JavaScript environment.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", desc: "Minimalist web framework for Node.js.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", desc: "Versatile language for backend and automation.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", desc: "Lightweight WSGI web application framework.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "REST APIs", desc: "Building secure and documented endpoints.", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
    ],
    tools: [
        { name: "VS Code", desc: "Primary code editor with custom extensions.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git & GitHub", desc: "Version control and collaborative workflow.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Chrome DevTools", desc: "Debugging and performance optimization.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
        { name: "Postman", desc: "API testing and documentation.", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", desc: "UI/UX design and prototyping.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "npm", desc: "Package management and build tools.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" }
    ],
    soft: [
        { name: "Problem Solving", desc: "Finding efficient solutions to complex issues.", icon: "lightbulb" },
        { name: "Communication", desc: "Clear and effective professional exchange.", icon: "message-square" },
        { name: "Teamwork", desc: "Collaborating effectively in group settings.", icon: "users" },
        { name: "Time Management", desc: "Prioritizing tasks and meeting deadlines.", icon: "clock" },
        { name: "Adaptability", desc: "Adjusting quickly to new environments.", icon: "refresh-cw" },
        { name: "Attention to Detail", desc: "Ensuring precision in every line of code.", icon: "search" },
        { name: "Continuous Learning", desc: "Staying updated with latest tech trends.", icon: "book-open" }
    ],
    languages: [
        { name: "Arabic", desc: "Native", icon: "star" },
        { name: "English", desc: "Good", icon: "check-circle" }
    ]
};

const skillsArData = {
    frontend: [
        { name: "React.js", desc: "Hooks و Components والأنماط المتقدمة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML5", desc: "الهيكل الدلالي ومعايير الويب الحديثة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", desc: "تقنيات التصميم الحديثة والرسوم المتحركة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", desc: "تطوير سريع لواجهة المستخدم مع أنظمة شبكية قوية.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind", desc: "إطار عمل CSS يركز على الأدوات لواجهات المستخدم الحديثة.", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "JavaScript", desc: "بناء جمل ES6+ الحديثة والبرمجة غير المتزامنة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    backend: [
        { name: "Node.js", desc: "بيئة JavaScript قابلة للتوسع من جانب الخادم.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", desc: "إطار عمل ويب بسيط لـ Node.js.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", desc: "لغة متعددة الاستخدامات للواجهة الخلفية والأتمتة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", desc: "إطار عمل تطبيق ويب WSGI خفيف الوزن.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "REST APIs", desc: "بناء نقاط نهاية آمنة وموثقة.", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
    ],
    tools: [
        { name: "VS Code", desc: "محرر الأكواد الأساسي مع ملحقات مخصصة.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git & GitHub", desc: "التحكم في الإصدارات وسير العمل التعاوني.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Chrome DevTools", desc: "تصحيح الأخطاء وتحسين الأداء.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
        { name: "Postman", desc: "اختبار وتوثيق واجهات برمجة التطبيقات.", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", desc: "تصميم واجهة المستخدم والنماذج الأولية.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "npm", desc: "إدارة الحزم وأدوات البناء.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" }
    ],
    soft: [
        { name: "حل المشكلات", desc: "إيجاد حلول فعالة للقضايا المعقدة.", icon: "lightbulb" },
        { name: "التواصل", desc: "تبادل مهني واضح وفعال.", icon: "message-square" },
        { name: "العمل الجماعي", desc: "التعاون بفعالية في بيئات المجموعة.", icon: "users" },
        { name: "إدارة الوقت", desc: "تحديد أولويات المهام والالتزام بالمواعيد.", icon: "clock" },
        { name: "التكيف", desc: "التكيف بسرعة مع البيئات الجديدة.", icon: "refresh-cw" },
        { name: "الاهتمام بالتفاصيل", desc: "ضمان الدقة في كل سطر من الأكواد.", icon: "search" },
        { name: "التعلم المستمر", desc: "البقاء على اطلاع بأحدث اتجاهات التكنولوجيا.", icon: "book-open" }
    ],
    languages: [
        { name: "العربية", desc: "اللغة الأم", icon: "star" },
        { name: "الإنجليزية", desc: "جيد", icon: "check-circle" }
    ]
};

// --- DOM Elements ---
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const typingElement = document.getElementById('typing-text');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const scrollTopBtn = document.getElementById('scroll-top');
const skillsContainer = document.getElementById('skills-container');
const tabBtns = document.querySelectorAll('.tab-btn');

// ==================== CONTACT FORM - FormSubmit Method (Working) ====================
// This sends emails directly to mennasoliman592003@gmail.com using FormSubmit

if (contactForm) {
    // Set the form action dynamically to FormSubmit
    contactForm.action = 'https://formsubmit.co/mennasoliman592003@gmail.com';
    contactForm.method = 'POST';
    
    // Add required hidden fields if they don't exist
    if (!contactForm.querySelector('input[name="_subject"]')) {
        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'New message from Menna\'s Portfolio!';
        contactForm.appendChild(subjectInput);
    }
    
    if (!contactForm.querySelector('input[name="_captcha"]')) {
        const captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = '_captcha';
        captchaInput.value = 'false';
        contactForm.appendChild(captchaInput);
    }
    
    if (!contactForm.querySelector('input[name="_template"]')) {
        const templateInput = document.createElement('input');
        templateInput.type = 'hidden';
        templateInput.name = '_template';
        templateInput.value = 'table';
        contactForm.appendChild(templateInput);
    }
    
    contactForm.addEventListener('submit', async function(e) {
        // Don't prevent default - let FormSubmit handle the submission
        // But we'll show a loading state
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const loadingText = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
        
        submitBtn.textContent = loadingText;
        submitBtn.disabled = true;
        
        if (formStatus) {
            formStatus.style.color = '#f59e0b';
            formStatus.textContent = currentLang === 'en' ? 'Sending message...' : 'جاري إرسال الرسالة...';
            formStatus.style.display = 'block';
        }
        
        // The form will submit naturally to FormSubmit
        // FormSubmit will redirect to a success page
        // Note: You won't see the success message on the same page because of redirect
    });
}

// Helper functions for form validation (optional, kept for compatibility)
function showFormError(input, message) {
    input.classList.add('is-invalid');
    input.style.borderColor = '#ef4444';
    
    let errorDiv = input.parentElement.querySelector('.form-error-msg');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-msg';
        errorDiv.style.cssText = 'color: #ef4444; font-size: 0.75rem; margin-top: 0.25rem;';
        input.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFormError(input) {
    input.classList.remove('is-invalid');
    input.style.borderColor = '';
    const errorDiv = input.parentElement.querySelector('.form-error-msg');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearAllFormErrors() {
    document.querySelectorAll('.is-invalid').forEach(input => {
        input.classList.remove('is-invalid');
        input.style.borderColor = '';
    });
    document.querySelectorAll('.form-error-msg').forEach(error => {
        error.remove();
    });
}

function showFormNotification(type, message) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.style.color = type === 'success' ? '#10b981' : '#ef4444';
    formStatus.style.display = 'block';
    
    setTimeout(() => {
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.style.display = 'none';
        }
    }, 5000);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set initial theme
    applyTheme(currentTheme);
    
    // Set initial language
    applyLanguage(currentLang);
    
    // Render initial skills
    if (skillsContainer) {
        renderSkills('frontend');
    }
    
    // Start typing animation if element exists
    if (typingElement) {
        startTypingAnimation();
    }
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Tab switching logic
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                
                // Update active button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Render skills with professional staggered animation
                if (skillsContainer) {
                    skillsContainer.innerHTML = '';
                    renderSkills(tab);
                }
            });
        });
    }
});

function renderSkills(category) {
    const data = currentLang === 'en' ? skillsData[category] : skillsArData[category];
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    // Add category description if it exists
    const descKey = `${category}Desc`;
    if (translations[currentLang][descKey]) {
        const descDiv = document.createElement('div');
        descDiv.className = 'skills-category-desc';
        descDiv.textContent = translations[currentLang][descKey];
        skillsContainer.appendChild(descDiv);
    }
    
    data.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = `skill-card ${category}-card ${category === 'languages' ? 'language-card' : ''}`;
        card.style.opacity = '0';
        
        let iconHtml = '';
        if (skill.icon.startsWith('http')) {
            iconHtml = `<img src="${skill.icon}" alt="${skill.name}">`;
        } else {
            iconHtml = `<i data-lucide="${skill.icon}"></i>`;
        }
        
        const showDesc = category === 'languages';
        
        card.innerHTML = `
            <div class="skill-icon-wrapper">
                ${iconHtml}
            </div>
            <h3>${skill.name}</h3>
            ${showDesc ? `<p>${skill.desc}</p>` : ''}
        `;
        
        setTimeout(() => {
            card.classList.add('animate-card');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, index * 100);
        
        skillsContainer.appendChild(card);
    });
}

// --- Theme Logic ---
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
}

// --- Language Logic ---
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
        
        // Restart typing animation with new language
        startTypingAnimation();
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (key === 'aboutText2') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Re-render skills to update language
    if (skillsContainer) {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        if (activeTabBtn) {
            const activeTab = activeTabBtn.getAttribute('data-tab');
            renderSkills(activeTab);
        }
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Update placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput && emailInput && messageInput) {
        if (lang === 'ar') {
            nameInput.placeholder = "اسمك";
            emailInput.placeholder = "بريدك الإلكتروني";
            messageInput.placeholder = "رسالتك";
        } else {
            nameInput.placeholder = "Your Name";
            emailInput.placeholder = "Your Email";
            messageInput.placeholder = "Your Message";
        }
    }
    
    // Update submit button text
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = translations[lang].btnSendMessage;
    }
}

// --- Typing Animation ---
let typingInterval;
function startTypingAnimation() {
    if (!typingElement) return;
    if (typingInterval) clearTimeout(typingInterval);
    
    const roles = translations[currentLang].typingRoles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        if (!typingElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        typingInterval = setTimeout(type, typeSpeed);
    }
    
    type();
}

// --- Navbar Logic ---
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Scroll Effects
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') && item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Intersection Observer for Animations ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .stagger-container, .info-card, .service-card, .project-card-v2, .skill-item'
    );
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize Lucide icons if available
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}