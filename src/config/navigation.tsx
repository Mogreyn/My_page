import { VscPerson, VscTools, VscBook, VscMail, VscDashboard } from "react-icons/vsc";

export const NAV_ITEMS = [
  {
    label: <VscPerson size={24} />,
    sectionId: "about",
    scrollPosition: "start",
  },
  {
    label: <VscTools size={24} />,
    sectionId: "tech",
    scrollPosition: "center",
  },
  { label: <VscDashboard size={24} />, sectionId: "xp", scrollPosition: "start" },
  { label: <VscBook size={24} />, sectionId: "ed", scrollPosition: "start" },
  {
    label: <VscMail size={24} />,
    sectionId: "contact",
    scrollPosition: "start",
  },
] as const;
