import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";
import toast from "react-hot-toast";

export default function useOrder() {
  const { mutate: orderMutate, isLoading } = useMutation({
    mutationFn: insertOrder,
    onSuccess: () => toast.success("سفارش با موفقیت ثبت شد"),
    onError: (err) => {
      toast.error(err.message);
      log
    },
  });

  return { orderMutate, isLoading };
}
