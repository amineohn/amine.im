import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Projects from "../components/Projects";
const Project = () => {
  return (
    <Main meta={<Meta title="Projects" description="My Projects" />}>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-conic-b from-yellow-500 via-purple-500 to-blue-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400 md:text-5xl">
          Projects
        </h1>
        <div className="mb-8">
          <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
            All my first projects were here, it's a pleasure to share them with
            you. 😊&nbsp;
          </p>
        </div>
        <Projects />
      </div>
    </Main>
  );
};

export default Project;
