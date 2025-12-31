"use client"

import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface NavButtonProps {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export const NavButton = ({ active, icon, label, onClick }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center transition-colors outline-none",
      active ? "text-blue-600" : "text-gray-300"
    )}
  >
    {icon}
    <span className="text-[10px] mt-1 font-bold">{label}</span>
  </button>
);
