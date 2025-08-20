import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiLogin";
import { USER } from "../../api/queryKeys";

export default function useCurrentUser() {
  const { data, isPending } = useQuery({
    queryFn: getCurrentUser,
    queryKey: USER,
  });
  console.log(data);
  return { isAuth: data.role === "authenticated", isPending };
}
