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
        <meta
          property="description"
          content="Free and no-ads manga reading website, provide high-quality images with a comprehensive finding system, helps you easier to find your favourite manga"
        />
        <meta property="URL" content="https://mangazine.site/" />
        <meta property="type" content="website" />
      </Head>
      <body className="bg-bg-color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
