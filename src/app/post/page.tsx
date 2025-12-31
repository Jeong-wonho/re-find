"use client";

import { Camera, Search, X } from "lucide-react";

/**
 * PostPage 컴포넌트
 * 내비게이션 처리를 위한 onClick 함수를 props로 받아 렌더링합니다.
 */
interface PostPageProps {
  onClick: (view: string) => void;
}

const PostPage = ({ onClick }: PostPageProps) => {
  return (
    <div className="animate-in slide-in-from-bottom duration-300 p-6 flex flex-col bg-white min-h-[calc(100vh-160px)]">
      <div className="flex justify-end">
        <button
          onClick={() => onClick("home")}
          className="p-2 bg-gray-100 rounded-full text-gray-500 active:scale-90 transition-transform"
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center py-8">
        <h2 className="text-3xl font-black mb-2 text-gray-800">제보하기</h2>
        <p className="text-gray-500 text-sm mb-8 font-medium">
          소중한 물건을 찾는 가장 따뜻한 방법
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => onClick("lost-report")}
            className="p-8 bg-red-50 border-2 border-red-100 rounded-3xl flex flex-col items-center active:scale-95 transition-all group"
          >
            <Search
              size={32}
              className="text-red-500 mb-4 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold text-red-600">
              물건을 잃어버렸어요
            </span>
            <span className="text-\[11px\] text-red-400 mt-1">
              분실 신고서 작성하기
            </span>
          </button>
          <button
            onClick={() => onClick("found-report")}
            className="p-8 bg-green-50 border-2 border-green-100 rounded-3xl flex flex-col items-center active:scale-95 transition-all group"
          >
            <Camera
              size={32}
              className="text-green-500 mb-4 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold text-green-600">
              물건을 주웠어요
            </span>
            <span className="text-[11px] text-green-400 mt-1">
              습득물 상세 제보하기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
