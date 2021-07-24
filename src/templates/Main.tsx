import React, { ReactNode, useState } from "react";

import { useRouter } from "next/router";
import FadeIn from "react-fade-in";

import Spotify from "../components/Spotify";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import Activity from "../components/Activity";
import { Dropdown } from "../components/Dropdown";
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};
const Main = (props: IMainProps) => {
  const router = useRouter();
  const [presenceActive, setPresenceActive] = useState(false);
  return (
    <>
      {props.meta}
      <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-gray-900 md:my-8 dark:text-gray-100">
        <ThemeSwitcher />
        <div>
          <a
            onClick={() => router.push("/")}
            className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
          >
            Home
          </a>
          <a
            onClick={() => router.push("/about")}
            className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
          >
            About
          </a>
          <a
            onClick={() => router.push("/project")}
            className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
          >
            Projects
          </a>
          <Dropdown />
        </div>
      </div>
      <main className="flex flex-col justify-center px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
            {props.children}
          </div>

          <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
            <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-200" />
            <div className="flex w-full overflow-hidden">
              <Spotify />
            </div>
            <Activity
              setActive={setPresenceActive}
              style={{ display: presenceActive ? "block" : "none" }}
            />
          </footer>
        </FadeIn>
      </main>
    </>
  );
};

export { Main };
