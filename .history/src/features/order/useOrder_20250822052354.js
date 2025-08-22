import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";

export default function useOrder () {
      const { mutate : orderMutate, isPending } = useMutation({
    mutationFn: insertOrder, on
  });
}