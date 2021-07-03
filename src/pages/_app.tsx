import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/main.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="system" attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
