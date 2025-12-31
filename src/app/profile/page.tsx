"use client"

import { MOCK_USER } from "@/lib/constants";
import { UserProfile } from "@/types";
import { LogIn, User } from "lucide-react";

/**
 * ProfilePage 컴포넌트
 * 사용자 정보(user)와 상태 변경 함수(setUser)를 props로 받아 렌더링합니다.
 */
interface ProfilePageProps {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}

const ProfilePage = ({ user, setUser }: ProfilePageProps) => {
  return (
    <div className="p-8 text-center animate-in zoom-in duration-300">
      {!user ? (
        <div className="py-20 flex flex-col items-center">
          <LogIn size={40} className="text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold mb-8 text-gray-800">로그인이 필요합니다</h2>
          <button
            onClick={() => setUser(MOCK_USER)}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all"
          >
            카카오로 시작하기
          </button>
        </div>
      ) : (
        <div>
          <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 border-4 border-white shadow-lg flex items-center justify-center">
            <User size={48} className="text-blue-200" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">{user.name} 님</h2>
          <p className="text-blue-600 text-sm font-bold mt-1">
            신뢰 온도 {user.reputation}°C
          </p>
          <button
            onClick={() => setUser(null)}
            className="mt-10 text-red-500 font-bold text-sm hover:underline"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;