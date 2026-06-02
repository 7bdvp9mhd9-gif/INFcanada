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

export const partners: Partner[] = [
  {
    name: "INF Nepal",
    location: "Pokhara and western Nepal",
    focus: "Healthcare, hospitals, disability inclusion, and community development.",
  },
  {
    name: "INF UK",
    location: "United Kingdom",
    focus: "Global INF family support, storytelling, fundraising, and partner mobilisation.",
  },
  {
    name: "INF Australia",
    location: "Australia",
    focus: "Community empowerment, health equity, climate resilience, and supporter engagement.",
  },
];
