import React, { ReactNode, useState } from "react";

import FadeIn from "react-fade-in";

import Spotify from "../components/Spotify";
import Activity from "../components/Activity";
import Navigation from "../components/Navigation";
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};
const Main = (props: IMainProps) => {
  const [presenceActive, setPresenceActive] = useState(false);
  return (
    <>
      <Navigation />
      {props.meta}
      <FadeIn className="flex flex-col justify-center px-8">
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
    </>
  );
};

export { Main };
