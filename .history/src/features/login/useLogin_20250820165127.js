import { useMutation } from "@tanstack/react-query";

export default function useLogin () {
     const { mutate , isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });
}