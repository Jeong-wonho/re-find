import { AlertCircle, MapIcon, Package, PlusCircle, User } from "lucide-react";
import { NavButton } from "./NavButton";

interface BottomNavProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const BottomNav = ({ activeView, onNavigate }: BottomNavProps) => (
  <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-lg border-t px-6 py-4 flex justify-between items-center pb-8 z-50">
    <NavButton
      active={activeView === "home"}
      icon={<MapIcon size={24} />}
      label="지도"
      onClick={() => onNavigate("home")}
    />
    <NavButton
      active={activeView === "feed"}
      icon={<Package size={24} />}
      label="피드"
      onClick={() => onNavigate("feed")}
    />

    <button
      onClick={() => onNavigate("post")}
      className="flex flex-col items-center -mt-12 bg-blue-600 p-4 rounded-full text-white shadow-2xl shadow-blue-300 ring-8 ring-gray-50 active:scale-90 transition-all"
    >
      <PlusCircle size={30} />
    </button>

    <NavButton
      active={activeView === "match"}
      icon={<AlertCircle size={24} />}
      label="매칭"
      onClick={() => onNavigate("match")}
    />
    <NavButton
      active={activeView === "profile"}
      icon={<User size={24} />}
      label="내정보"
      onClick={() => onNavigate("profile")}
    />
  </nav>
);
