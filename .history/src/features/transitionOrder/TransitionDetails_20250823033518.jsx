import React from "react";

export default function TransitionDetails({ data }) {
  if (!data || data.length === 0) return;
  const dateCreated = new Date(data[0].created_at);
  console.log(data);
  
  const now = new Date();
  return <div>TransitionDetails</div>;
}
