import type { AppProps } from "next/app";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
