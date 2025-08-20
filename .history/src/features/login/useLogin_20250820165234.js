import { useMutation } from "@tanstack/react-query";

export default function useLogin({email,}) {
  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });

  return { mutateLogin, isPending };
}
