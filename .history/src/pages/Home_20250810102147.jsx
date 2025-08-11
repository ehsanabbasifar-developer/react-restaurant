import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import IntroLayout from "../layout/IntroLayout"

export default function Home() {
  return (
    <AppLayout>
      <Main>
        <>
          <IntroLayout  messa/>
        </>
      </Main>
    </AppLayout>
  );
}
