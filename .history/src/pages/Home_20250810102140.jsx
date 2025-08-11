import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import IntroLayout from "../layout/"

export default function Home() {
  return (
    <AppLayout>
      <Main>
        <>
          <IntroLayout />
        </>
      </Main>
    </AppLayout>
  );
}
