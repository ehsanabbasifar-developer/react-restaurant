import { useMutation } from "@tanstack/react-query";

export default function useOrder () {
      const { mutate : orderMutate, isPending } = useMutation({
    mutationFn: insertOrder,
  });
}