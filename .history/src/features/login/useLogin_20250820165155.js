import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const { mutate : loginM, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });

  return 
}
