import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { MENU_ROWS } from "../../api/queryKeys";

export default function useMenu() {
  const { data, isLoading, error } = useQuery({
    queryFn: menuData,
    queryKey: MENU_ROWS,
  });
  console.log(data);
  
  return { data, isLoading, error };
}
