import useSWR from "swr";
import FadeIn from "react-fade-in";
export default function Projects() {
  const { data } = useSWR("/api/projects");
  const projects = data;
  if (!projects)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
      </div>
    );
  return (
    <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
      {projects.map((project) => {
        return (
          <FadeIn>
            <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-900 max-w-72">
              <div className="flex items-center text-gray-900 dark:text-gray-100">
                <img className="rounded-md" src={project.image} />
              </div>
              <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
                {project.name}
                <a href={project.link} target="_blank">
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
              <span className="text-sm text-gray-800 dark:text-gray-50">
                {project.resume}
              </span>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
