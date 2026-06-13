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

export type IconMap = Record<ImpactArea["icon"], LucideIcon>;

export const navItems = ["Work", "Giving", "Stories", "Partners"];

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
