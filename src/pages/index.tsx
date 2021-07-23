import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Repository from "../components/Repository";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
const Index = () => {
  const [Repos, setRepo] = useState({
    repos: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/amineohn/repos`)
      .then((res) => res.json())
      .then((repos) => {
        setRepo({ repos: repos });
      });
  }, [setRepo]);
  const { repos }: any = Repos;
  if (!repos || repos.length === 0)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-gray-900">
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
      <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nightBlue to-turquoise dark:bg-gradient-to-r dark:from-red-500 dark:to-red-900">
        <Profile />
        Hello, I'm Amine Ouhani
      </h1>
      <div className="mb-8">
        <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
          You have found my personal part of the Internet. I am a Full-Stack
          Junior developer.{" "}
          <svg
            className="inline w-9 h-9 mb-0.5"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0544 17.2712C35.9714 13.9402 44.0288 13.9402 50.9457 17.2712C57.8627 20.6022 62.8863 26.9018 64.5947 34.3865C66.303 41.8713 64.5101 49.7266 59.7234 55.7289C54.9367 61.7312 47.6773 65.2272 40.0001 65.2272C32.3228 65.2272 25.0634 61.7312 20.2767 55.7289C15.49 49.7266 13.6971 41.8713 15.4054 34.3865C17.1138 26.9018 22.1375 20.6022 29.0544 17.2712Z"
              fill="#F2C94C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48 45.4331C45.3872 45.8068 42.7162 46.0002 40 46.0002C37.2838 46.0002 34.6128 45.8068 32 45.4331V54.0002C32 58.4185 35.5817 62.0002 40 62.0002C44.4183 62.0002 48 58.4185 48 54.0002V45.4331Z"
              fill="#EB5757"
            />
            <path
              d="M40 46V52"
              stroke="#333333"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M52.0824 44.681C44.2258 46.417 36.0875 46.4396 28.2214 44.7473"
              stroke="#333333"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.9497 34.3431C34.2997 33.6003 33.5281 33.011 32.6788 32.609C31.8295 32.2069 30.9193 32 30 32C29.0807 32 28.1705 32.2069 27.3212 32.609C26.4719 33.011 25.7003 33.6003 25.0503 34.3431"
              stroke="#4F4F4F"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="44" y="27" width="12" height="12" rx="6" fill="#F2F2F2" />
            <path
              d="M50 32.9951V33.0051"
              stroke="#4F4F4F"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <h1 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nightBlue to-turquoise dark:bg-gradient-to-r dark:from-red-500 dark:to-red-900">
          Repository Github
        </h1>
        <div className="mb-8">
          <p className="bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
            You can find all my repository from git{" "}
            <a
              className="transition hover:underline"
              href="https://github.com/amineohn"
              target="_blank"
            >
              here
            </a>
            .{" "}
            <svg
              className="w-9 h-9 inline mb-0.5"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0542 17.2712C35.9711 13.9402 44.0285 13.9402 50.9455 17.2712C57.8624 20.6022 62.8861 26.9018 64.5944 34.3865C66.3028 41.8713 64.5099 49.7266 59.7232 55.7289C54.9365 61.7312 47.677 65.2272 39.9998 65.2272C32.3226 65.2272 25.0631 61.7312 20.2765 55.7289C15.4898 49.7266 13.6968 41.8713 15.4052 34.3865C17.1135 26.9018 22.1372 20.6022 29.0542 17.2712Z"
                fill="#F2C94C"
              />
              <path
                d="M50.6066 50.6066C47.7936 53.4196 43.9782 55 40 55C36.0218 55 32.2064 53.4196 29.3934 50.6066"
                stroke="#333333"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="31"
                cy="34"
                r="2"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M53.9497 36.3431C53.2997 35.6003 52.5281 35.011 51.6788 34.609C50.8295 34.2069 49.9193 34 49 34C48.0807 34 47.1705 34.2069 46.3212 34.609C45.4719 35.011 44.7003 35.6003 44.0503 36.3431"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;
          </p>
        </div>
        <Repository repos={repos} />
      </div>
    </Main>
  );
};

export default Index;
