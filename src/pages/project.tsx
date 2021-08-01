import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Projects from "../components/Projects";
const Project = () => {
  return (
    <Main meta={<Meta title="Projects" description="My Projects" />}>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-nightBlue to-turquoise dark:bg-gradient-to-r dark:from-indigo-200 dark:to-indigo-400 md:text-5xl">
          Projects
        </h1>
        <div className="mb-8">
          <p className="mb-4 font-light bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
            All my first projects were here, it's a pleasure to share them with
            you.{" "}
            <svg
              className="w-9 h-9 inline mb-0.5"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0544 17.2712C35.9714 13.9402 44.0288 13.9402 50.9457 17.2712C57.8627 20.6022 62.8863 26.9018 64.5947 34.3865C66.303 41.8713 64.5101 49.7266 59.7234 55.7289C54.9367 61.7312 47.6773 65.2272 40.0001 65.2272C32.3228 65.2272 25.0634 61.7312 20.2767 55.7289C15.49 49.7266 13.6971 41.8713 15.4054 34.3865C17.1138 26.9018 22.1375 20.6022 29.0544 17.2712Z"
                fill="#F2C94C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.9001 45C26.3601 47.1618 27.3166 49.2161 28.7295 50.9879C31.4648 54.4178 35.613 56.4155 40 56.4155C44.387 56.4155 48.5353 54.4178 51.2705 50.9879C52.6835 49.2161 53.6399 47.1618 54.0999 45H25.9001Z"
                fill="#333333"
              />
              <path
                d="M34.9497 34.3431C34.2997 33.6003 33.5281 33.011 32.6788 32.609C31.8295 32.2069 30.9193 32 30 32C29.0807 32 28.1705 32.2069 27.3212 32.609C26.4719 33.011 25.7003 33.6003 25.0503 34.3431"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54.9497 34.3431C54.2997 33.6003 53.5281 33.011 52.6788 32.609C51.8295 32.2069 50.9193 32 50 32C49.0807 32 48.1705 32.2069 47.3212 32.609C46.4719 33.011 45.7003 33.6003 45.0503 34.3431"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;
          </p>
        </div>
        <Projects />
      </div>
    </Main>
  );
};

export default Project;
