// 분실물, 습득물 구분 Type
export type ItemType = 'lost' | 'found';

export interface Item {
    id: string;
    userId: string;
    title: string;
    type: ItemType;
    category: string;
    //습득 장소
    location: string;
    date: string;
    // 이것도 ItemType처럼 Status Type으로 분리할 수 있지 않을까?
    status ?: string;
    description ?: string;
    matchScore?: number;
}

export interface UserProfile {
    id: string;
    name: string;
    //평판
    reputation: number;
    //userEmail 추후 서비스 관리를 위해서 필수
    email?: string;
    //user얼굴이 보이면 신뢰도가 조금 더 생길 수도 있음
    photoUrl?: string;
}




