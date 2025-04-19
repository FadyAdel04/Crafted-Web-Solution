/* eslint-disable import/extensions */

// Services Img Imports
import web from "../assets/images/Services/Web.png";
import digital from "../assets/images/Services/Mobile.png";
import creative from "../assets/images/Services/creative.png";

// Portfolio Img Imports
import wedding from "../assets/images/Portfolio/wedding.png";
import wedding2 from "../assets/images/Portfolio/wedding2.png";
import ecommerce from "../assets/images/Portfolio/ecommerce.png";
import ecommerce2 from "../assets/images/Portfolio/ecommerce2.png";
import ecommerce3 from "../assets/images/Portfolio/ecommerce3.png";
import ecommerce4 from "../assets/images/Portfolio/ecommerce4.png";
import ecommerce5 from "../assets/images/Portfolio/ecommerce5.png";
import ecommerce6 from "../assets/images/Portfolio/ecommerce6.png";
import landing2 from "../assets/images/Portfolio/landing2.png";
import landing3 from "../assets/images/Portfolio/landing3.png";
import landing4 from "../assets/images/Portfolio/landing4.png";
import landing5 from "../assets/images/Portfolio/landing5.png";
import landing6 from "../assets/images/Portfolio/landing6.png";
import portofolio from "../assets/images/Portfolio/portofolio.png";
import portofolio2 from "../assets/images/Portfolio/portofolio2.png";
import portofolio3 from "../assets/images/Portfolio/portofolio3.png";
import Business from "../assets/images/Portfolio/Business.png";
import Business2 from "../assets/images/Portfolio/business2.png";
import Business3 from "../assets/images/Portfolio/business3.png";
import Business4 from "../assets/images/Portfolio/business4.png";
import Business5 from "../assets/images/Portfolio/business5.png";
import Business6 from "../assets/images/Portfolio/business6.png";
import menu from "../assets/images/Portfolio/menu.jpg";
import menu2 from "../assets/images/Portfolio/menu2.png";
import courses from "../assets/images/Portfolio/courses.png";
import courses2 from "../assets/images/Portfolio/courses2.png";
import courses3 from "../assets/images/Portfolio/courses3.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";

