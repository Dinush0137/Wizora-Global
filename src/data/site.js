/**
 * Wizora Global - Central Data Configuration
 * Single source of truth for all content, contact info, services, clients, and products.
 * Edit this file to update the site without touching component logic.
 */

export const siteConfig = {
  company: {
    name: 'Wizora Global',
    shortName: 'WIZORA',
    tagline: 'Software • Hardware • Innovations',
    footerQuote: 'Building a smarter tomorrow, together.',
    logoAlt: 'Wizora Global Logo',
  },

  contact: {
    email: 'info.wizora@gmail.com',
    formRecipientEmail: 'info.wizora@gmail.com', // The company email where messages are delivered
    phoneDisplay: '94753443075',
    // WhatsApp number in international format (digits only)
    whatsappNumber: '94753443075',
    whatsappDefaultMessage: 'Hello Wizora Global, I would like to inquire about your software and hardware solutions.',
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
    },
    mailtoUrl(name = '', senderEmail = '', message = '') {
      const subject = encodeURIComponent(`Website enquiry from ${name || 'Prospective Client'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${senderEmail}\n\nProject details / Message:\n${message}`
      );
      return `mailto:${this.email}?subject=${subject}&body=${body}`;
    },
  },

  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/wizora-global', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/wizora-global', icon: 'Github' },
    { name: 'Facebook', url: 'https://facebook.com/wizoraglobal', icon: 'Facebook' },
    { name: 'X', url: 'https://twitter.com/wizoraglobal', icon: 'Twitter' },
  ],

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'Innovations', href: '#innovations' },
    { label: 'Contact Us', href: '#contact' },
  ],

  hero: {
    eyebrow: 'INNOVATION / TECHNOLOGY / GLOBAL',
    headline: 'Empowering the Future with Advanced',
    headlineAccent: 'Software & Hardware Innovations.',
    subtext: 'We build next-generation software products, hardware solutions, and custom IT services to accelerate global innovation.',
    primaryCta: { label: 'Explore Services', href: '#services' },
    secondaryCta: { label: 'Chat on WhatsApp' },
    trustPoints: [
      { id: 'sol', label: 'Innovative Solutions', icon: 'Lightbulb' },
      { id: 'imp', label: 'Global Impact', icon: 'Globe2' },
      { id: 'part', label: 'Trusted Partner', icon: 'ShieldCheck' },
    ],
  },

  about: {
    eyebrow: 'ABOUT WIZORA GLOBAL',
    title: 'More Than Technology.',
    titleAccent: 'We Build Possibilities.',
    description:
      'Wizora Global is a modern IT startup delivering comprehensive technology solutions through software, hardware and innovation. We bring together cutting-edge technology and creative thinking to help businesses and communities grow in the digital era.',
    stats: [
      { value: '5+', label: 'Years of Experience' },
      { value: '50+', label: 'Projects Delivered' },
      { value: '100%', label: 'Client Focus' },
    ],
    mission: {
      title: 'Our Mission',
      description: 'To deliver innovative and reliable technology solutions that create real-world impact and empower businesses worldwide.',
    },
    vision: {
      title: 'Our Vision',
      description: 'To be a global leader in software, hardware and innovation, shaping a smarter, more connected and sustainable future.',
    },
    coreValues: [
      'Innovation',
      'Integrity',
      'Excellence',
      'Collaboration',
      'Customer Focus',
    ],
  },

  services: [
    {
      id: 'software',
      title: 'Custom Software Solutions',
      description: 'Web applications, mobile apps, and enterprise systems built around your needs.',
      icon: 'Code2',
      tags: ['Web Applications', 'Mobile Apps', 'Enterprise Systems'],
      ctaText: 'Discuss a project',
      ctaHref: '#contact',
    },
    {
      id: 'hardware',
      title: 'Hardware & IoT Innovations',
      description: 'Embedded systems, smart automation, connected devices, and prototyping.',
      icon: 'Cpu',
      tags: ['Embedded Systems', 'Smart Automation', 'Prototyping'],
      ctaText: 'Discuss a project',
      ctaHref: '#contact',
    },
    {
      id: 'consulting',
      title: 'Tech Consulting & Product Design',
      description: 'End-to-end product development, from concept and architecture to launch.',
      icon: 'Layers',
      tags: ['Concept to Launch', 'System Architecture', 'UI/UX Design'],
      ctaText: 'Discuss a project',
      ctaHref: '#contact',
    },
    {
      id: 'support',
      title: 'IT Support & Managed Services',
      description: 'Reliable support, security guidance, and infrastructure management.',
      icon: 'CloudCog',
      tags: ['Managed Cloud', 'Security Guidance', 'Infrastructure'],
      ctaText: 'Discuss a project',
      ctaHref: '#contact',
    },
  ],

  clientsNetwork: {
    eyebrow: 'OUR CLIENTS NETWORK',
    title: 'Trusted by Leading',
    titleAccent: 'Organizations',
    subtext: 'We are proud to work with a diverse range of clients across industries and around the world.',
    mapLocations: [
      { name: 'USA / Florida', x: 125, y: 119, labelX: 12, labelY: 4, anchor: 'start' },
      { name: 'France', x: 348, y: 99, labelX: 12, labelY: 4, anchor: 'start' },
      { name: 'Dubai', x: 407, y: 161, labelX: 12, labelY: 4, anchor: 'start' },
      { name: 'India', x: 451, y: 172, labelX: 12, labelY: 4, anchor: 'start' },
      { name: 'Sri Lanka', x: 472, y: 205, labelX: 12, labelY: 4, anchor: 'start' },
      { name: 'Perth', x: 578, y: 239, labelX: -12, labelY: 18, anchor: 'end' },
      { name: 'Melbourne', x: 609, y: 253, labelX: 12, labelY: 4, anchor: 'start' },
    ],
    // The 15 verified clients from reference: WhatsApp_Image_2026-10-17.jpeg
    clients: [
      {
        id: 'ronan',
        name: 'Ronan Group',
        subtext: 'Group',
        accentColor: '#EF4444',
        type: 'serif-bold',
      },
      {
        id: 'fontex',
        name: 'FONTEX',
        subtext: 'Pioneer in Building Materials',
        accentColor: '#38BDF8',
        type: 'geometric-badge',
      },
      {
        id: 'ujps',
        name: 'U.J.P.S',
        subtext: 'Logistics & Warehousing',
        accentColor: '#60A5FA',
        type: 'bold-caps',
      },
      {
        id: 'cargills',
        name: 'Cargills',
        subtext: 'Since 1844',
        accentColor: '#F87171',
        type: 'classic-serif',
      },
      {
        id: 'vidura',
        name: 'Vidura College',
        subtext: 'Colombo',
        accentColor: '#818CF8',
        type: 'academic-crest',
      },
      {
        id: 'jayasoma',
        name: 'Jayasoma',
        subtext: 'Electricals & Hardware',
        accentColor: '#38BDF8',
        type: 'industrial-sans',
      },
      {
        id: 'lova',
        name: 'LOVA',
        subtext: 'JUICE',
        accentColor: '#FBBF24',
        type: 'luxury-serif',
      },
      {
        id: 'cone',
        name: 'C One',
        subtext: 'CEYLON ONE',
        accentColor: '#60A5FA',
        type: 'calligraphic-c',
      },
      {
        id: 'stassen',
        name: 'Stassen',
        subtext: 'FOODS',
        accentColor: '#F87171',
        type: 'italic-badge',
      },
      {
        id: 'kuroomba',
        name: 'KUROOMBA',
        subtext: 'Pure Coconut Water',
        accentColor: '#2DD4BF',
        type: 'fun-bold',
      },
      {
        id: 'gains',
        name: 'POWDERED GAINS',
        subtext: 'Elite Nutrition',
        accentColor: '#CBD5E1',
        type: 'athletic-italic',
      },
      {
        id: 'slt',
        name: 'SLT MOBITEL',
        subtext: 'The Connection',
        accentColor: '#34D399',
        type: 'telecom-bold',
      },
      {
        id: 'phi',
        name: 'PHI',
        subtext: 'International',
        accentColor: '#FCD34D',
        type: 'gold-crest',
      },
      {
        id: 'spotless',
        name: 'SpotlessPerth',
        subtext: 'Cleaning Solutions',
        accentColor: '#38BDF8',
        type: 'clean-sans',
      },
      {
        id: 'prema',
        name: 'PREMA',
        subtext: 'Ready Mix (Pvt) Ltd.',
        accentColor: '#F87171',
        type: 'heavy-industrial',
      },
    ],
  },

  innovations: {
    eyebrow: 'PRODUCTS & INNOVATIONS',
    title: 'Innovative Solutions for a',
    titleAccent: 'Smarter Tomorrow',
    subtext: 'Explore our growing range of software and hardware products designed to solve real problems and create lasting value.',
    products: [
      {
        id: 'wizora-sync',
        badge: 'SOFTWARE PRODUCT',
        title: 'WIZORA SYNC (SaaS)',
        tagline: 'Next-generation enterprise collaboration and resource management software.',
        features: [
          'Team Collaboration & Real-Time Sync',
          'Intelligent Resource Management',
          'Executive Real-time Analytics & KPI Tracking',
        ],
        ctaText: 'Learn More',
        ctaHref: '#contact',
        type: 'software',
      },
      {
        id: 'nexus-gateway',
        badge: 'HARDWARE PRODUCT',
        title: 'NEXUS GATEWAY (IoT Hub)',
        tagline: 'Industrial IoT central processing unit for global connectivity.',
        features: [
          'Ultra-Secure Encrypted Edge Connectivity',
          'Low-Latency Edge Processing Engine',
          'Industrial-Grade Durability & Longevity',
        ],
        ctaText: 'Learn More',
        ctaHref: '#contact',
        type: 'hardware',
      },
    ],
  },

  contactSection: {
    eyebrow: 'GET IN TOUCH',
    title: "Let's Build Something",
    titleAccent: 'Great Together',
    subtext: "Have a project in mind? Reach out to us directly. We're here to help turn ambitious ideas into reality.",
    formTitle: 'Send Us a Quick Message',
    disclaimer: 'Inquiries submitted through this form are delivered directly to contact@wizoraglobal.com.',
  },
};
