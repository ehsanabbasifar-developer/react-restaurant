import { useMutation } from "@tanstack/react-query";
import { apiSignup } from "../../api/apiSignup";

export default function useSignUp () {
    const {mutate : signUpMutate , isPending} = useMutation({
        mutationFn : ({password , email,fullName ,address , city ,phone}) => apiSignup()
    })
}