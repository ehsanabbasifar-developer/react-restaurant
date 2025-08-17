export default function useMenu () {
      const { data, isLoading, error } = useQuery({
    queryFn: M,
    queryKey: menuRows,
  });
}