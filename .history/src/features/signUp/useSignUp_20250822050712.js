import { useMutation } from "@tanstack/react-query";
import { apiSignup } from "../../api/apiSignup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUpMutate, isPending } = useMutation({
    mutationFn: ({ password, email, fullName, address, city, phone }) =>
      apiSignup({ password, email, fullName, address, city, phone }),
    onSuccess: () => {
      toast.success(" با موفقیت ثبت نام شدید");
      navigate("/menu");
    },
    onError: () => toast.error("لطفا دوباره تلاش کنید"),
  });
  return { signUpMutate, isPending };
}
