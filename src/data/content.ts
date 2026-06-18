import type { LucideIcon } from "lucide-react";

export type ImpactArea = {
  icon: "health" | "community" | "climate";
  eyebrow: string;
  title: string;
  body: string;
};

export type GivingStep = {
  label: string;
  title: string;
  body: string;
};

export type FundraisingProgress = {
  goal: number;
  raised: number;
  isExample: boolean;
  title: string;
  body: string;
};

export type Partner = {
  name: string;
  location: string;
  focus: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: "kamal" | "jennifer";
  imageAlt: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type IconMap = Record<ImpactArea["icon"], LucideIcon>;

export const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Giving", href: "/donate" },
  { label: "Stories", href: "/#stories" },
  {
    label: "Get Involved",
    href: "/travel-to-nepal",
    children: [{ label: "Travel to Nepal", href: "/travel-to-nepal" }],
  },
  { label: "Our Team", href: "/team" },
  { label: "Partners", href: "/#partners" },
];

export const heroStats = [
  { value: "1952", label: "INF began serving in Nepal" },
  { value: "West Nepal", label: "Focus on remote communities" },
  { value: "Local first", label: "Led beside Nepali partners" },
];

export const impactAreas: ImpactArea[] = [
  {
    icon: "health",
    eyebrow: "Health & disability",
    title: "Specialist care with dignity",
    body: "Support holistic treatment, rehabilitation, counselling, and practical care for people too often pushed to the margins.",
  },
  {
    icon: "community",
    eyebrow: "Community strength",
    title: "Change led from within",
    body: "Help local groups build livelihoods, improve family health, and create the kind of change that lasts beyond a single project.",
  },
  {
    icon: "climate",
    eyebrow: "Disaster & climate",
    title: "Resilience before crisis",
    body: "Stand with communities preparing for floods, landslides, changing seasons, and the emergencies that follow.",
  },
];

export const givingSteps: GivingStep[] = [
  {
    label: "01",
    title: "Give with purpose",
    body: "Start with a clear fund for health, inclusion, resilience, or wherever the need is greatest.",
  },
  {
    label: "02",
    title: "Fuel local work",
    body: "Resources move through trusted INF family partnerships and locally informed priorities in Nepal.",
  },
  {
    label: "03",
    title: "Report the impact",
    body: "Stories, field updates, and transparent reporting help Canadian supporters stay close to the work.",
  },
];

export const fundraisingProgress: FundraisingProgress = {
  goal: 100000,
  raised: 68400,
  isExample: true,
  title: "Climbing toward the first INF Canada goal",
  body: "Every gift moves practical care, rehabilitation, and community resilience closer to people in Nepal who are waiting for support.",
};

export const partners: Partner[] = [
  {
    name: "Local leadership",
    location: "Community-led priorities",
    focus: "Support follows local knowledge, relationships, and long-term trust.",
  },
  {
    name: "Transparent giving",
    location: "Canadian supporters",
    focus: "Clear updates help donors see how generosity becomes practical care.",
  },
  {
    name: "Shared mission",
    location: "One INF family",
    focus: "Health, inclusion, resilience, and dignity stay at the centre of the work.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Kamal Ghamal",
    role: "President",
    bio: "Kamal was the principal of a private school in Nepal prior to his theological studies (M.Div.) at Sydney Missionary & Bible College, Australia, after which in July 2006 Kamal joined Richmond Baptist in Canada as an Associate Pastor of Youth and Young Adults. Since 2010 Kamal's role has been changed to Pastor of Outreach & Assimilation because he believes that his strength and passion is to reach out to people with the love and Gospel of our Lord Jesus Christ and to develop leaders to expand the Kingdom of God.\n\nKamal's heart desire is to see people come to know Jesus, reach their full potential, reproduce Christlike servant leaders and bring a God-honoring impact in their local and global communities. Kamal is amazed to see how God has moved him and his family to several countries to bring glory to God. Kamal often brags that in one year he had the opportunity to minister in three different multicultural cities on three different continents! Kamal has lots of God stories to share. He loves to meet people, hear their stories and build relationships. Kamal's interests include jogging, hiking, reading, and spending time with his family. He and his wife, Rajani, have 2 sons.",
    initials: "KG",
    image: "kamal",
    imageAlt: "Kamal Ghamal smiling outdoors in a gray sweater and blue plaid shirt.",
  },
  {
    name: "Jennifer Huang",
    role: "Community Development Director",
    bio: "Jennifer Huang was born and raised in Taiwan. She graduated from Shih Hsin University (SHU), a university renowned for journalism and communications, where she majored in Newspaper Administration.\n\nOver the course of a distinguished career spanning more than 40 years, Jennifer worked for three major airlines: Northwest Airlines, Canadian Airlines, and Air Canada. During her time with Northwest Airlines in Taipei, she served as the union president for the Taipei base. In this leadership role, she successfully led negotiations with management and helped secure the most favorable early retirement package in the airline's history.\n\nAfter immigrating to Canada in 1995, Jennifer was baptized as a Christian in 2000. Alongside her airline career, she served with Far East Broadcasting Company Canada, a Christian radio ministry. She hosted, produced, and broadcast the program Seasons of Love, which reached audiences across Asia, particularly in mainland China.\n\nJennifer has devoted countless hours to serving her community and church through volunteer work. Her contributions have included teaching English Language Learning (ELL) classes, facilitating DivorceCare programs, leading Chinese-language Saturday worship services, preparing meals, providing translation services, leading seniors' groups, and organizing events, celebrations, and day trips.\n\nA woman of many talents and passions, Jennifer enjoys singing, dancing, and playing musical instruments, including the ukulele, bass guitar, and drums. Above all, she loves God and people. She strives to live life to the fullest, seeking to lead a meaningful life that glorifies God and reflects His love to others.",
    initials: "JH",
    image: "jennifer",
    imageAlt: "Jennifer Huang smiling outdoors in a white jacket and green scarf.",
  },
];
