export default function useMenu () {
      const { data, isLoading, error } = useq({
    queryFn: menuData,
    queryKey: menuRows,
  });
}