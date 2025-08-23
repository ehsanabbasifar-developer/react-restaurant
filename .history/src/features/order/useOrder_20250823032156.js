import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useOrder() {
  const navigate = useNavigate();
  const {
    data,
    mutate: orderMutate,
    isLoading,
  } = useMutation({
    mutationFn: insertOrder,
    onSuccess: (data) => {
      toast.success("سفارش با موفقیت ثبت شد");
      navigate(`/order/${data[0].transaction_id}`);
    },
    onError: (err) => {
      toast.error("");
      console.log(err);
    },
  });

  return { orderMutate, isLoading };
}
