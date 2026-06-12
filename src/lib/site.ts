export const SITE = {
  name: "The Rain Church Global",
  tagline: "Reaching Every Nation",
  verse: "I will pour out my Spirit upon all flesh — Joel 2:28",
  socials: {
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    telegram: "https://telegram.org",
    whatsapp: "https://chat.whatsapp.com/Eeqlc1mp4HD33L6TKajSWK",
    instagram: "https://instagram.com",
  },
  email: "hello@therainchurch.global",
};

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Ministries", href: "/ministries" },
  { label: "School of the Word", href: "/school" },
  { label: "Impact", href: "/impact" },
  { label: "The Movement", href: "/movement" },
  { label: "Connect", href: "/connect" },
];

export type Ministry = {
  slug: string;
  name: string;
  blurb: string;
  cta: string;
  icon: string; // icon key
  image: string;
};

export const MINISTRIES: Ministry[] = [
  {
    slug: "worship-word",
    name: "Worship & Word",
    blurb: "Spirit-led worship and sound teaching every Sunday, streamed to the nations.",
    cta: "Watch this Sunday",
    icon: "flame",
    image: "/images/worship-lights.jpg",
  },
  {
    slug: "rain-cells",
    name: "Rain Cells",
    blurb: "Small communities where believers grow, pray and do life together.",
    cta: "Join a Cell",
    icon: "users",
    image: "/images/community.jpg",
  },
  {
    slug: "school-of-the-word",
    name: "School of the Word",
    blurb: "Foundational discipleship courses for new and growing believers.",
    cta: "Enroll Now",
    icon: "book",
    image: "/images/bible-open.jpg",
  },
  {
    slug: "intercession-rooms",
    name: "Intercession Rooms",
    blurb: "24/7 prayer covering — standing in the gap for the nations.",
    cta: "Enter the Room",
    icon: "hands",
    image: "/images/teaching.jpg",
  },
  {
    slug: "missions-evangelism",
    name: "Missions & Evangelism",
    blurb: "Crusades, outreach and digital missions reaching the unreached.",
    cta: "Join a Crusade",
    icon: "globe",
    image: "/images/children-hope.jpg",
  },
  {
    slug: "humanitarian-impact",
    name: "Humanitarian Impact",
    blurb: "Feeding, healing and lifting communities through the Feed41 Project.",
    cta: "Support Feed41",
    icon: "heart",
    image: "/images/volunteers-food.jpg",
  },
];

export type Subsidiary = {
  name: string;
  sector: string;
  mission: string;
  projects: string;
  image: string;
};

export const SUBSIDIARIES: Subsidiary[] = [
  {
    name: "Clapham Fellowship Africa",
    sector: "Education",
    mission:
      "Raising a generation of thinkers and leaders through scholarship, mentorship and Christian education across Africa.",
    projects: "Clapham Scholarship Fund · Leadership Cohorts · Campus Fellowships",
    image: "/images/children-class.jpg",
  },
  {
    name: "Global Open-Source Faith Project",
    sector: "Technology",
    mission:
      "Building open digital tools that put the gospel, scripture and discipleship resources in every hand, freely.",
    projects: "Scripture APIs · Discipleship Platform · Streaming Infrastructure",
    image: "/images/technology.jpg",
  },
  {
    name: "Compassion Health Initiatives",
    sector: "Health",
    mission:
      "Bringing medical outreach, mental health support and rehabilitation to underserved communities.",
    projects: "Mobile Clinics · Rehabilitation Program · Community Health Workers",
    image: "/images/heart-hands.jpg",
  },
  {
    name: "Nations Care Mission Global",
    sector: "Humanitarian",
    mission:
      "Responding to hunger, crisis and poverty with practical love — meeting needs in Jesus' name.",
    projects: "Feed41 Project · Crisis Relief · Orphan & Widow Care",
    image: "/images/volunteers-food.jpg",
  },
  {
    name: "Global Missions Fund",
    sector: "Finance & Missions",
    mission:
      "Stewarding partner giving to send missionaries, plant works and fund the spread of the gospel.",
    projects: "Missionary Support · Church Planting · Field Grants",
    image: "/images/giving.jpg",
  },
];

export const STATS = [
  { value: 41000, suffix: "+", label: "Souls Fed" },
  { value: 24, suffix: "/7", label: "Global Prayer" },
  { value: 5, suffix: "+", label: "Nations & Growing" },
];
