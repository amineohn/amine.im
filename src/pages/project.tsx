import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="Projects" description="My Projects" />}>
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-10">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Projects
      </h1>
      <div className="mb-8">
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          All my first projects were here, it's a pleasure to share them with
          you. &nbsp;
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
        <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
          <div className="flex items-center text-gray-900 dark:text-gray-100">
            <img
              className="rounded-md"
              src="http://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            />
          </div>
          <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
            title app
            <a href="http://" target="_blank">
              <svg
                className="inline w-4 h-4 ml-1"
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
            </a>
          </p>
          <span className="text-gray-600 text-md dark:text-gray-50">
            resume project sir
          </span>
        </div>
        <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
          <div className="flex items-center text-gray-900 dark:text-gray-100">
            <img
              className="rounded-md"
              src="http://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            />
          </div>
          <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
            title app
            <a href="http://" target="_blank">
              <svg
                className="inline w-4 h-4 ml-1"
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
            </a>
          </p>
          <span className="text-gray-600 text-md dark:text-gray-50">
            resume project sir
          </span>
        </div>
        <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
          <div className="flex items-center text-gray-900 dark:text-gray-100">
            <img
              className="rounded-md"
              src="http://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            />
          </div>
          <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
            title app
            <a href="http://" target="_blank">
              <svg
                className="inline w-4 h-4 ml-1"
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
            </a>
          </p>
          <span className="text-gray-600 text-md dark:text-gray-50">
            resume project sir
          </span>
        </div>
        <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
          <div className="flex items-center text-gray-900 dark:text-gray-100">
            <img
              className="rounded-md"
              src="http://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            />
          </div>
          <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
            title app
            <a href="http://" target="_blank">
              <svg
                className="inline w-4 h-4 ml-1"
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
            </a>
          </p>
          <span className="text-gray-600 text-md dark:text-gray-50">
            resume project sir
          </span>
        </div>
      </div>
    </div>
  </Main>
);

export default About;
