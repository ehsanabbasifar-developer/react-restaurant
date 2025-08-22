import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/apiLogin";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("با موفقیت وارد شدید");
        navigate("/menu", { replace: true });
        queryClient.invalidateQueries({queryKey : })
    },
    onError: () => toast.error("رمز عبور یا نام کاربری اشتباه است"),
  });

  return { mutateLogin, isPending };
}
