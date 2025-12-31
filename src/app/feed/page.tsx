"use client";

import { ItemCard } from "@/components/ui/ItemCard";
import { CATEGORIES } from "@/lib/constants";
import { Item } from "@/types";

const FeedPage = ({ items }: { items: Item[] }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b overflow-x-auto no-scrollbar flex gap-2 p-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="px-5 py-2 rounded-full whitespace-nowrap text-sm font-bold bg-gray-100 text-gray-500"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="p-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
