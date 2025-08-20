import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const { mutate : login, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });

  return 
}
