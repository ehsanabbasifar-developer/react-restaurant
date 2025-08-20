import { useMutation } from "@tanstack/react-query";

export default function useLogin () {
     const { mutate , is } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });
}