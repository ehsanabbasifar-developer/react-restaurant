import { useQuery } from "@tanstack/react-query";
import { TransitionOrder } from "../../api/apiTransitionOrder";
import { TRANSITION_ID } from "../../api/queryKeys";

export default function useTransitionOrder() {
  const { data , error } = useQuery({
    queryFn: TransitionOrder,
    queryKey: TRANSITION_ID,
  });
  return {data , err}
}
