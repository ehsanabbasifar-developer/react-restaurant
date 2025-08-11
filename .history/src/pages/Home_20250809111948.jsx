import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import MenuIntro from "../RestaurantIntro/MenuIntro";

export default function Home() {
  return (
    <AppLayout>
     <Main>
      <>
      <MenuIntro/>
      </>
     </Main>
    </AppLayout>
  );
}
