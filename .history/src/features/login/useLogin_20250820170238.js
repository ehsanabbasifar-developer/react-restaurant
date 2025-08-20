import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => toast.success("با موفقیت وارد ش"),
    onError : () => toast.error("رمز عبور یا نام کاربری اشتباه است")
  });

  return { mutateLogin, isPending };
}