export const Services = [
  {
    title: "Web Design & Development",
    imageUrl: web,
    animation: "left",
  },
  {
    title: "Digital Solutions for Events & Personal Branding",
    imageUrl: digital,
    animation: "up",
  },
  {
    title: "Creative Digital Services",
    imageUrl: creative,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "wedding1",
    title: "Wedding Invitation",
    imageUrl: wedding,
    type: "Invitation",
    description: "Personalized digital wedding invitation with photo gallery, event details, and RSVP management",
    responsibility: ["Custom Design", "RSVP System", "Mobile Optimization"],
    credit: "https://wedding-mariam-abdelrahman.vercel.app/",
  },
  {
    id: "ecommerce1",
    title: "Phlox Premium Headphones",
    imageUrl: ecommerce,
    type: "E-commerce",
    description: "High-end audio equipment store with product customization and secure checkout",
    responsibility: ["Store Design", "Cart System", "Payment Gateway"],
    credit: "https://fadyadel04.github.io/Phlox/",
  },
  {
    id: "portfolio1",
    title: "Fady Adel - Developer Portfolio",
    imageUrl: portofolio,
    type: "Portfolio",
    description: "Interactive developer portfolio showcasing projects, skills, and blog articles",
    responsibility: ["UI/UX Design", "Content Management", "Performance Optimization"],
    credit: "https://fadyadel-fady-adels-projects.vercel.app/",
  },
  {
    id: "business1",
    title: "Papa John's Egypt",
    imageUrl: Business,
    type: "Business Website",
    description: "Official regional website with online ordering, store locator, and promotions",
    responsibility: ["Responsive Design", "Order Tracking", "CMS Integration"],
    credit: "https://fadyadel04.github.io/Papa-John-s/",
  },
  {
    id: "digitalMenu1",
    title: "Dajaj - Digital Menu System",
    imageUrl: menu,
    type: "Digital Menu",
    description: "Restaurant ordering system with menu management and table service integration",
    responsibility: ["Menu Design", "Order API", "Admin Dashboard"],
    credit: "https://linktr.ee/Daja340",
  },
  {
    id: "Elearning1",
    title: "Eclipseful Learning Platform",
    imageUrl: courses,
    type: "E-Learning",
    description: "Comprehensive course platform with video lessons, quizzes, and certification",
    responsibility: ["LMS Development", "Payment Processing", "Student Dashboard"],
    credit: "https://courses-next-seven.vercel.app/",
  },
  {
    id: "wedding2",
    title: "Wedding Invitation 2",
    imageUrl: wedding2,
    type: "Invitation",
    description: "Elegant wedding website with countdown timer, location maps, and guestbook",
    responsibility: ["Custom Animation", "Map Integration", "Database Management"],
    credit: "https://mohamed-wedad.vercel.app/",
  },
  {
    id: "landing2",
    title: "Solar System Explorer",
    imageUrl: landing2,
    type: "Landing Page",
    description: "Interactive educational experience about planetary systems with 3D visualization",
    responsibility: ["3D Rendering", "Educational Content", "Performance Optimization"],
    credit: "https://solar-company-one.vercel.app/",
  },
  {
    id: "landing3",
    title: "BrainWave AI Platform",
    imageUrl: landing3,
    type: "Landing Page",
    description: "Showcase for AI-powered analytics tools with demo integration",
    responsibility: ["AI Demo", "Lead Capture", "Technical Documentation"],
    credit: "https://brain-wave-ai.vercel.app/",
  },
  {
    id: "landing4",
    title: "Space Exploration Initiative",
    imageUrl: landing4,
    type: "Landing Page",
    description: "Promotional site for space research organization with event registration",
    responsibility: ["Event System", "Donation Processing", "News Integration"],
    credit: "https://space-website-react-vert.vercel.app/",
  },
  {
    id: "landing5",
    title: "Viva Decor Interiors",
    imageUrl: landing5,
    type: "Landing Page",
    description: "Portfolio showcase for interior design studio with project galleries",
    responsibility: ["Gallery System", "Client Testimonials", "Contact Management"],
    credit: "https://fadyadel04.github.io/VivaDecor/",
  },
  {
    id: "landing6",
    title: "Cinematic Universe",
    imageUrl: landing6,
    type: "Landing Page",
    description: "Movie database and ticket booking platform with showtime management",
    responsibility: ["Movie API", "Booking System", "Theater Integration"],
    credit: "https://movies-app-six-tau.vercel.app/",
  },
  {
    id: "portfolio2",
    title: "Creative Agency Portfolio",
    imageUrl: portofolio2,
    type: "Portfolio",
    description: "Showcase for design agency with case studies and client work",
    responsibility: ["Case Studies", "Client Portal", "Lead Generation"],
    credit: "https://fadyadel04.github.io/special-design/",
  },
  {
    id: "portfolio3",
    title: "Tech Solutions Portfolio",
    imageUrl: portofolio3,
    type: "Portfolio",
    description: "Corporate portfolio for IT services company with service packages",
    responsibility: ["Service Pages", "Solution Showcase", "Contact System"],
    credit: "https://fadyadel04.github.io/FADY-DEVELOPMENT-template/",
  },
  {
    id: "business2",
    title: "Care Pulse Medical",
    imageUrl: Business2,
    type: "Business Website",
    description: "Healthcare provider website with doctor profiles and appointment scheduling",
    responsibility: ["Appointment System", "Doctor Profiles", "Medical Blog"],
    credit: "https://care-pules-health-care.vercel.app/",
  },
  {
    id: "business3",
    title: "Elite Car Rentals",
    imageUrl: Business3,
    type: "Business Website",
    description: "Vehicle rental platform with availability checker and online booking",
    responsibility: ["Inventory System", "Booking Engine", "Fleet Management"],
    credit: "https://car-rent-app-chi.vercel.app/",
  },
  {
    id: "business4",
    title: "Peak Fitness Gym",
    imageUrl: Business4,
    type: "Business Website",
    description: "Gym membership site with class schedules and trainer profiles",
    responsibility: ["Schedule System", "Member Portal", "Payment Processing"],
    credit: "https://fitness-gym-sandy.vercel.app/",
  },
  {
    id: "business5",
    title: "Holla Movie Platform",
    imageUrl: Business5,
    type: "Business Website",
    description: "Streaming service with content recommendations and user profiles",
    responsibility: ["Video Player", "Recommendation Engine", "User Accounts"],
    credit: "https://holla-movies.vercel.app/",
  },
  {
    id: "business6",
    title: "Zen Mountain Resort",
    imageUrl: Business6,
    type: "Business Website",
    description: "Luxury resort booking site with room selection and package deals",
    responsibility: ["Booking System", "Gallery", "Package Builder"],
    credit: "https://fadyadel04.github.io/TBH-ZEN-Resort/index.html",
  },
  {
    id: "Elearning2",
    title: "Nouvil Coding Academy",
    imageUrl: courses2,
    type: "E-Learning",
    description: "Programming courses with code editor integration and progress tracking",
    responsibility: ["Code Sandbox", "Progress System", "Certificate Generation"],
    credit: "https://fadyadel04.github.io/Nouvil-Academy/",
  },
  {
    id: "Elearning3",
    title: "Almeshmosamed Academy",
    imageUrl: courses3,
    type: "E-Learning",
    description: "Language learning platform with speech recognition and tutoring",
    responsibility: ["Speech API", "Lesson Planner", "Tutor Matching"],
    credit: "https://al-mesh-mosamem.vercel.app/",
  },
  {
    id: "digitalMenu2",
    title: "Gourmet Restaurant",
    imageUrl: menu2,
    type: "Digital Menu",
    description: "Upscale restaurant menu with wine pairing recommendations",
    responsibility: ["Menu Management", "Pairing Algorithm", "Reservation System"],
    credit: "https://gourmet-restaurant-menu.vercel.app/",
  },
  {
    id: "ecommerce2",
    title: "Amazon Marketplace Clone",
    imageUrl: ecommerce2,
    type: "E-commerce",
    description: "Full-featured e-commerce platform with seller accounts and reviews",
    responsibility: ["Seller Portal", "Review System", "Recommendation Engine"],
    credit: "https://intern-ecommerce-front-end2.vercel.app/",
  },
  {
    id: "ecommerce3",
    title: "Nike Style Store",
    imageUrl: ecommerce3,
    type: "E-commerce",
    description: "Athletic wear store with product customization and size advisor",
    responsibility: ["Product Customizer", "Size Recommendation", "Inventory Sync"],
    credit: "https://karma-master-ecommerce.vercel.app/",
  },
  {
    id: "ecommerce4",
    title: "Luxe Shopping Bag",
    imageUrl: ecommerce4,
    type: "E-commerce",
    description: "Fashion boutique with virtual try-on and style recommendations",
    responsibility: ["AR Try-On", "Style Quiz", "Wishlist Management"],
    credit: "https://tech-trove-shop.vercel.app/",
  },
  {
    id: "ecommerce5",
    title: "Blue Fashion Store",
    imageUrl: ecommerce5,
    type: "E-commerce",
    description: "Sustainable clothing store with eco-impact calculator",
    responsibility: ["Impact Calculator", "Subscription Service", "Lookbook"],
    credit: "https://fadyadel04.github.io/E-commers/",
  },
  {
    id: "ecommerce6",
    title: "Imaginfiy AI Services",
    imageUrl: ecommerce6,
    type: "E-commerce",
    description: "Marketplace for AI-generated art with printing options",
    responsibility: ["AI Generator", "Print Integration", "Artist Commissions"],
    credit: "https://imaginify-eight-pi.vercel.app/",
  },
];

export const Advantages = [
  [
    {
      title: "Clear Communication",
      description:
        "We keep you updated every step of the way to ensure your vision comes to life perfectly.",
      imageUrl: Communicative,
    },
    {
      title: "Well-Managed Projects",
      description:
        "From planning to launch, every project is handled with care and precision for smooth delivery.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Custom & Creative",
      description:
        "Every website or digital invitation is designed uniquely to match your style and purpose.",
      imageUrl: Collaborative,
    },
    {
      title: "Client-Favorite Designs",
      description:
        "We’ve crafted dozens of stunning projects that clients love and proudly share.",
      imageUrl: Favorite,
    },
  ],
];

export const TeamMembers = [
  {
    name: "Fady Adel",
    position: "Full Stack Developer",
    imageUrl: CEO,
  },
];
