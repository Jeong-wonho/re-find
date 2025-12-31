"use client"

import { Bell, Search } from "lucide-react"

interface GlobalHeaderProps {
    onNavigate: (view: string) => void
}

export const GlobalHeader = ({onNavigate}: GlobalHeaderProps) => (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b p-4 flex justify-between items-center">
    <button onClick={() => onNavigate('home')} className="text-2xl font-black text-blue-600 tracking-tighter">
      RE-FIND
    </button>
    <div className="flex gap-4 text-gray-400">
      <Search size={22} className="hover:text-blue-600 cursor-pointer" />
      <Bell size={22} className="hover:text-blue-600 cursor-pointer" />
    </div>
  </header>
)