import React from "react";

export default function TransitionDetails({ data }) {
  if (!data || data.length === 0) return;
  const dateCreated = data[0].created_at;
  const now = new Date
  return <div>TransitionDetails</div>;
}
