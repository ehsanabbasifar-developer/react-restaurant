import { useQuery } from "@tanstack/react-query";
import { TransitionOrder } from "../../api/apiTransitionOrder";

export default function useTransitionOrder () {
    const {data} = useQuery({queryFn : TransitionOrder , queryKey :TRA})
}