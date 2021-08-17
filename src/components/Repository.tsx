import FadeIn from "react-fade-in/lib/FadeIn";
const Repository = ({ repos }: any) => {
  return (
    <FadeIn className="flex flex-col w-full">
      <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
        {repos.map((repo) => {
          return (
            <div className="w-full p-4 overflow-hidden transition transform border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72 hover:scale-110 hover:border-indigo-400 dark:hover:border-indigo-400">
              <div
                key={repo.id}
                className="flex items-center text-gray-900 dark:text-gray-100"
              >
                {repo.name}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={repo.svn_url}
                >
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
                </a>
              </div>
              <p className="mt-2 text-sm font-bold text-gray-800 spacing-sm dark:text-white">
                {repo.description}
              </p>
              <div className="flex mt-5">
                <p>
                  <span className="mb-1 text-sm">
                    {repo.watchers ? (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 80 80"
                        fill="none"
                        className="text-black fill-current dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M36.4087 47.2253C38.6877 48.3228 41.3423 48.3228 43.6213 47.2253C45.9002 46.1279 47.5554 44.0523 48.1182 41.5863C48.6811 39.1203 48.0904 36.5322 46.5133 34.5546C44.9362 32.577 42.5444 31.4252 40.015 31.4252C37.4856 31.4252 35.0938 32.577 33.5167 34.5546C31.9396 36.5322 31.3489 39.1203 31.9118 41.5863C32.4746 44.0523 34.1298 46.1279 36.4087 47.2253Z"
                          fill="fillCurrent"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M66.782 46.5831C68.4795 44.4545 69.8996 42.1541 71.03 39.7359C69.8997 37.3183 68.4799 35.0186 66.7828 32.8905C60.2866 24.7445 50.4345 20 40.0154 20C29.5963 20 19.7442 24.7445 13.248 32.8905C11.5505 35.0191 10.1304 37.3195 9 39.7377C10.1302 42.1553 11.5501 44.455 13.2472 46.5831C19.7434 54.7291 29.5955 59.4736 40.0146 59.4736C50.4337 59.4736 60.2858 54.7291 66.782 46.5831ZM45.7907 51.7302C42.1408 53.4879 37.8892 53.4879 34.2393 51.7302C30.5894 49.9725 27.9386 46.6484 27.0371 42.6989C26.1357 38.7494 27.0818 34.6044 29.6075 31.4372C32.1333 28.2699 35.9639 26.4252 40.015 26.4252C44.066 26.4252 47.8967 28.2699 50.4224 31.4372C52.9482 34.6044 53.8943 38.7494 52.9929 42.6989C52.0914 46.6484 49.4406 49.9725 45.7907 51.7302Z"
                          fill="fillCurrent"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 80 80"
                        fill="none"
                        className="text-black fill-current dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M51.1 21.8439C47.5726 20.6366 43.8321 20 40.0154 20C29.5963 20 19.7442 24.7445 13.248 32.8905C11.5505 35.0191 10.1304 37.3195 9 39.7377C10.1302 42.1553 11.5501 44.455 13.2472 46.5831C15.2051 49.0383 17.4678 51.1844 19.9591 52.9848L27.8353 45.1087C27.4959 44.3392 27.2275 43.533 27.0371 42.6989C26.1357 38.7494 27.0818 34.6044 29.6075 31.4372C32.1333 28.2699 35.9639 26.4252 40.015 26.4252C41.8885 26.4252 43.7148 26.8197 45.3868 27.5572L51.1 21.8439Z"
                          fill="fillCurrent"
                        />
                        <path
                          d="M41.4022 31.5417C40.9474 31.4647 40.4836 31.4252 40.015 31.4252C37.4856 31.4252 35.0938 32.577 33.5167 34.5546C32.0379 36.4089 31.4264 38.8001 31.8199 41.124L41.4022 31.5417Z"
                          fill="fillCurrent"
                        />
                        <path
                          d="M39.0893 47.9968L48.2749 38.8111C48.3777 39.7278 48.3284 40.6656 48.1182 41.5863C47.5554 44.0523 45.9002 46.1279 43.6213 47.2253C42.1963 47.9116 40.6244 48.1687 39.0893 47.9968Z"
                          fill="fillCurrent"
                        />
                        <path
                          d="M35.0131 52.073C38.4806 53.4793 42.3959 53.365 45.7907 51.7302C49.4406 49.9725 52.0914 46.6484 52.9929 42.6989C53.6062 40.0116 53.3642 37.2337 52.3512 34.7349L60.375 26.7111C62.7465 28.465 64.9049 30.5356 66.7828 32.8905C68.4799 35.0186 69.8997 37.3183 71.03 39.7359C69.8996 42.1541 68.4795 44.4545 66.782 46.5831C60.2858 54.7291 50.4337 59.4736 40.0146 59.4736C36.3398 59.4736 32.7355 58.8834 29.3241 57.762L35.0131 52.073Z"
                          fill="fillCurrent"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M69.7828 14.2322C70.7591 15.2085 70.7591 16.7915 69.7828 17.7678L21.7828 65.7678C20.8064 66.7441 19.2235 66.7441 18.2472 65.7678C17.2709 64.7915 17.2709 63.2085 18.2472 62.2322L66.2472 14.2322C67.2235 13.2559 68.8064 13.2559 69.7828 14.2322Z"
                          fill="fillCurrent"
                        />
                      </svg>
                    )}
                  </span>
                </p>

                <p>
                  <span className="mb-1 text-sm">
                    {repo.stargazers_count ? (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 80 80"
                        className="text-black fill-current dark:text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.1441 12.6217C38.8159 10.9488 41.1841 10.9488 41.8559 12.6217L47.8081 27.4439C48.0942 28.1563 48.7628 28.642 49.5288 28.694L65.4648 29.7745C67.2635 29.8965 67.9953 32.1489 66.6118 33.3047L54.3544 43.5459C53.7653 44.0381 53.5099 44.8241 53.6972 45.5686L57.5941 61.0586C58.0339 62.8069 56.1179 64.199 54.5911 63.2404L41.0634 54.7476C40.4132 54.3394 39.5868 54.3394 38.9366 54.7476L25.4089 63.2404C23.8821 64.199 21.9661 62.8069 22.4059 61.0586L26.3028 45.5686C26.4901 44.8241 26.2347 44.0381 25.6456 43.5459L13.3882 33.3047C12.0047 32.1489 12.7365 29.8965 14.5352 29.7745L30.4712 28.694C31.2372 28.642 31.9058 28.1563 32.1919 27.4439L38.1441 12.6217Z"
                          fill="fill-current"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="25"
                        height="25"
                        className="text-black stroke-current dark:text-white"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.144 12.6219C38.8158 10.949 41.1841 10.949 41.8559 12.6219L47.8081 27.4441C48.0941 28.1565 48.7628 28.6422 49.5287 28.6942L65.4647 29.7747C67.2634 29.8967 67.9952 32.149 66.6118 33.3049L54.3544 43.5461C53.7652 44.0383 53.5099 44.8243 53.6972 45.5688L57.594 61.0588C58.0338 62.8071 56.1178 64.1992 54.591 63.2406L41.0634 54.7478C40.4132 54.3396 39.5867 54.3396 38.9365 54.7478L25.4089 63.2406C23.882 64.1992 21.9661 62.8071 22.4059 61.0588L26.3027 45.5688C26.49 44.8243 26.2346 44.0383 25.6455 43.5461L13.3881 33.3049C12.0047 32.149 12.7365 29.8967 14.5352 29.7747L30.4712 28.6942C31.2371 28.6422 31.9057 28.1565 32.1918 27.4441L38.144 12.6219Z"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </p>

                <p>
                  <span className="mb-1 text-sm">
                    {repo.forks_count ? (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 80 80"
                        className="text-black stroke-current dark:text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 16H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H24"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M56 16H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.7852 40H28.2852"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39.7852 40H40.2852"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M51.7852 40H52.2852"
                          stroke="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 80 80"
                        fill="none"
                        className="text-black stroke-current dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 16H23.8172H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H23.8172H24"
                          stroke="stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M56 16H56.1828H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56.1828H56"
                          stroke="stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.7852 40H28.2852"
                          stroke="stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39.7852 40H40.2852"
                          stroke="stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M51.7852 40H52.2852"
                          stroke="stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </p>
                <p>
                  <span className="mb-1 ml-1 text-xs">{repo.language}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
};

export default Repository;
