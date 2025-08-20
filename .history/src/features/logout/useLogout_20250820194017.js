import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../api/apiLogout";

export default function () {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn : logout
    })
}