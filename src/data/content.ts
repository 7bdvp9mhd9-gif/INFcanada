import type { LucideIcon } from "lucide-react";

export type ImpactArea = {
  icon: "women" | "community" | "hospital";
  eyebrow: string;
  title: string;
  body: string;
  href: string;
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
  image?: "kamal" | "jennifer" | "arjun" | "david" | "evelyn";
  imageAlt?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type IconMap = Record<ImpactArea["icon"], LucideIcon>;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/team",
    children: [
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Our Mandate", href: "/our-mandate" },
      { label: "Core Values", href: "/core-values" },
      { label: "Our Team", href: "/team" },
    ],
  },
  { label: "Our Core Projects", href: "/what-we-do" },
  { label: "Our Purpose", href: "/our-purpose" },
  {
    label: "Get Involved",
    href: "/travel-to-nepal",
    children: [{ label: "Travel to Nepal", href: "/travel-to-nepal" }],
  },
];

export const heroStats = [
  { value: "1952", label: "INF began serving in Nepal" },
  { value: "West Nepal", label: "Focus on remote communities" },
  { value: "Holistic care", label: "Health, inclusion, and community transformation" },
];

export const impactAreas: ImpactArea[] = [
  {
    icon: "women",
    eyebrow: "Women's capacity building",
    title: "Women's Capacity Building Project",
    body: "Equip women in Nepal with practical training, mentoring, and encouragement for dignity, leadership, and long-term resilience.",
    href: "/what-we-do#womens-capacity",
  },
  {
    icon: "community",
    eyebrow: "Community transformation",
    title: "Community Transformation Project",
    body: "Support community-led projects in Kapilvastu that strengthen opportunity, wellbeing, and practical resources for families.",
    href: "/what-we-do#kapilvastu-transformation",
  },
  {
    icon: "hospital",
    eyebrow: "Medical charity project",
    title: "Medical Charity Project",
    body: "Help provide treatment, rehabilitation, and mobility support through INF Green Pastures hospital care for people who need it most.",
    href: "/what-we-do#medical-charity",
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
  {
    name: "David Stevens",
    role: "Director",
    bio: '"Serving others is my privilege; inspiring others to serve, my passion."\n\nDavid Stevens has retired from a career of facilitating communities, organizations and individuals as a trusted adviser and mentor. His motto has been "Serving others is my privilege; inspiring others to serve, my passion." He had extensive experience in providing leadership to individuals and organizations with a focus on building sustainable human service institutions and community organizations.\n\nDavid served in Kathmandu, Nepal with the United Mission to Nepal (1984 - 99) and with the International Nepal Fellowship (2007 - 10). He has also taught a variety of courses over several years at Prairie Bible College. His professional degrees are an MSW in Community Development and Social Planning (1983) and a Doctorate in Education (2007).\n\nDavid and Carol Stevens were Partners with Interserve for over 27 years. They are now both enjoying retirement in Three Hills, Alberta. They have two married children and four grandchildren.',
    initials: "DS",
    image: "david",
    imageAlt: "David Stevens smiling outdoors in front of greenery.",
  },
  {
    name: "Evelyn Villanueva",
    role: "Director",
    bio: "Evelyn Villanueva is an Accountant (CPA, Phils) and has worked at UPS Canada for 22 years. She was previously the Managing Partner and auditor of CVC CPAs Philippines from 1997 - 2001, providing audit and bookkeeping services to small businesses and non-profit organizations in the Philippines.\n\nShe was also an accredited auditor of EZE (Evangelische Zentralstelle fur Entwicklungshilfe e.V., Protestant Association for Cooperation in Development), ensuring grant compliance for support given to local NGO partners.\n\nEvelyn combines technical expertise with a deep commitment to ethical stewardship, helping ensure every dollar supports the mission and sustainable development through transparent reporting. She is currently working as Bookkeeper at Gilmore Park United Church in Richmond, BC, Canada.",
    initials: "EV",
    image: "evelyn",
    imageAlt: "Evelyn Villanueva standing indoors in a red plaid shirt.",
  },
  {
    name: "Arjun Pandey",
    role: "Director",
    bio: "Arjun is a construction/project management professional. He is currently living and working in Toronto, Canada. He has worked in United Nations Development Program (UNDP) projects as well as in United Mission to Nepal (UMN) in Nepal for several years in various capacities.",
    initials: "AP",
    image: "arjun",
    imageAlt: "Arjun Pandey wearing a gray polo shirt against a light background.",
  },
];
