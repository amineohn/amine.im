import NextLink from "next/link";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "react-fade-in";

export const Dropdown = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const toggleActive = () => setActive((active) => !active);
  useClickAway(ref, () => setActive(false));

  return (
    <>
      <button
        onClick={() => toggleActive()}
        aria-label="Dropdown"
        className="p-1 font-medium transition duration-300 ease-in-out cursor-pointer focus:outline-none text-turquoise dark:text-red-500"
      >
        {active ? (
          <svg
            className="inline w-10 h-10 m-0 mt-2 fill-current"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.1343 35.9999H30.7911C29.0093 35.9999 28.117 33.8457 29.3769 32.5857L38.5485 23.4142C39.3295 22.6331 40.5959 22.6331 41.3769 23.4142L50.5485 32.5857C51.8084 33.8457 50.9161 35.9999 49.1343 35.9999Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="inline w-10 h-10 m-0 mt-2 stroke-current"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.1343 35.9999H30.7911C29.0093 35.9999 28.117 33.8457 29.3769 32.5857L38.5485 23.4142C39.3295 22.6331 40.5959 22.6331 41.3769 23.4142L50.5485 32.5857C51.8084 33.8457 50.9161 35.9999 49.1343 35.9999Z"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {active && (
          <>
            <FadeIn className="flex justify-end mr-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                onMouseLeave={() => setActive(false)}
                className="absolute grid flex-col items-end gap-3 py-3 pl-4 pr-12 ml-5 text-xs font-normal bg-white border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800"
              >
                <NextLink href="#">
                  <a
                    onClick={() => setActive(false)}
                    className="flex flex-row items-center transition duration-300 ease-in-out focus:outline-none hover:text-turquoise dark:hover:text-red-500"
                  >
                    Setup
                  </a>
                </NextLink>
                <NextLink href="#">
                  <a
                    onClick={() => setActive(false)}
                    className="flex flex-row items-center transition duration-300 ease-in-out focus:outline-none hover:text-turquoise dark:hover:text-red-500"
                  >
                    Discord
                  </a>
                </NextLink>
                <div className="flex space-x-1">
                  <a
                    onClick={() => setActive(false)}
                    href="https://www.instagram.com/amineohn/"
                    target="_blank"
                    className="flex flex-row items-center transition duration-300 ease-in-out focus:outline-none hover:text-turquoise dark:hover:text-red-500"
                  >
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      className="w-3 h-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M40 47.5C44.1421 47.5 47.5 44.1421 47.5 40C47.5 35.8579 44.1421 32.5 40 32.5C35.8579 32.5 32.5 35.8579 32.5 40C32.5 44.1421 35.8579 47.5 40 47.5Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41 20H39C34.7171 20 31.8056 20.0039 29.5552 20.1878C27.3631 20.3669 26.2421 20.6915 25.4601 21.0899C23.5785 22.0487 22.0487 23.5785 21.0899 25.4601C20.6915 26.2421 20.3669 27.3631 20.1878 29.5552C20.0039 31.8056 20 34.7171 20 39V41C20 45.2829 20.0039 48.1944 20.1878 50.4448C20.3669 52.6369 20.6915 53.7579 21.0899 54.5399C22.0487 56.4215 23.5785 57.9513 25.4601 58.9101C26.2421 59.3085 27.3631 59.6331 29.5552 59.8122C31.8056 59.9961 34.7171 60 39 60H41C45.2829 60 48.1944 59.9961 50.4448 59.8122C52.6369 59.6331 53.7579 59.3085 54.5399 58.9101C56.4215 57.9513 57.9513 56.4215 58.9101 54.5399C59.3085 53.7579 59.6331 52.6369 59.8122 50.4448C59.9961 48.1944 60 45.2829 60 41V39C60 34.7171 59.9961 31.8056 59.8122 29.5552C59.6331 27.3631 59.3085 26.2421 58.9101 25.4601C57.9513 23.5785 56.4215 22.0487 54.5399 21.0899C53.7579 20.6915 52.6369 20.3669 50.4448 20.1878C48.1944 20.0039 45.2829 20 41 20ZM57.5 26.25C57.5 28.3211 55.8211 30 53.75 30C51.6789 30 50 28.3211 50 26.25C50 24.1789 51.6789 22.5 53.75 22.5C55.8211 22.5 57.5 24.1789 57.5 26.25ZM40 52.5C46.9036 52.5 52.5 46.9036 52.5 40C52.5 33.0964 46.9036 27.5 40 27.5C33.0964 27.5 27.5 33.0964 27.5 40C27.5 46.9036 33.0964 52.5 40 52.5Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.6349 13.1901C5 16.3988 5 20.5992 5 29V51C5 59.4008 5 63.6012 6.6349 66.8099C8.073 69.6323 10.3677 71.927 13.1901 73.3651C16.3988 75 20.5992 75 29 75H51C59.4008 75 63.6012 75 66.8099 73.3651C69.6323 71.927 71.927 69.6323 73.3651 66.8099C75 63.6012 75 59.4008 75 51V29C75 20.5992 75 16.3988 73.3651 13.1901C71.927 10.3677 69.6323 8.073 66.8099 6.6349C63.6012 5 59.4008 5 51 5H29C20.5992 5 16.3988 5 13.1901 6.6349C10.3677 8.073 8.073 10.3677 6.6349 13.1901ZM16.6349 23.1901C15 26.3988 15 30.5992 15 39V41C15 49.4008 15 53.6012 16.6349 56.8099C18.073 59.6323 20.3677 61.927 23.1901 63.3651C26.3988 65 30.5992 65 39 65H41C49.4008 65 53.6012 65 56.8099 63.3651C59.6323 61.927 61.927 59.6323 63.3651 56.8099C65 53.6012 65 49.4008 65 41V39C65 30.5992 65 26.3988 63.3651 23.1901C61.927 20.3677 59.6323 18.073 56.8099 16.6349C53.6012 15 49.4008 15 41 15H39C30.5992 15 26.3988 15 23.1901 16.6349C20.3677 18.073 18.073 20.3677 16.6349 23.1901Z"
                      />
                    </svg>
                  </a>
                  <a
                    onClick={() => setActive(false)}
                    href="https://www.linkedin.com/in/amine-ouhani-41b362176/"
                    target="_blank"
                    className="flex flex-row items-center transition duration-300 ease-in-out focus:outline-none hover:text-turquoise dark:hover:text-red-500"
                  >
                    <svg
                      viewBox="0 0 80 80"
                      className="w-3 h-3 fill-current"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z" />
                      <path d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z" />
                      <path d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z" />
                    </svg>
                  </a>
                  <a
                    onClick={() => setActive(false)}
                    href="https://twitter.com/fuckthisimoutd"
                    target="_blank"
                    className="flex flex-row items-center transition duration-300 ease-in-out focus:outline-none hover:text-turquoise dark:hover:text-red-500"
                  >
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M29.4719 70C21.3844 70 13.8454 67.6477 7.5 63.589C12.8875 63.9377 22.3952 63.1028 28.3089 57.462C19.4127 57.0538 15.4007 50.2307 14.8773 47.3149C15.6332 47.6065 19.2383 47.9564 21.2733 47.14C11.0397 44.574 9.46982 35.5933 9.81869 32.8524C11.7375 34.1937 14.9936 34.6602 16.2728 34.5436C6.73698 27.7206 10.1676 17.4569 11.8538 15.2409C18.6971 24.7217 28.953 30.0464 41.6409 30.3426C41.4017 29.2934 41.2754 28.2011 41.2754 27.0791C41.2754 19.0273 47.7835 12.5 55.8117 12.5C60.0064 12.5 63.786 14.2819 66.4392 17.1321C69.2423 16.4753 73.4608 14.9377 75.5231 13.608C74.4836 17.3403 71.2473 20.4537 69.2897 21.6077C69.306 21.6469 69.2738 21.5683 69.2897 21.6077C71.0093 21.3476 75.662 20.4534 77.5 19.2064C76.591 21.3031 73.16 24.7893 70.3443 26.7411C70.8682 49.8451 53.1912 70 29.4719 70Z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
