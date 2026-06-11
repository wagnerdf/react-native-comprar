import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

const icons = {
  [FilterStatus.DONE]: <CircleCheck size={18} color="#2C46B1" />,
  [FilterStatus.PENDING]: <CircleDashed size={18} color="#000000" />,
};

export function StatusIcon({ status }: { status: FilterStatus }) {
  return icons[status];
}
