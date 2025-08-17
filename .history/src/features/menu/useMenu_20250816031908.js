import { useQuery } from "@tanstack/react-query";

export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
}