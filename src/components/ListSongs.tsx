import useSWR from "swr";
import FadeIn from "react-fade-in";
export default function Projects() {
  const { data } = useSWR("/api/top-tracks");
  const songs = data;
  if (!songs)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-90 dark:bg-black">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
      </div>
    );
  return (
    <>
      <FadeIn>
        {songs.map((song) => {
          return (
            <div className="flex flex-row items-baseline w-full max-w-3xl pb-2 border-b border-gray-100 dark:border-gray-800">
              <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
                {song.id}
              </p>
              <div className="flex flex-col pl-3">
                <a
                  className="font-medium text-gray-900 truncate dark:text-gray-100 w-60 sm:w-96 md:w-full"
                  href="https://open.spotify.com/track/1e1JKLEDKP7hEQzJfNAgPl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {song.title}
                </a>
                <p
                  className="mb-4 text-gray-500 truncate w-60 sm:w-96 md:w-full"
                  color="gray.500"
                >
                  {song.name}
                </p>
              </div>
            </div>
          );
        })}
      </FadeIn>
    </>
  );
}
