//Utils
import { Badge } from "./Badge";
import { ChevronRight, MapPin, Package } from "lucide-react";

//Types
import { Item } from "../../types";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  item: Item;
  onClick?: (item: Item) => void;
}

export const ItemCard = ({ item, onClick }: ItemCardProps) => (
  <div
    onClick={() => onClick?.(item)}
    className="bg-white p-4 mb-3 rounded-2xl border border-gray-100 shadow-sm flex gap-4 active:scale-[0.98] transition-all cursor-pointer"
  >
    <div
      className={cn(
        "w-20 h-20 rounded-xl flex items-center justify-center shrink-0",
        item.type === "lost" ? "bg-red-50" : "bg-green-50"
      )}
    >
      <Package
        className={item.type === "lost" ? "text-red-400" : "text-green-400"}
        size={32}
      />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <Badge type={item.type} />
        <span className="text-[11px] text-gray-400">{item.date}</span>
      </div>
      <h3 className="font-semibold text-gray-800 mt-1 truncate">
        {item.title}
      </h3>
      <div className="flex items-center text-gray-500 text-xs mt-2">
        <MapPin size={12} className="mr-1" />
        <span className="truncate">{item.location}</span>
      </div>
    </div>
    <ChevronRight className="self-center text-gray-300 shrink-0" size={20} />
  </div>
);