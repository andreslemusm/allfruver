import Document, { Head, Html, Main, NextScript } from "next/document";

// eslint-disable-next-line functional/no-class -- Necessary to extend from Document class
class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-900 font-sans text-gray-400 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
