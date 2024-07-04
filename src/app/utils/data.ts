import mku from '../../../public/mku.jpeg';
import cybrary from '../../../public/cybrary.png';
import ensign from '../../../public/ensign.png';
import cmu from "../../../public/cmu.jpeg"
import isc2 from "../../../public/isc2.png"




export const logoData = [
  { src: mku, alt: "Mount Kenya", color: "text-blue-600" },
  { src: cybrary, alt: "Cybrary", color: "text-yellow-500" },
  { src: ensign, alt: "Ensign college", color: "text-green-500" },
  { src: cmu, alt: "Carnegie Mellon University", color: "text-red-500" },
  { src: isc2, alt: "ISC2", color: "text-green-700" },

];


export const testimonials = [
    {
      name: 'Murenzi ALex',
      role: 'Systems Administrator at TechSavvy Ltd',
      testimonial:
        'The IT Experience Bootcamp was a game-changer for my career. The hands-on training with real-world scenarios in user and group management, as well as routine maintenance, prepared me to handle complex IT environments with confidence. The instructors were knowledgeable, and the practical experience I gained was invaluable. Within months of completing the program, I secured a position as a Systems Administrator, and I attribute my success to the robust training I received.',
      avatar: '/alex.jpg',
    },
    {
      name: 'David Nkurunziza',
      role: 'Cybersecurity analyst at SecureNet Solutions',
      testimonial:
        'Participating in the IT Experience Bootcamp was one of the best decisions I ve made for my career. The program s focus on security enhancements, conducting audits, and implementing advanced security measures gave me the skills needed to excel in my current role. The real-world penetration testing scenarios and hands-on experience with cutting-edge security technologies were particularly beneficial. I now feel equipped to tackle any security challenge thanks to the comprehensive training provided by the bootcamp.',
      avatar: '/david.jpg',
    },
    {
      name: 'Chantal Umutoni',
      role: 'IT manager at DHR',
      testimonial:
        'The IT Experience Bootcamp provided me with a comprehensive understanding of all IT ecosystem components, which has been crucial in my role as an IT Manager. The program’s emphasis on strategic planning, compliance, and IT operations management has given me the tools to oversee complex IT projects and ensure our operations meet industry standards. The networking opportunities and mentorship from industry leaders were also invaluable. This program truly prepares you for leadership roles in the IT field.',
      avatar: '/chantal.jpg',
    },
  ];
  

  export interface Industry {
    icon: string;
    title: string;
    features: string[];
  }
  
  export const industries: Industry[] = [
    {
      icon: "/icons/it-education.svg",
      title: "IT Education sector",
      features: [
        "Develop educational apps and online learning platforms",
        "Implement learning management systems (LMS) for schools and universities",
        "Provide digital content creation and curriculum development services",
        "Offer technology training for teachers and educators on using digital tools in the classroom",
        "Provide internship opportunities for students interested in educational technology"
      ]
    },
    {
      icon: "/icons/tourism-hospitality.svg",
      title: "Tourism and Hospitality Industry",
      features: [
        "Develop online booking platforms for hotels and tour operators",
        "Implement guest management systems for personalized experiences",
        "Provide digital marketing solutions for tourist attractions",
        "Offer technology training for hospitality staff on using reservation systems and CRM software",
        "Provide internship programs for students interested in hospitality technology"
      ]
    },
    {
      icon: "/icons/transportation-logistics.svg",
      title: "Transportation and Logistics Industry",
      features: [
        "Develop GPS tracking systems for fleet management",
        "Implement route optimization software for efficient logistics",
        "Provide freight management solutions for cargo handling",
        "Offer technology training for logistics staff on using transportation management systems",
        "Provide internship opportunities for students interested in logistics technology"
      ]
    },
    {
      icon: "/icons/media-entertainment.svg",
      title: "Media and Entertainment Industry",
      features: [
        "Develop content management systems for media organizations",
        "Implement video streaming platforms for content distribution",
        "Provide digital rights management (DRM) solutions for content protection",
        "Offer technology training for media professionals on using content management systems and DRM software",
        "Provide internship programs for students interested in media technology"
      ]
    },
    {
      icon: "/icons/nonprofit.svg",
      title: "Nonprofit Organizations",
      features: [
        "Develop donor management systems for fundraising",
        "Implement impact assessment tools for measuring social impact",
        "Provide volunteer management platforms for nonprofit organizations",
        "Offer technology training for nonprofit staff on using donor management systems and impact assessment tools",
        "Provide internship programs for students interested in nonprofit technology"
      ]
    },
    {
      icon: "/icons/retail-ecommerce.svg",
      title: "Retail and E-commerce Industry",
      features: [
        "Develop e-commerce platforms for online sales",
        "Implement inventory management systems for efficient stock control",
        "Provide customer relationship management (CRM) solutions for personalized marketing",
        "Offer technology training for retail staff on using point-of-sale systems and e-commerce platforms",
        "Provide internship opportunities for students interested in retail technology"
      ]
    }
  ];