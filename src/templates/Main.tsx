import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased text-gray-700">
    {props.meta}

    <div className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
      <ThemeSwitcher />
      <div>
        <Link href="/">
          <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
            About
          </a>
        </Link>
        <a
          className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
          href="https://github.com/imveny/amine.im"
        >
          GitHub
        </a>
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center px-8 bg-white dark:bg-black"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
        {props.children}
      </div>
    </motion.div>

    <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8 dark:text-white">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      Vercel{' '}
    </div>
    {/* Shot out to ixartz for his Boilerplate link: https://github.com/ixartz/Next-js-Boilerplate */}
  </div>
);

export { Main };
