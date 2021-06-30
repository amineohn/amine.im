/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
