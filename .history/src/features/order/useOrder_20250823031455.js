import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useOrder() {
  const navigate = useNavigate()
  const {data, mutate: orderMutate, isLoading } = useMutation({
    mutationFn: insertOrder,
    onSuccess: () => {
      toast.success("سفارش با موفقیت ثبت شد");
      navigate("/order/")
    },
    onError: (err) => {
      toast.error("fuck you");
      console.log(err);
    },
  });

  return { ,orderMutate, isLoading };
}
