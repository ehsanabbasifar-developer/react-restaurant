import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="mx-auto bg-background min-h-screen max-w-5xl">
      <Header />
      <div>

      {children}
      </div>
      <Footer />
    </div>
  );
}
