import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import { Roboto_Mono } from "@next/font/google";
import { RecoilRoot } from "recoil";
import Providers from "../styles/Providers";
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Providers>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </RecoilRoot>
  );
}
