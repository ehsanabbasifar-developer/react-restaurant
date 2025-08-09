import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="container mx-auto bg-background min-h-100 max-w-5xl">
      <Header />
      
    </div>
  );
}
