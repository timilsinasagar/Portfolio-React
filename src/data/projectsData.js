export const filters = [
  { key: "all", label: "All" },
  { key: "learning-management-system", label: "Learning Management System" },
  { key: "frontend", label: "Frontend" },
  { key: "ecommerce", label: "E-Commerce" },
];

export const projects = [
  {
    id: 1,
    cat: "learning-management-system",
    featured: true,
    span: "md:col-span-12",
    delay: "",
    img: "/src/assets/images/Projects/lms-thumbnail.png",

    gallery: [
      "/src/assets/images/Projects/lms-thumbnail.png",
      "/src/assets/images/Projects/padhaimantra.png",
      "/src/assets/images/Projects/kkacademy.png",
      "/src/assets/images/Projects/meroonline.webp",
      "/src/assets/images/Projects/radiant.png",
      "/src/assets/images/Projects/tryforlearn.png",
      "/src/assets/images/Projects/creative.png",
    ],

    overlayCat: "Laravel · E-Learning Platform · 2025 - Present",
    overlayName: "Learning Management System — Complete E-Learning Platform",

    name: "Learning Management System (LMS)",

    // Flat string for the grid card + sidebar tag list.
    stack:
      "Laravel · PHP · MySQL · Redis · Livewire · Laravel Echo · Pusher/WebSockets · Bootstrap 5 · Zoom API · eSewa · Khalti · Firebase Cloud Messaging · wkhtmltopdf",

    demo: "#",
    github: "#",

    duration: "1+ Year",
    teamSize: "2 (Web Developer & Mobile App Developer)",
    projectType: "Company Project (X.A.V Technology)",
    level: "Advanced",
    role: "Lead Full Stack Engineer",

    description:
      "A production-grade Learning Management System designed with a scalable event-driven architecture supporting real-time communication, asynchronous processing, and multi-channel notifications. The system is built to handle large-scale student operations including course management, live classes, payments, assessments, and automated certification with high reliability and performance.",

    // Flat list for the simple "Key Features" fallback rendering.
    features: [
      "Multi-role authentication (Super Admin, Admin, Teacher, Student)",
      "Course lifecycle management (Create → Publish → Enroll → Track)",
      "Batch & enrollment system with real-time updates",
      "Live Zoom classes with secure token-based access",
      "Automated grading & assessment system",
      "Certificate generation engine (dynamic PDF templates)",
      "Payment gateway integration (eSewa & Khalti)",
      "Advanced admin analytics dashboard",
      "Live notifications using Laravel Echo",
      "Firebase push notifications (mobile + web)",
      "Event-driven enrollment workflow",
      "Automated certificate generation pipeline",
    ],
    // ────────────────────────────────────────────────
    // Rich, structured data — used only by the detail
    // page when present. Safe to omit on other projects.
    // ────────────────────────────────────────────────
    details: {
      meta: {
        type: "Multi-Tenant SaaS LMS Platform",
        status: "Production",
        ownership: "End-to-End System Design + Development",
        scale:
          "Multi-institution architecture (scalable to thousands of users)",
      },

      stack: {
        backend: {
          language: "PHP 8.2",
          framework: "Laravel 10",
          architecture: "MVC",
          api: "RESTful API layer secured with Laravel Sanctum (supports session-based auth for web and token-based auth for SPA/mobile clients)",
        },
        frontend: {
          layers: ["Blade", "Livewire", "Vanilla JS", "jQuery", "AJAX"],
          ui: ["Bootstrap 5", "HTML5", "CSS3", "Tailwind CSS"],
        },
        databases: {
          primary: "MySQL",
          cache: "Redis",
        },
        realTimeSystem: {
          technology: ["Laravel Echo", "Pusher / WebSockets", "Firebase Notification"],
        
        },
     
        notifications: {
          channels: [
            "Firebase Cloud Messaging (Push Notifications)",
            "Email (SMTP)",
            "SMS Gateway Integration",
          ],
          systemDesign:
            "Event-driven notification pipeline with queue fallback",
        },
        integrations: {
          liveclass: ["Zoom API (Secure Meeting Integration)", "Google Meet", "Microsoft Teams"],
          video: ["Youtube Iframe", "Bunny Net Video Streaming Platform"],
          payments: ["eSewa", "Khalti", "QR Code"],
          documents: "wkhtmltopdf (HTML to PDF rendering engine)",
        },
      },

      featuresBreakdown: {
        core: [
          "Multi-role authentication (Super Admin, Admin, Teacher, Student)",
          "Course lifecycle management (Create → Publish → Enroll → Track)",
          "Batch & enrollment system with real-time updates",
          "Live Zoom classes with secure token-based access",
          "Automated grading & assessment system",
          "Certificate generation engine (dynamic PDF templates)",
          "Payment gateway integration (eSewa & Khalti)",
          "Advanced admin analytics dashboard",
        ],
        realTime: [
          "Live notifications using Laravel Echo",
          "Instant enrollment status updates",
          "Live class activity tracking",
          "Real-time admin dashboard metrics",
        ],
        automation: [
          "Event-driven enrollment workflow",
          "Queue-based notification system",
          "Automated certificate generation pipeline",
          "Background payment verification handling",
        ],
        communication: [
          "Firebase push notifications (mobile + web)",
          "Email notification system",
          "SMS alerts for critical updates",
        ],
      },

      performanceEngineering: {
        optimizations: [
          "Redis caching for high-frequency queries",
          "Queue-based offloading of heavy tasks",
          "Database indexing for enrollment & course tables",
          "Lazy loading for dashboard analytics",
          "WebSocket-based real-time updates to reduce polling",
        ],
        scalabilityStrategy: [
          "Stateless backend design",
          "Queue worker horizontal scaling",
          "Database normalization with indexed relations",
          "Event-driven decoupling of modules",
        ],
      },

      security: {
        authentication: "Laravel Auth with role-based access control (RBAC)",
        dataProtection: [
          "Encrypted sensitive user data",
          "Secure payment verification flow",
          "CSRF & XSS protection",
          "Token-based Zoom session access",
        ],
      },
      // Each entry below is a separate live deployment of this same
      // LMS codebase, running independently for a different academy/
      // client — its own folder/repo, own branding, same core product.
      deployments: [
        {
          name: "Padhai Mantra LMS",
          img: "/src/assets/images/Projects/padhaimantra.png",
          url: "https://padhaimantra.com",
        },
        {
          name: "KK Academy Online",
          img: "/src/assets/images/Projects/kkacademy.png",
          url: "https://kkacademy.online",
        },
        {
          name: "Try For Learn",
          img: "/src/assets/images/Projects/tryforlearn.png",
          url: "https://tryforlearn.edu.np",
        },
        {
          name: "Mero Online Tuition",
          img: "/src/assets/images/Projects/meroonline.webp",
          url: "https://meroonlinetuition.com/",
        },
        {
          name: "Radiant Elite Tutor",
          img: "/src/assets/images/Projects/radiant.png",
          url: "https://radiantelitetutors.com.np",
        },
        {
          name: "Creative Education Foundation LMS",
          img: "/src/assets/images/Projects/creative.png",
          url: "https://cefnepal.edu.np",
        },
      ],
    },
  },
  {
    id: 2,
    cat: "ecommerce",
    span: "md:col-span-4",
    delay: "d1",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    ],
    overlayCat: "E-Commerce · 2024",
    overlayName: "Nepali Handicraft Online Store",
    name: "Handicraft E-Shop",
    stack: "Laravel · eSewa · MySQL",
    demo: "#",
    github: "#",
    duration: "2 months",
    teamSize: "Solo project",
    projectType: "Freelance Project",
    level: "Intermediate",
    role: "Full Stack Developer",
    description:
      "An online storefront for a local Nepali handicraft business, built to bring their handmade products to a wider online audience with integrated local payment support.",
    features: [
      "eSewa payment gateway integration for local Nepali customers",
      "Admin panel for inventory and order management",
      "Category-based product browsing with search and filters",
      "Order tracking and email notifications",
    ],
    challenge:
      "Integrating eSewa's payment callback flow securely while keeping the checkout experience smooth required careful handling of transaction verification on the backend.",
  },
  {
    id: 3,
    cat: "laravel",
    span: "md:col-span-4",
    delay: "d2",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    ],
    overlayCat: "Laravel · 2023",
    overlayName: "Inventory Management System",
    name: "Inventory Manager",
    stack: "Laravel · PHP · MySQL · Bootstrap",
    demo: "#",
    github: "#",
    duration: "6 weeks",
    teamSize: "Solo project",
    projectType: "Self Project",
    level: "Intermediate",
    role: "Backend Developer",
    description:
      "A stock and inventory tracking system for a small retail business, replacing their manual spreadsheet-based process with a searchable, reportable system.",
    features: [
      "Real-time stock level tracking with low-stock alerts",
      "Purchase and sales order management",
      "Exportable PDF/Excel inventory reports",
      "Multi-warehouse stock tracking",
    ],
    challenge:
      "Migrating years of inconsistent spreadsheet data into a normalized relational schema without losing historical stock records.",
  },
  {
    id: 4,
    cat: "frontend",
    span: "md:col-span-4",
    delay: "d3",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    ],
    overlayCat: "Frontend · 2023",
    overlayName: "Corporate Portfolio Website",
    name: "Corporate Portfolio",
    stack: "HTML · CSS · Bootstrap 5 · JS",
    demo: "#",
    github: "#",
    duration: "3 weeks",
    teamSize: "Solo project",
    projectType: "Freelance Project",
    level: "Beginner",
    role: "Frontend Developer",
    description:
      "A clean, fast-loading marketing site for a corporate client, focused on conversion-driven layout and mobile-first responsiveness.",
    features: [
      "Fully responsive Bootstrap 5 layout",
      "Animated scroll reveals and smooth in-page navigation",
      "Contact form with client-side validation",
      "Optimized for fast load times and SEO basics",
    ],
    challenge:
      "Balancing a visually rich design with strict page-speed targets the client requested for SEO purposes.",
  },
  {
    id: 5,
    cat: "laravel",
    span: "md:col-span-6",
    delay: "d1",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    ],
    overlayCat: "Laravel · 2023",
    overlayName: "Hospital Appointment System",
    name: "Hospital Appointment System",
    stack: "Laravel · SMS API · MySQL",
    demo: "#",
    github: "#",
    duration: "3 months",
    teamSize: "2 developers",
    projectType: "Company Project",
    level: "Intermediate",
    role: "Full Stack Developer",
    description:
      "An appointment booking and management system for a local hospital, reducing front-desk phone load by letting patients book and receive reminders automatically.",
    features: [
      "Doctor availability calendar with slot-based booking",
      "Automated SMS appointment reminders",
      "Patient history and visit records per doctor",
      "Admin dashboard for managing doctors and schedules",
    ],
    challenge:
      "Preventing double-bookings under concurrent requests required careful use of database transactions and row locking on the appointment slots table.",
  },
  {
    id: 6,
    cat: "ecommerce",
    span: "md:col-span-6",
    delay: "d2",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    ],
    overlayCat: "E-Commerce · 2022",
    overlayName: "Restaurant Online Ordering Platform",
    name: "Restaurant Order System",
    stack: "Laravel · JS · Bootstrap · Stripe",
    demo: "#",
    github: "#",
    duration: "2 months",
    teamSize: "3 developers",
    projectType: "Company Project",
    level: "Intermediate",
    role: "Full Stack Developer",
    description:
      "An online ordering platform for a restaurant chain, allowing customers to browse the menu, customize orders, and pay online via Stripe.",
    features: [
      "Dynamic menu with item customization (add-ons, sizes)",
      "Stripe-powered checkout with saved payment methods",
      "Order status tracking for customers",
      "Kitchen-facing order dashboard for staff",
    ],
    challenge:
      "Designing a flexible product-variant system so menu items with different sizes/add-ons could be priced and ordered correctly without a messy schema.",
  },
];
