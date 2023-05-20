import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mangazine</title>
        <meta
          name="google-site-verification"
          content="oVr2qOSHJpPbvUVt1731vAgcnhNdcN7oEgQdC43c2dI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-bg-color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
