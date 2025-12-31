
import { cn } from "@/lib/utils";
import { ItemType } from "../../types";

//이렇게 interface를 배치하는게 과연 좋은 코드일까? 바로 어떤 타입을 어떻게 지정했다라고 보기엔 좋을 수 있지만,, 이게 좋은것인지는 모르겠다.
interface BadgeProps {
  type: ItemType;
}
export const Badge = ({ type }: BadgeProps) => (
  <span className={cn(
    "text-[10px] font-bold uppercase px-2 py-0.5 rounded",
    type === 'lost' ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
  )}>
    {type === 'lost' ? '찾아요' : '주웠어요'}
  </span>
);