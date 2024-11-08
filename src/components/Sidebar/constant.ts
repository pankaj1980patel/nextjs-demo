import { Clock3, FolderClosed, Lock, Star } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    icon: Star,
    className: "text-orange-300 fill-orange-200",
    items: [
      "Software Engineer",
      "Computer hardware engineer",
      "Network Engineer",
      "Technical Support",
      "Network administrator",
      "Management",
      "Data analysis",
      "Computer technician",
    ],
  },
  {
    icon: Clock3,
    items: [
      "Past search 1",
      "Past search 2",
      "Computers and information...",
      "Database Administrator",
      "Computer security",
      "Computer Systems Analyst",
    ],
  },
];

export const SIDEBAR_BOARD_ITEMS = [
  {
    className: "text-orange-300 fill-orange-200",
    icon: FolderClosed,
    items: ["Board 1", "Board 2", "Board 3"],
  },
  {
    className: "",
    icon: Lock,
    items: ["Board agent 1", "Board agent 2", "Board agent 3"],
  },
];
