import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";
import toast from "react-hot-toast";

export default function useOrder() {
  const { mutate: orderMutate, isPending } = useMutation({
    mutationFn: insertOrder,
    onSuccess: () => toast.success("با موفقیت ثبت شد"),
    onError: () => toast.error("تلاش ناموفق بود دوباره تلاش کنید"),
  });
  ret
}
