import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import MenuIntro from "../features/RestaurantIntro/MenuIntro";


export default function Home() {
  return (
    <AppLayout>
      <Main>
        <>
          <IntroLayout/>
        </>
      </Main>
    </AppLayout>
  );
}
