import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../api/apiLogout";
import toast from "react-hot-toast";

export default function () {
  const queryClient = useQueryClient();
  const { mutate :mutateLogout } = useMutation({
    mutationFn: logout,
    onError: (error) => toast.error(error),
    onSuccess: () => {
      toast.success("با موفقیت خارج شدید"), queryClient.removeQueries();
    },
  });
  return {  mutateLogout };
}
