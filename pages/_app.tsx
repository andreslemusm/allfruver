import type { AppProps } from "next/app";
import { Layout } from "@components/layout";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
