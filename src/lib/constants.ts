import { Item } from "@/types";


const CATEGORIES = ['전체', '디지털', '지갑', '자동차', '반려동물', '기타'];

const MOCK_USER = {
  id: 'user123',
  name: '정원호',
  reputation: 37.5,
};

const INITIAL_ITEMS:Item[] = [
  { id: '1', userId: 'user123', title: '영종도 주차장 차키', type: "lost", category: '자동차', location: '인천 중구 운서동', date: '2시간 전' },
  { id: '2', userId: 'admin', title: '검은색 가죽 지갑', type: "found", category: '지갑', location: '서울 마포구', date: '30분 전' },
  { id: '3', userId: 'user123', title: '아이폰 15 프로', type: "lost", category: '디지털', location: '강남역 10번 출구', date: '5시간 전' },
];

export {CATEGORIES, MOCK_USER, INITIAL_ITEMS}