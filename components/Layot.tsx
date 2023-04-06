import Head from "next/head";
import { ReactNode } from "react";

import Header from "./Header";

type propType = {
  children: ReactNode;
};

export default function Layot({ children }: propType): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>Rotten tomatoes</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}
