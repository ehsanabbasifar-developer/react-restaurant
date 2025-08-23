import { useMutation } from "@tanstack/react-query";

export default function useSignUp () {
    const {mutate : signUpMutate , isPending} = useMutation({
        fn
    })
}