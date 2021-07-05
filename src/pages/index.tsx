import React, { useState, useEffect } from "react";
import Repository from "../components/Repository";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Index = () => {
  const [Repos, setRepo] = useState({
    repos: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/imveny/repos`)
      .then((res) => res.json())
      .then((repos) => {
        setRepo({ repos: repos });
      });
  }, [setRepo]);
  const { repos }: any = Repos;
  if (!repos || repos.length === 0)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
      </div>
    );
  return (
    <Main
      meta={
        <Meta
          title="Amine"
          description="My Personal website made with NextJS & Tailwind."
        />
      }
    >
      <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
        Hello, I'm Amine Ouhani
      </h1>
      <div className="mb-8">
        <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
          You have found my personal part of the Internet. I am a Full-Stack
          Junior developer. 😁
        </p>
      </div>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
          Repository Github
        </h1>
        <div className="mb-8">
          <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
            You can find all my repository from git here. 💯&nbsp;
          </p>
        </div>
        <Repository repos={repos} />
      </div>
    </Main>
  );
};

export default Index;
