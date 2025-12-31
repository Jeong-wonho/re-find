"use client";

import { CheckCircle2 } from "lucide-react";

const MatchPage = () => {
  return (
    <div className="p-10 text-center animate-in fade-in flex flex-col items-center justify-center h-[70vh]">
      <div className="bg-blue-50 p-6 rounded-full mb-6">
        <CheckCircle2 size={64} className="text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        지능형 매칭 리포트
      </h2>
      <p className="text-gray-500 mb-8 max-w-\[240px\]">
        AI가 분실물과 습득물 사이의 연관성을 실시간으로 분석합니다.
      </p>
      <div className="w-full max-w-\[280px\] h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-blue-600 w-3/4 animate-pulse rounded-full" />
      </div>
    </div>
  );
};

export default MatchPage;
