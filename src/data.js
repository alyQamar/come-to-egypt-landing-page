import tour1 from "./images/tour-1-pyramids.jpg";
import tour2 from "./images/tour-2-aswan.jpg";
import tour3 from "./images/tour-3-luxor.jpg";
import tour4 from "./images/tour-4-cairo.jpg";
import tour5 from "./images/tour-5-alex.jpg";
import tour6 from "./images/tour-6-dahab.jpg";
import tour7 from "./images/tour-7-catherine.jpg";
import tour8 from "./images/tour-8-port-said.jpg";
import tour9 from "./images/tour-9-tanta.jpg";
import tour10 from "./images/tour-10-sharm.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "October 3, 2023",
    title: "Giza Pyramids Exploration",
    info: "Discover the ancient wonders of the Giza Plateau, home to the iconic pyramids of Egypt. Marvel at the architectural brilliance of the Great Pyramid of Giza and explore the fascinating history of this UNESCO World Heritage site.",
    location: "Giza, Egypt",
    duration: 1,
    cost: 300,
  },
  {
    id: 2,
    image: tour2,
    date: "April 15th, 2023",
    title: "Discovering Aswan Wonders",
    info: "Experience the mesmerizing beauty of Aswan, where ancient history meets stunning natural landscapes. Explore the majestic temples, sail the serene Nile, and immerse yourself in the rich culture of this captivating city.",
    location: "Aswan, Egypt",
    duration: 7,
    cost: 1200,
  },
  {
    id: 3,
    image: tour3,
    date: "May 20th, 2023",
    title: "Luxor: The Ancient City of Pharaohs",
    info: "Embark on a journey through time in Luxor, the renowned city of the Pharaohs. Marvel at the grandeur of the Valley of the Kings, explore the enchanting Karnak Temple, and cruise the Nile to experience the essence of ancient Egyptian civilization.",
    location: "Luxor, Egypt",
    duration: 5,
    cost: 1100,
  },
  {
    id: 4,
    image: tour4,
    date: "June 25th, 2023",
    title: "Cairo: Gateway to Ancient Wonders",
    info: "Uncover the mysteries of Cairo, where the past meets the present. Stand in awe of the Great Pyramids, explore the historic Egyptian Museum, and wander through the bustling markets of Khan El Khalili. Immerse yourself in the vibrant culture of Egypt's capital city.",
    location: "Cairo, Egypt",
    duration: 6,
    cost: 1000,
  },
  {
    id: 5,
    image: tour5,
    date: "August 10th, 2023",
    title: "Alexandria: Pearl of the Mediterranean",
    info: "Experience the charm of Alexandria, a city steeped in history and Mediterranean beauty. Visit the ancient Library of Alexandria, stroll along the picturesque Corniche, and explore the impressive Qaitbay Citadel. Discover the unique blend of cultures that define this coastal gem.",
    location: "Alexandria, Egypt",
    duration: 4,
    cost: 900,
  },
  {
    id: 6,
    image: tour6,
    date: "September 5th, 2023",
    title: "Dahab: Tranquility by the Red Sea",
    info: "Escape to the serene shores of Dahab, nestled along the Red Sea coast. Dive into crystal-clear waters teeming with marine life, unwind on sandy beaches, and explore the vibrant coral reefs. Immerse yourself in the laid-back atmosphere of this coastal haven.",
    location: "Dahab, Egypt",
    duration: 3,
    cost: 800,
  },
  {
    id: 7,
    image: tour7,
    date: "October 18th, 2023",
    title: "Saint Catherine: Gateway to Sinai's Beauty",
    info: " Embark on a spiritual journey to Saint Catherine, a place of profound religious significance. Hike the majestic Mount Sinai at dawn, visit the historic Saint Catherine's Monastery, and be awe-inspired by the rugged beauty of the Sinai Peninsula.",
    location: "Saint Catherine, Egypt",
    duration: 2,
    cost: 700,
  },
  {
    id: 8,
    image: tour8,
    date: "November 12th, 2023",
    title: "Port Said: Where History Meets the Mediterranean",
    info: "Discover the maritime charm of Port Said, a city with a rich history along the Mediterranean coast. Explore the vibrant waterfront, visit the iconic Suez Canal Authority building, and immerse yourself in the unique blend of cultures that define this port city.",
    location: "Port Said, Egypt",
    duration: 3,
    cost: 850,
  },
  {
    id: 9,
    image: tour9,
    date: "January 15th, 2024",
    title: "Tanta, Egypt: Cultural Exploration",
    info: "Embark on a cultural exploration in Tanta, Egypt. Discover the rich history, visit local landmarks, and experience the vibrant traditions of this enchanting city.",
    location: "Tanta, Egypt",
    duration: 3,
    cost: 750,
  },
  {
    id: 10,
    image: tour10,
    date: "February 20th, 2024",
    title: "Sharm El Sheikh: Red Sea Paradise",
    info: `Escape to the paradise of Sharm El Sheikh, nestled along the Red Sea. Dive into vibrant coral reefs, relax on sandy beaches, and indulge in the luxurious amenities of this world-renowned resort destination.`,
    location: "Sharm El Sheikh, Egypt",
    duration: 5,
    cost: 1200,
  },
];
