export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: menu,
    queryKey: menuRows,
  });
}