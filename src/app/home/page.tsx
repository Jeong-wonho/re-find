"use client";

import { ItemCard } from "@/components/ui/ItemCard";
import { Item } from "@/types";
import { MapPin } from "lucide-react";

const HomePage = ({ items }: { items: Item[] }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative w-full h-[50vh] bg-gray-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-linear-to-br from-blue-100 to-indigo-200" />
        <div className="z-10 text-center bg-white/90 p-6 rounded-3xl shadow-xl backdrop-blur-md border border-white max-w-[85%]">
          <MapPin
            className="text-blue-600 animate-bounce mx-auto mb-3"
            size={32}
          />
          <p className="font-bold text-gray-800 text-lg">내 주변 탐색</p>
          <p className="text-sm text-gray-500 mb-4">
            영종도 근처의 분실물 정보를 확인해보세요
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-all">
            현 위치에서 검색
          </button>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
          <span className="w-1 h-5 bg-blue-600 rounded-full mr-2" />
          최근 업데이트
        </h2>
        {items.slice(0, 3).map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
