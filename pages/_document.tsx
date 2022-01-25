import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
