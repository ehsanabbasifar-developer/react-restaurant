import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedOrderRoute({ children }) {
  const isFind = useSelector((store) => store.orderItems.pizzas.length >= 1);
  const navigate = useNavigate()
  useEffect(() => {
     navigate("/menu")
  },[isFind])
 re isFind ? children : null;
}
