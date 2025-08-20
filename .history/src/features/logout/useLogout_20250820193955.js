import { useMutation } from "@tanstack/react-query";

export default function () {
    const {mutate} = useMutation({
        mutationFn : logou
    })
}