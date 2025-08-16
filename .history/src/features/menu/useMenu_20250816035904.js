import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { MENU_ROWS, menuRows } from "../../api/queryKeys";

export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: menuData,
    queryKey: MENU_ROWS,
  });
  return {data ,isLoading,error}
}