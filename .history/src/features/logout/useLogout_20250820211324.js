import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../api/apiLogout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate
  const queryClient = useQueryClient();
  const { mutate: mutateLogout } = useMutation({
    mutationFn: logout,
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success("با موفقیت خارج شدید"), queryClient.removeQueries();
    },
  });
  return { mutateLogout };
}
