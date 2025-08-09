import React from "react";

export default function Footer() {
  return (
    <div className="bg-yellow-400 mt-36 p-3">
      <h3 className="text-center font-bold 
      text-lg">رستوران ری اکت اصفهان</h3>
      <p>© {new Date().get} YourCompanyName. All rights reserved.
</p>
    </div>
  );
}
