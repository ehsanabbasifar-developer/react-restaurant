import { useQuery } from "@tanstack/react-query";
import { TransitionOrder } from "../../api/apiTransitionOrder";
import { TRANSITION_ID } from "../../api/queryKeys";

export default function useTransitionOrder() {
  const { data, error } = useQuery({
    queryFn: (id) => TransitionOrder(id),
    queryKey: ج,
    enabled: Boolean(id),
  });
  return { data, error };
}
