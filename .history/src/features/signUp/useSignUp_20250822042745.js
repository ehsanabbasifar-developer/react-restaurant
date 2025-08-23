import { useMutation } from "@tanstack/react-query";
import { apiSignup } from "../../api/apiSignup";
import toast from "react-hot-toast";

export default function useSignUp() {
    
  const { mutate: signUpMutate, isPending } = useMutation({
    mutationFn: ({ password, email, fullName, address, city, phone }) =>
      apiSignup({ password, email, fullName, address, city, phone }),
    onSuccess: () => {
      toast.success("با موفقیت ثبت نام شدید لطفا وارد شوید");

    },
  });
  return { signUpMutate, isPending };
}
