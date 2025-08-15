import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";

export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  return {data ,isLoading,error}
}