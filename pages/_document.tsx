import Document, { Head, Html, Main, NextScript } from "next/document";

// eslint-disable-next-line functional/no-class -- Necessary to extend from Document class
class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans text-gray-400 font-normal antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
