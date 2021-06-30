/* eslint-disable react/jsx-props-no-spreading */
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="light" attribute="class">
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </ThemeProvider>
);

export default App;
