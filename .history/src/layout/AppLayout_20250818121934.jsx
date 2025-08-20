import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="mx-auto flex flex-col bg-background min-h-screen max-w-5xl">
      <Header />
      <div className="flex-grow bg-gray-100">

      {children}
      </div>
      <Footer />
    </div>
  );
}
