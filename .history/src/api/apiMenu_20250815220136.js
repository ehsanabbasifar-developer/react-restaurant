import { data } from "react-router-dom";
import supabase from "./supabase";

export async function menuData() {
  try {
    let { data, error } = await supabase.from("menu").select("*");
    if (error) throw new Error("we found error in you api")
        return {data , error}
  } catch (err) {
console.log(err.message);
return {err,data}
}
}
