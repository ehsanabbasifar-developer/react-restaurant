import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiLogin";

export default function useCurrentUser () {
   const {data ,isPending} =  useQuery({
    queryFn : getCurrentUser , 
    
   })
} 