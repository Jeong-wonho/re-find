"use client";

import { useState } from "react";

import { INITIAL_ITEMS } from "@/lib/constants";
import { Item, UserProfile } from "@/types";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import HomePage from "./home/page";
import FeedPage from "./feed/page";
import PostPage from "./post/page";
import ProfilePage from "./profile/page";
import MatchPage from "./match/page";

export default function App() {
  const [currentView, setCurrentView] = useState<string>("home");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [items] = useState<Item[]>(INITIAL_ITEMS);

  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto shadow-2xl relative border-x overflow-y-auto pb-28">
      <GlobalHeader onNavigate={setCurrentView} />

      <main>
        {currentView === "home" && <HomePage items={items} />}
        {currentView === "feed" && <FeedPage items={items} />}

        {currentView === "post" && (
          <PostPage onClick={(view) => setCurrentView(view)} />
        )}

        {currentView === "profile" && (
          <ProfilePage user={user} setUser={setUser} />
        )}
        {currentView === "match" && <MatchPage />}
      </main>

      <BottomNav activeView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}
