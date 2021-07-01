import { ReactNode } from 'react';

import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in';

import Spotify from '../components/Spotify';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};
const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <>
      {props.meta}

      <div className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 sticky-nav md:my-8 bg-opacity-60 dark:text-gray-100">
        <ThemeSwitcher />
        <div>
          <a
            onClick={() => router.push('/')}
            className="p-1 font-medium text-gray-900 cursor-pointer sm:p-4 dark:text-gray-100"
          >
            Home
          </a>
          <a
            onClick={() => router.push('/about')}
            className="p-1 font-medium text-gray-900 cursor-pointer sm:p-4 dark:text-gray-100"
          >
            About
          </a>
          <a
            onClick={() => router.push('/project')}
            className="p-1 font-medium text-gray-900 cursor-pointer sm:p-4 dark:text-gray-100"
          >
            Projects
          </a>
          <a
            className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
            href="https://github.com/imveny/amine.im"
          >
            GitHub
          </a>
        </div>
      </div>
      <main className="flex flex-col justify-center px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
            {props.children}
          </div>

          <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
            <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-200" />
            <Spotify />
          </footer>
        </FadeIn>
      </main>
      {/* Shotout to ixartz for his Boilerplate link: https://github.com/ixartz/Next-js-Boilerplate */}
    </>
  );
};

export { Main };
