import React from "react";

export default function TransitionDetails({ data }) {
  if (!data || data.length === 0) return;
  const dateCreated = new Date(data[0].created_at).getTime();

  const diffMs = new Date() - dateCreated;
  const diff
  return <div>TransitionDetails</div>;
}
