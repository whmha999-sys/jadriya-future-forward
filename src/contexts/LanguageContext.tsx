import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "nav.aljadriya": { en: "AL-JADRIYA", ar: "الجادرية" },
  "nav.engineering": { en: "Engineering", ar: "للهندسة" },

  // Hero slides
  "hero.slide1.label": { en: "OIL & GAS INFRASTRUCTURE", ar: "البنية التحتية للنفط والغاز" },
  "hero.slide1.heading": { en: "Built for the Field.\nEngineered to Last.", ar: "بُنيت للميدان.\nصُممت لتدوم." },
  "hero.slide1.tab": { en: "Oil & Gas", ar: "النفط والغاز" },
  "hero.slide2.label": { en: "MEDICAL ENGINEERING", ar: "الهندسة الطبية" },
  "hero.slide2.heading": { en: "Engineering Better\nHealthcare", ar: "هندسة رعاية\nصحية أفضل" },
  "hero.slide2.tab": { en: "Medical", ar: "الطبية" },
  "hero.slide3.label": { en: "ROBOTICS & AI", ar: "الروبوتات والذكاء الاصطناعي" },
  "hero.slide3.heading": { en: "Shaping the\nNext Generation", ar: "نصنع\nالجيل القادم" },
  "hero.slide3.tab": { en: "Robotics", ar: "الروبوتات" },
  "hero.slide4.label": { en: "CLEAN ENERGY", ar: "الطاقة النظيفة" },
  "hero.slide4.heading": { en: "Powering a\nCleaner Future", ar: "نمد الطاقة\nلمستقبل أنظف" },
  "hero.slide4.tab": { en: "Energy", ar: "الطاقة" },
  "hero.learnMore": { en: "Learn More", ar: "اعرف المزيد" },

  // About Section
  "about.label": { en: "Welcome to AL-JADRIYA Engineering", ar: "مرحباً بكم في الجادرية للهندسة" },
  "about.heading": { en: "Leading in engineering, education, and innovation", ar: "رائدون في الهندسة والتعليم والابتكار" },
  "about.text": { en: "We are an integrated engineering and educational technology company, serving Jordan, Iraq, and the wider region. From complex engineering consultancy to world-class AI and robotics training programs, we build the future on two fronts.", ar: "نحن شركة هندسية وتكنولوجيا تعليمية متكاملة، نخدم الأردن والعراق والمنطقة الأوسع. من الاستشارات الهندسية المعقدة إلى برامج تدريب الذكاء الاصطناعي والروبوتات على مستوى عالمي، نبني المستقبل على جبهتين." },
  "about.stat1.number": { en: "2", ar: "٢" },
  "about.stat1.label": { en: "Specialized Divisions", ar: "أقسام متخصصة" },
  "about.stat2.number": { en: "2", ar: "٢" },
  "about.stat2.label": { en: "Countries: Jordan & Iraq", ar: "الدول: الأردن والعراق" },
  "about.stat3.number": { en: "6", ar: "٦" },
  "about.stat3.label": { en: "Regional Markets", ar: "أسواق إقليمية" },
  "about.stat4.number": { en: "101+", ar: "+١٠١" },
  "about.stat4.label": { en: "Projects & Programs Delivered", ar: "مشاريع وبرامج منجزة" },

  // Values Section
  "values.heading": { en: "VALUES", ar: "قيمنا" },
  "values.1": { en: "Operational excellence", ar: "التميز التشغيلي" },
  "values.2": { en: "Tireless experimentation for innovative business solutions", ar: "التجريب الدؤوب لحلول أعمال مبتكرة" },
  "values.3": { en: "Open and respectful working environment", ar: "بيئة عمل منفتحة ومحترمة" },
  "values.4": { en: "Trustworthiness in all business relationships", ar: "الموثوقية في جميع العلاقات التجارية" },
  "values.5": { en: "Highest ethical standards", ar: "أعلى المعايير الأخلاقية" },
  "values.6": { en: "Sustainable financial strength", ar: "قوة مالية مستدامة" },

  // Divisions Section
  "divisions.heading": { en: "Our Divisions & Services", ar: "أقسامنا وخدماتنا" },
  "divisions.learnMore": { en: "Learn More", ar: "اعرف المزيد" },
  "divisions.1.title": { en: "Engineering Consultancy Division", ar: "قسم الاستشارات الهندسية" },
  "divisions.1.desc": { en: "Comprehensive engineering consultancy across medical facilities, industrial pipelines, infrastructure, and turnkey projects, serving public and private sector clients across Jordan and Iraq.", ar: "استشارات هندسية شاملة عبر المرافق الطبية وخطوط الأنابيب الصناعية والبنية التحتية والمشاريع المتكاملة، لخدمة عملاء القطاعين العام والخاص في الأردن والعراق." },
  "divisions.2.title": { en: "Educational Technology Division", ar: "قسم التكنولوجيا التعليمية" },
  "divisions.2.desc": { en: "World-class robotics, programming, and AI training programs delivered to schools, professionals, and career-shifters, in-person and online.", ar: "برامج تدريب روبوتات وبرمجة وذكاء اصطناعي على مستوى عالمي تُقدم للمدارس والمهنيين والمتحولين مهنياً، حضورياً وعبر الإنترنت." },
  "divisions.3.title": { en: "Equipment Supply & Tenders", ar: "توريد المعدات والمناقصات" },
  "divisions.3.desc": { en: "Full capability to supply technical equipment, manage government tenders, and place trained graduates into the workforce.", ar: "قدرة كاملة على توريد المعدات التقنية وإدارة المناقصات الحكومية وتوظيف الخريجين المدربين." },
  "divisions.4.title": { en: "International Partnerships", ar: "الشراكات الدولية" },
  "divisions.4.desc": { en: "Backed by established relationships with leading international partners, operating across Jordan, Iraq, UAE, KSA, Egypt, and Libya.", ar: "مدعومة بعلاقات راسخة مع شركاء دوليين رائدين، تعمل عبر الأردن والعراق والإمارات والسعودية ومصر وليبيا." },

  // Finder Section
  "finder.label": { en: "Find the right solution for your needs", ar: "اعثر على الحل المناسب لاحتياجاتك" },
  "finder.heading": { en: "I'm looking for", ar: "أبحث عن" },
  "finder.cta": { en: "Explore Solutions", ar: "استكشف الحلول" },
  "finder.sol1": { en: "engineering consultancy", ar: "استشارات هندسية" },
  "finder.sol2": { en: "robotics training programs", ar: "برامج تدريب الروبوتات" },
  "finder.sol3": { en: "AI workforce solutions", ar: "حلول القوى العاملة بالذكاء الاصطناعي" },
  "finder.sol4": { en: "project management", ar: "إدارة المشاريع" },
  "finder.sol5": { en: "equipment supply", ar: "توريد المعدات" },

  // Vision Section
  "vision.heading": { en: "Our Vision for the Region", ar: "رؤيتنا للمنطقة" },
  "vision.text": { en: "Since its founding, AL-JADRIYA Engineering has been guided by a firm philosophy: a company's greatest asset is the trust it builds with its clients, partners, trainees, and community. We aim to be the most trusted engineering and education provider in the Middle East.", ar: "منذ تأسيسها، تسترشد الجادرية للهندسة بفلسفة راسخة: أعظم أصول الشركة هي الثقة التي تبنيها مع عملائها وشركائها ومتدربيها ومجتمعها. نسعى لأن نكون أكثر مزودي الهندسة والتعليم ثقةً في الشرق الأوسط." },
  "vision.cta": { en: "Learn More", ar: "اعرف المزيد" },

  // Who We Serve
  "serve.label": { en: "WHO WE SERVE", ar: "من نخدم" },
  "serve.heading": { en: "Engineering Solutions Across Key Industries", ar: "حلول هندسية عبر الصناعات الرئيسية" },
  "serve.text": { en: "From oil fields to operating rooms, AL-JADRIYA GROUP delivers specialized expertise across four critical sectors in Jordan, Iraq, Egypt and beyond.", ar: "من حقول النفط إلى غرف العمليات، تقدم مجموعة الجادرية خبرة متخصصة عبر أربعة قطاعات حيوية في الأردن والعراق ومصر وغيرها." },
  "serve.cta": { en: "Explore Our Companies", ar: "استكشف شركاتنا" },

  // Company Cards
  "cards.label": { en: "OUR COMPANIES", ar: "شركاتنا" },
  "cards.oilgas.label": { en: "OIL & GAS", ar: "النفط والغاز" },
  "cards.oilgas.headline": { en: "Supply. Drill. Deliver.", ar: "نورّد. نحفر. نُسلّم." },
  "cards.medical.label": { en: "MEDICAL", ar: "الطبية" },
  "cards.medical.headline": { en: "From Equipment to Full Hospitals.", ar: "من المعدات إلى مستشفيات متكاملة." },
  "cards.robotics.label": { en: "ROBOTICS & AI", ar: "الروبوتات والذكاء الاصطناعي" },
  "cards.robotics.headline": { en: "Tomorrow's Engineers, Today.", ar: "مهندسو الغد، اليوم." },
  "cards.energy.label": { en: "ENERGY", ar: "الطاقة" },
  "cards.energy.headline": { en: "Coming Soon.", ar: "قريباً." },

  // Specializations
  "spec.label": { en: "OUR SPECIALIZATIONS", ar: "تخصصاتنا" },
  "spec.tab.oilgas": { en: "Oil & Gas", ar: "النفط والغاز" },
  "spec.tab.medical": { en: "Medical", ar: "الطبية" },
  "spec.tab.robotics": { en: "Robotics", ar: "الروبوتات" },
  "spec.tab.energy": { en: "Energy", ar: "الطاقة" },
  "spec.og.1": { en: "Oil & Gas Pipes Supply", ar: "توريد أنابيب النفط والغاز" },
  "spec.og.2": { en: "Drilling Equipment", ar: "معدات الحفر" },
  "spec.og.3": { en: "Exploration Requirements", ar: "متطلبات الاستكشاف" },
  "spec.og.4": { en: "T.C Equipment & Inspection", ar: "معدات وتفتيش" },
  "spec.og.5": { en: "Underground Infrastructure", ar: "البنية التحتية تحت الأرض" },
  "spec.med.1": { en: "Biomedical Engineering", ar: "الهندسة الطبية الحيوية" },
  "spec.med.2": { en: "Hospital Equipment Supply", ar: "توريد معدات المستشفيات" },
  "spec.med.3": { en: "Capacity Management", ar: "إدارة السعة" },
  "spec.med.4": { en: "Turnkey Medical Projects", ar: "مشاريع طبية متكاملة" },
  "spec.med.5": { en: "Medical Tender Management", ar: "إدارة المناقصات الطبية" },
  "spec.rob.1": { en: "Robotics for Schools", ar: "الروبوتات للمدارس" },
  "spec.rob.2": { en: "AI & Programming", ar: "الذكاء الاصطناعي والبرمجة" },
  "spec.rob.3": { en: "Robotics Equipment Supply", ar: "توريد معدات الروبوتات" },
  "spec.rob.4": { en: "Corporate Training", ar: "تدريب الشركات" },
  "spec.en.1": { en: "Clean Energy Manufacturing", ar: "تصنيع الطاقة النظيفة" },
  "spec.en.2": { en: "Wind Energy", ar: "طاقة الرياح" },
  "spec.en.3": { en: "Solar Solutions", ar: "حلول الطاقة الشمسية" },

  // Footer
  "footer.tagline": { en: "Advanced Engineering Technology Group", ar: "مجموعة التكنولوجيا الهندسية المتقدمة" },
  "footer.companies": { en: "Our Companies", ar: "شركاتنا" },
  "footer.oilgas": { en: "Oil & Gas", ar: "النفط والغاز" },
  "footer.medical": { en: "Medical", ar: "الطبية" },
  "footer.robotics": { en: "Robotics", ar: "الروبوتات" },
  "footer.energy": { en: "Energy", ar: "الطاقة" },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.careers": { en: "Careers", ar: "الوظائف" },
  "footer.ourOffices": { en: "Our Offices", ar: "مكاتبنا" },
  "footer.offices": { en: "Our Offices", ar: "مكاتبنا" },
  "footer.amman": { en: "Amman, Jordan", ar: "عمّان، الأردن" },
  "footer.ammanAddr": { en: "Wasfi Al-Tal St, Building 124", ar: "شارع وصفي التل، مبنى 124" },
  "footer.tikrit": { en: "Tikrit, Iraq", ar: "تكريت، العراق" },
  "footer.tikritAddr": { en: "Main Street opposite Governorate Building, Salah al-Din", ar: "الشارع الرئيسي مقابل مبنى المحافظة، صلاح الدين" },
  "footer.hq": { en: "Headquarters", ar: "المقر الرئيسي" },
  "footer.baghdad": { en: "Baghdad, Iraq", ar: "بغداد، العراق" },
  "footer.branch": { en: "Branch Office", ar: "مكتب فرعي" },
  "footer.email": { en: "Email", ar: "البريد الإلكتروني" },
  "footer.helpTitle": { en: "Here to help you", ar: "هنا لمساعدتك" },
  "footer.helpText": { en: "Any questions? We'd love to hear from you.", ar: "أي أسئلة؟ يسعدنا سماعك." },
  "footer.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "footer.terms": { en: "Terms & Conditions", ar: "الشروط والأحكام" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.rights": { en: "© 2026 AL-JADRIYA GROUP. All rights reserved.", ar: "© ٢٠٢٦ مجموعة الجادرية. جميع الحقوق محفوظة." },
  "footer.engConsultancy": { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" },
  "footer.eduTech": { en: "Educational Technology", ar: "التكنولوجيا التعليمية" },
  "footer.equipSupply": { en: "Equipment Supply", ar: "توريد المعدات" },
  "footer.aboutUs": { en: "About Us", ar: "من نحن" },

  // MegaMenu
  "menu.engConsultancy": { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" },
  "menu.eduTech": { en: "Educational Technology", ar: "التكنولوجيا التعليمية" },
  "menu.equipSupply": { en: "Equipment Supply", ar: "توريد المعدات" },
  "menu.aboutUs": { en: "About Us", ar: "من نحن" },
  "menu.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "menu.projectPlanning": { en: "Project Planning", ar: "تخطيط المشاريع" },
  "menu.feasibilityStudies": { en: "Feasibility Studies", ar: "دراسات الجدوى" },
  "menu.medicalEngConsultancy": { en: "Medical Engineering Consultancy", ar: "استشارات الهندسة الطبية" },
  "menu.technicalDesign": { en: "Technical Design", ar: "التصميم التقني" },
  "menu.procurement": { en: "Procurement", ar: "المشتريات" },
  "menu.turnkeyProjects": { en: "Turnkey Projects", ar: "مشاريع متكاملة" },
  "menu.siteSurveys": { en: "Site Surveys", ar: "المسح الميداني" },
  "menu.roboticsPrograms": { en: "Robotics Programs", ar: "برامج الروبوتات" },
  "menu.aiTraining": { en: "AI Training", ar: "تدريب الذكاء الاصطناعي" },
  "menu.schoolPartnerships": { en: "School Partnerships", ar: "شراكات المدارس" },
  "menu.onlineCourses": { en: "Online Courses", ar: "دورات عبر الإنترنت" },
  "menu.corporateTraining": { en: "Corporate Training", ar: "تدريب الشركات" },
  "menu.industrialEquipment": { en: "Industrial Equipment", ar: "معدات صناعية" },
  "menu.medicalEquipment": { en: "Medical Equipment", ar: "معدات طبية" },
  "menu.educationalTechnology": { en: "Educational Technology", ar: "تكنولوجيا تعليمية" },
  "menu.constructionMaterials": { en: "Construction Materials", ar: "مواد البناء" },
  "menu.tenderManagement": { en: "Tender Management", ar: "إدارة المناقصات" },
  "menu.afterSalesSupport": { en: "After-Sales Support", ar: "دعم ما بعد البيع" },
  "menu.ourStory": { en: "Our Story", ar: "قصتنا" },
  "menu.leadership": { en: "Leadership", ar: "القيادة" },
  "menu.careers": { en: "Careers", ar: "الوظائف" },
  "menu.newsroom": { en: "Newsroom", ar: "غرفة الأخبار" },
  "menu.ammanOffice": { en: "Amman Office", ar: "مكتب عمّان" },
  "menu.baghdadOffice": { en: "Baghdad Office", ar: "مكتب بغداد" },
  "menu.generalInquiries": { en: "General Inquiries", ar: "استفسارات عامة" },

  // Contact page
  "contact.heroLabel": { en: "We'd Love To Hear From You", ar: "يسعدنا سماعك" },
  "contact.heroHeading": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.offices": { en: "Our Offices", ar: "مكاتبنا" },
  "contact.amman": { en: "Amman, Jordan", ar: "عمّان، الأردن" },
  "contact.hq": { en: "Headquarters", ar: "المقر الرئيسي" },
  "contact.baghdad": { en: "Baghdad, Iraq", ar: "بغداد، العراق" },
  "contact.branch": { en: "Branch Office", ar: "مكتب فرعي" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.followUs": { en: "Follow Us", ar: "تابعنا" },
  "contact.fullName": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.fullNamePlaceholder": { en: "Your full name", ar: "اسمك الكامل" },
  "contact.emailAddress": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.emailPlaceholder": { en: "you@example.com", ar: "you@example.com" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.phonePlaceholder": { en: "+962 7XX XXX XXX", ar: "+٩٦٢ ٧XX XXX XXX" },
  "contact.subject": { en: "Subject", ar: "الموضوع" },
  "contact.subjectPlaceholder": { en: "Select a subject", ar: "اختر موضوعاً" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.messagePlaceholder": { en: "Tell us about your project or inquiry...", ar: "أخبرنا عن مشروعك أو استفسارك..." },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.subjectEngConsultancy": { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" },
  "contact.subjectEduTech": { en: "Educational Technology", ar: "التكنولوجيا التعليمية" },
  "contact.subjectEquipSupply": { en: "Equipment Supply", ar: "توريد المعدات" },
  "contact.subjectGeneral": { en: "General Inquiry", ar: "استفسار عام" },

  // Engineering Consultancy page
  "eng.heroLabel": { en: "Engineering Consultancy Division", ar: "قسم الاستشارات الهندسية" },
  "eng.heroH1": { en: "Built to Last.", ar: "بُنيت لتدوم." },
  "eng.heroH2": { en: "Engineered to Excel.", ar: "صُممت للتميز." },
  "eng.whatWeDo": { en: "What We Do", ar: "ما نقوم به" },
  "eng.heading": { en: "Comprehensive Engineering Solutions", ar: "حلول هندسية شاملة" },
  "eng.text": { en: "AL-JADRIYA Engineering Consultancy Division delivers end-to-end technical solutions across multiple sectors. From initial feasibility studies to full project execution, our qualified team of engineers ensures every project meets the highest standards of quality and safety.", ar: "يقدم قسم الاستشارات الهندسية في الجادرية حلولاً تقنية متكاملة عبر قطاعات متعددة. من دراسات الجدوى الأولية إلى التنفيذ الكامل للمشاريع، يضمن فريقنا المؤهل من المهندسين أن كل مشروع يلبي أعلى معايير الجودة والسلامة." },
  "eng.whatWeOffer": { en: "What We Offer", ar: "ما نقدمه" },
  "eng.ourServices": { en: "Our Services", ar: "خدماتنا" },
  "eng.feasibility": { en: "Feasibility Studies", ar: "دراسات الجدوى" },
  "eng.feasibilityDesc": { en: "In-depth technical and financial analysis before project launch.", ar: "تحليل تقني ومالي معمق قبل إطلاق المشروع." },
  "eng.projectDesign": { en: "Project Design", ar: "تصميم المشاريع" },
  "eng.projectDesignDesc": { en: "Complete architectural and engineering design solutions.", ar: "حلول تصميم معماري وهندسي متكاملة." },
  "eng.procurement": { en: "Procurement", ar: "المشتريات" },
  "eng.procurementDesc": { en: "Strategic sourcing of equipment and materials from trusted suppliers.", ar: "توريد استراتيجي للمعدات والمواد من موردين موثوقين." },
  "eng.pipeline": { en: "Pipeline Engineering", ar: "هندسة خطوط الأنابيب" },
  "eng.pipelineDesc": { en: "Design and execution of industrial pipeline systems.", ar: "تصميم وتنفيذ أنظمة خطوط الأنابيب الصناعية." },
  "eng.medical": { en: "Medical Facility Engineering", ar: "هندسة المرافق الطبية" },
  "eng.medicalDesc": { en: "Specialized consultancy for hospitals and healthcare infrastructure.", ar: "استشارات متخصصة للمستشفيات والبنية التحتية الصحية." },
  "eng.turnkey": { en: "Turnkey Projects", ar: "مشاريع متكاملة" },
  "eng.turnkeyDesc": { en: "Full project management from concept to handover.", ar: "إدارة كاملة للمشاريع من المفهوم إلى التسليم." },
  "eng.whyChoose": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "eng.provenTrack": { en: "Proven Track Record", ar: "سجل حافل بالإنجازات" },
  "eng.countries": { en: "Countries", ar: "الدول" },
  "eng.markets": { en: "Markets", ar: "الأسواق" },
  "eng.yearsExp": { en: "Years Experience", ar: "سنوات الخبرة" },
  "eng.projectsDelivered": { en: "Projects Delivered", ar: "مشاريع منجزة" },
  "eng.visionHeading": { en: "Your Project, Our Commitment", ar: "مشروعك، التزامنا" },
  "eng.visionText": { en: "We combine deep regional knowledge with international engineering standards to deliver projects that stand the test of time. Every client, every project, every sector, we bring the same level of dedication and precision.", ar: "نجمع بين المعرفة الإقليمية العميقة والمعايير الهندسية الدولية لتقديم مشاريع تصمد أمام اختبار الزمن. كل عميل، كل مشروع، كل قطاع، نقدم نفس المستوى من التفاني والدقة." },
  "eng.contactUs": { en: "Contact Us", ar: "تواصل معنا" },

  // Educational Technology page
  "edu.heroLabel": { en: "Educational Technology Division", ar: "قسم التكنولوجيا التعليمية" },
  "edu.heroH1": { en: "Shaping the", ar: "نصنع" },
  "edu.heroH2": { en: "Next Generation.", ar: "الجيل القادم." },
  "edu.whoWeServe": { en: "Who We Serve", ar: "من نخدم" },
  "edu.heading": { en: "World-Class Training for the AI Era", ar: "تدريب عالمي المستوى لعصر الذكاء الاصطناعي" },
  "edu.text": { en: "AL-JADRIYA Educational Technology Division equips schools, professionals, and career-shifters with the skills demanded by tomorrow's economy. Through robotics, programming, and AI programs delivered in-person and online, we build the workforce of the future.", ar: "يزود قسم التكنولوجيا التعليمية في الجادرية المدارس والمهنيين والمتحولين مهنياً بالمهارات التي يتطلبها اقتصاد الغد. من خلال برامج الروبوتات والبرمجة والذكاء الاصطناعي المقدمة حضورياً وعبر الإنترنت، نبني قوة عمل المستقبل." },
  "edu.whatWeOffer": { en: "What We Offer", ar: "ما نقدمه" },
  "edu.ourPrograms": { en: "Our Programs", ar: "برامجنا" },
  "edu.roboticsSchools": { en: "Robotics for Schools", ar: "الروبوتات للمدارس" },
  "edu.roboticsSchoolsDesc": { en: "Curriculum-aligned robotics programs delivered directly to schools.", ar: "برامج روبوتات متوافقة مع المناهج تُقدم مباشرة للمدارس." },
  "edu.aiProgramming": { en: "AI & Programming", ar: "الذكاء الاصطناعي والبرمجة" },
  "edu.aiProgrammingDesc": { en: "Hands-on coding and artificial intelligence courses for all levels.", ar: "دورات عملية في البرمجة والذكاء الاصطناعي لجميع المستويات." },
  "edu.upskilling": { en: "Professional Upskilling", ar: "تطوير المهارات المهنية" },
  "edu.upskillingDesc": { en: "Advanced training for IT professionals entering the AI economy.", ar: "تدريب متقدم لمحترفي تكنولوجيا المعلومات الداخلين لاقتصاد الذكاء الاصطناعي." },
  "edu.womenInTech": { en: "Women in Tech", ar: "المرأة في التكنولوجيا" },
  "edu.womenInTechDesc": { en: "Dedicated programs supporting women entering or transitioning into technology careers.", ar: "برامج مخصصة لدعم النساء الداخلات أو المنتقلات إلى المهن التقنية." },
  "edu.corporateTraining": { en: "Corporate Training", ar: "تدريب الشركات" },
  "edu.corporateTrainingDesc": { en: "Custom training solutions designed for institutions and organizations at scale.", ar: "حلول تدريب مخصصة مصممة للمؤسسات والمنظمات على نطاق واسع." },
  "edu.onlineLearning": { en: "Online Learning", ar: "التعلم عبر الإنترنت" },
  "edu.onlineLearningDesc": { en: "Flexible online programs accessible from anywhere in the region.", ar: "برامج مرنة عبر الإنترنت يمكن الوصول إليها من أي مكان في المنطقة." },
  "edu.ourImpact": { en: "Our Impact", ar: "أثرنا" },
  "edu.makingDifference": { en: "Making a Difference", ar: "نصنع الفارق" },
  "edu.countries": { en: "Countries", ar: "الدول" },
  "edu.markets": { en: "Markets", ar: "الأسواق" },
  "edu.graduates": { en: "Graduates", ar: "الخريجون" },
  "edu.schoolPartners": { en: "School Partners", ar: "شركاء المدارس" },
  "edu.trainingCenter": { en: "A Fully Equipped Training Center", ar: "مركز تدريب مجهز بالكامل" },
  "edu.trainingText": { en: "Our training center in Amman features prepared classrooms, certified trainers, and complete technical infrastructure. We deliver programs both in-person and online, serving schools, professionals, and institutions across the region.", ar: "يتميز مركزنا التدريبي في عمّان بفصول دراسية مجهزة ومدربين معتمدين وبنية تحتية تقنية متكاملة. نقدم البرامج حضورياً وعبر الإنترنت، لخدمة المدارس والمهنيين والمؤسسات في جميع أنحاء المنطقة." },
  "edu.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "edu.whoCanJoin": { en: "Who Can Join", ar: "من يمكنه الانضمام" },
  "edu.whoIsThisFor": { en: "Who Is This For?", ar: "لمن هذا؟" },
  "edu.schools": { en: "Schools", ar: "المدارس" },
  "edu.schoolsDesc": { en: "Curriculum-aligned robotics and AI programs for students of all ages.", ar: "برامج روبوتات وذكاء اصطناعي متوافقة مع المناهج لطلاب جميع الأعمار." },
  "edu.itProfessionals": { en: "IT Professionals", ar: "محترفو تكنولوجيا المعلومات" },
  "edu.itProfessionalsDesc": { en: "Advance your career into artificial intelligence and automation.", ar: "طوّر مسيرتك المهنية نحو الذكاء الاصطناعي والأتمتة." },
  "edu.womenInTechAudience": { en: "Women in Tech", ar: "المرأة في التكنولوجيا" },
  "edu.womenInTechAudienceDesc": { en: "Start or transition your career into the technology sector.", ar: "ابدئي أو انتقلي بمسيرتك المهنية إلى قطاع التكنولوجيا." },
  "edu.institutions": { en: "Institutions", ar: "المؤسسات" },
  "edu.institutionsDesc": { en: "Large-scale training solutions for organizations and government bodies.", ar: "حلول تدريب واسعة النطاق للمنظمات والهيئات الحكومية." },

  // Equipment Supply page
  "equip.heroLabel": { en: "Equipment Supply & Tenders", ar: "توريد المعدات والمناقصات" },
  "equip.heroH1": { en: "The Right Equipment.", ar: "المعدات المناسبة." },
  "equip.heroH2": { en: "Delivered on Time.", ar: "تُسلّم في الوقت المحدد." },
  "equip.whatWeDo": { en: "What We Do", ar: "ما نقوم به" },
  "equip.heading": { en: "End-to-End Equipment Supply Solutions", ar: "حلول توريد معدات متكاملة" },
  "equip.text": { en: "AL-JADRIYA Engineering provides comprehensive equipment supply services for engineering, industrial, medical, and educational technology projects. We manage the full procurement cycle, from sourcing and tendering to delivery and after-sales support, ensuring our clients receive the right equipment at the right time.", ar: "توفر الجادرية للهندسة خدمات شاملة لتوريد المعدات لمشاريع الهندسة والصناعة والطب والتكنولوجيا التعليمية. ندير دورة الشراء الكاملة، من التوريد والمناقصات إلى التسليم ودعم ما بعد البيع." },
  "equip.whatWeOffer": { en: "What We Offer", ar: "ما نقدمه" },
  "equip.whatWeSupply": { en: "What We Supply", ar: "ما نورّده" },
  "equip.industrial": { en: "Industrial Equipment", ar: "معدات صناعية" },
  "equip.industrialDesc": { en: "Heavy machinery and industrial tools for infrastructure and pipeline projects.", ar: "آلات ثقيلة وأدوات صناعية لمشاريع البنية التحتية وخطوط الأنابيب." },
  "equip.medical": { en: "Medical Equipment", ar: "معدات طبية" },
  "equip.medicalDesc": { en: "Specialized medical devices and hospital infrastructure equipment.", ar: "أجهزة طبية متخصصة ومعدات البنية التحتية للمستشفيات." },
  "equip.eduTech": { en: "Educational Technology", ar: "تكنولوجيا تعليمية" },
  "equip.eduTechDesc": { en: "Robotics kits, coding hardware, and AI learning tools for schools and training centers.", ar: "مجموعات الروبوتات وأجهزة البرمجة وأدوات تعلم الذكاء الاصطناعي للمدارس ومراكز التدريب." },
  "equip.construction": { en: "Construction Materials", ar: "مواد البناء" },
  "equip.constructionDesc": { en: "High-quality materials sourced from trusted international suppliers.", ar: "مواد عالية الجودة من موردين دوليين موثوقين." },
  "equip.tenders": { en: "Tender Management", ar: "إدارة المناقصات" },
  "equip.tendersDesc": { en: "Full capability to prepare, submit, and manage government and private sector tenders.", ar: "قدرة كاملة على إعداد وتقديم وإدارة مناقصات القطاعين العام والخاص." },
  "equip.afterSales": { en: "After-Sales Support", ar: "دعم ما بعد البيع" },
  "equip.afterSalesDesc": { en: "Installation, maintenance, and technical support for all supplied equipment.", ar: "التركيب والصيانة والدعم الفني لجميع المعدات الموردة." },
  "equip.ourReach": { en: "Our Reach", ar: "نطاق وصولنا" },
  "equip.globalSupply": { en: "Global Supply Network", ar: "شبكة توريد عالمية" },
  "equip.markets": { en: "Markets", ar: "الأسواق" },
  "equip.countries": { en: "Countries", ar: "الدول" },
  "equip.suppliers": { en: "Suppliers", ar: "الموردون" },
  "equip.tendersWon": { en: "Tenders Won", ar: "مناقصات فائزة" },
  "equip.promiseHeading": { en: "Quality You Can Trust", ar: "جودة يمكنك الوثوق بها" },
  "equip.promiseText": { en: "Every piece of equipment we supply meets strict quality and safety standards. We work exclusively with certified international partners and manufacturers to ensure our clients receive only the best — backed by full after-sales support and technical expertise.", ar: "كل قطعة معدات نوردها تلبي معايير صارمة للجودة والسلامة. نعمل حصرياً مع شركاء ومصنعين دوليين معتمدين لضمان حصول عملائنا على الأفضل فقط - مدعومة بدعم كامل بعد البيع وخبرة تقنية." },
  "equip.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "equip.marketsWeServe": { en: "Markets We Serve", ar: "الأسواق التي نخدمها" },
  "equip.whereWeOperate": { en: "Where We Operate", ar: "أين نعمل" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => translations[key]?.[language] || key;
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
