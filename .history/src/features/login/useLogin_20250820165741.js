import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess : () => toas
  });

  return { mutateLogin, isPending };
}
