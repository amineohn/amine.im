import React, { useState, useEffect } from "react";
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
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-white opacity-75 dark:bg-black">
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
        <p className="mb-4 text-gray-600 dark:text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet qui
          quidem non earum eveniet magni voluptates, odio omnis itaque quo dolor
          quibusdam iste quas. Molestias minus officiis et dolores numquam.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
          Repository Github
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-white">
            You can find all my repository from git here.&nbsp;
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
            {repos.map((repo) => {
              return (
                <div className="w-full p-4 overflow-hidden border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={repo.svn_url}
                  >
                    <div
                      key={repo.id}
                      className="flex items-center text-gray-900 dark:text-gray-100"
                    >
                      {repo.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <p className="mt-2 font-bold text-gray-800 text-md spacing-sm dark:text-white">
                    {repo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
