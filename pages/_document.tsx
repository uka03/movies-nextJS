import Layot from "@/components/Layot";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Layot>
          <Main />
          <NextScript />
        </Layot>
      </body>
    </Html>
  );
}
