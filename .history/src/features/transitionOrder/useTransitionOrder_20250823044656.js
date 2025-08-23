import { useQuery } from "@tanstack/react-query";
import { apiTransitionOrder } from "../../api/apiTransitionOrder";
import { TRANSITION_ID } from "../../api/queryKeys";

export default function useTransitionOrder(id) {
  const { data, error , isFetched ,is } = useQuery({
    queryFn: () => apiTransitionOrder(id),
    queryKey: [TRANSITION_ID, id],
    enabled: Boolean(id),
  });
 
  return { data, error, isFetched };
}
