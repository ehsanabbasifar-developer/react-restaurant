export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: menuD,
    queryKey: menuRows,
  });
}