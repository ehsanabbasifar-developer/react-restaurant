import React from "react";
import AppLayout from "../layout/AppLayout";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <AppLayout>
        <div>
            
        </div>
      <Link to={"/menu"} className="bg-blue-600"> ⬅️ back to menu</Link>
    </AppLayout>
  );
}
