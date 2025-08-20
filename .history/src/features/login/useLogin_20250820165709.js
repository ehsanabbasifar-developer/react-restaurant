import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
    const queryClient = useQueryClient()
    const navigate
  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });

  return { mutateLogin, isPending };
}
