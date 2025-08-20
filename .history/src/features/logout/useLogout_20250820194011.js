import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/apiLogout";

export default function () {
    const queryClient = use
    const {mutate} = useMutation({
        mutationFn : logout
    })
}