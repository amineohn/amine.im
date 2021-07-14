import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const getNextTheme = (): string => {
    if (theme === "dark") return "light";
    if (theme === "light") return "system";
    return "dark";
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 transition bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-blue-400 dark:hover:bg-purple-300 hover:text-white dark:hover:text-gray-800"
      onClick={() => setTheme(getNextTheme())}
    >
      {(() => {
        switch (theme) {
          case "dark":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            );
          case "system":
            return (
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-800"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.6298 9.5C36.0074 9.5 37.1255 10.6145 37.1298 11.9922L37.1522 19.2002C37.1564 20.5404 35.9701 21.5641 34.6298 21.5641C33.2895 21.5642 32.1031 20.5405 32.1073 19.2002L32.1298 11.9922C32.1341 10.6145 33.2521 9.5 34.6298 9.5Z"
                  fill="currentColor"
                />
                <path
                  d="M23.7937 25.0853C24.8779 24.2975 25.236 22.772 24.4449 21.6902L20.1897 15.8718C19.3765 14.7597 17.8169 14.5152 16.7023 15.325C15.5878 16.1348 15.3384 17.6936 16.1447 18.8107L20.3634 24.6555C21.1478 25.7423 22.7094 25.8731 23.7937 25.0853Z"
                  fill="currentColor"
                />
                <path
                  d="M17.0967 34.3031C17.5108 33.0285 16.9039 31.5838 15.6279 31.1737L8.7653 28.9675C7.45374 28.5459 6.04826 29.2647 5.62254 30.575C5.19682 31.8852 5.91132 33.2929 7.22022 33.7227L14.069 35.9717C15.3423 36.3898 16.6825 35.5778 17.0967 34.3031Z"
                  fill="currentColor"
                />
                <path
                  d="M17.0967 45.6969C16.6825 44.4222 15.3424 43.6102 14.069 44.0283L7.23506 46.2724L7.22022 46.2773C5.91132 46.7071 5.19682 48.1148 5.62254 49.425C6.04826 50.7353 7.45374 51.4542 8.7653 51.0325L8.78014 51.0277L15.628 48.8263C16.9039 48.4161 17.5108 46.9715 17.0967 45.6969Z"
                  fill="currentColor"
                />
                <path
                  d="M23.7937 54.9147C22.7094 54.1269 21.1478 54.2577 20.3634 55.3445L16.1538 61.1767L16.1447 61.1893C15.3384 62.3064 15.5878 63.8652 16.7023 64.675C17.8169 65.4848 19.3765 65.2403 20.1897 64.1282L20.1989 64.1156L24.4448 58.3098C25.236 57.228 24.8779 55.7025 23.7937 54.9147Z"
                  fill="currentColor"
                />
                <path
                  d="M34.6298 58.4359C33.2896 58.4358 32.1031 59.4595 32.1073 60.7998L32.1298 67.9922V68.0078C32.1341 69.3855 33.2521 70.5 34.6298 70.5C36.0074 70.5 37.1255 69.3855 37.1298 68.0078V67.9922L37.1522 60.7998C37.1564 59.4596 35.9701 58.4359 34.6298 58.4359Z"
                  fill="currentColor"
                />
                <path
                  d="M44.4031 57.2596C44.4464 57.6284 44.58 57.9889 44.815 58.3103L49.0606 64.1156L49.0698 64.1282C49.883 65.2403 51.4427 65.4848 52.5572 64.675C53.6718 63.8652 53.9212 62.3064 53.1149 61.1893L53.1057 61.1767L51.1737 58.5H49.1385C47.4658 58.5 45.8366 58.0662 44.4031 57.2596Z"
                  fill="currentColor"
                />
                <path
                  d="M39.7639 51.1668C39.3306 51.366 38.8845 51.5406 38.4275 51.689C35.9591 52.4911 33.3 52.4911 30.8315 51.689C28.3631 50.887 26.2119 49.324 24.6863 47.2242C23.1606 45.1244 22.339 42.5955 22.339 40C22.339 37.4045 23.1606 34.8756 24.6863 32.7758C26.2119 30.676 28.3631 29.113 30.8315 28.311C33.3 27.5089 35.9591 27.5089 38.4275 28.311C40.896 29.113 43.0472 30.676 44.5728 32.7758C45.4763 34.0193 46.1329 35.4134 46.5182 36.8826C46.0312 37.8959 45.697 38.9814 45.5315 40.1021C44.3707 40.5694 43.301 41.2623 42.3898 42.1537L42.3424 42.2001C40.5254 43.9776 39.5002 46.4104 39.5002 48.9517C39.5002 49.7043 39.5901 50.4474 39.7639 51.1668Z"
                  fill="currentColor"
                />
                <path
                  d="M63.4272 32.5928C61.495 31.2477 59.1799 30.5 56.7998 30.5H56.7168C56.3205 30.5 55.9262 30.5208 55.5356 30.5616L60.4794 28.9723L60.4942 28.9675C61.8058 28.5459 63.2113 29.2647 63.637 30.575C63.8642 31.2743 63.7666 32.0014 63.4272 32.5928Z"
                  fill="currentColor"
                />
                <path
                  d="M45.4663 25.0849C46.5506 25.8726 48.1121 25.7418 48.8964 24.655L53.1057 18.8233L53.1149 18.8107C53.9212 17.6936 53.6718 16.1348 52.5572 15.325C51.4427 14.5152 49.883 14.7597 49.0698 15.8718L49.0606 15.8844L44.815 21.6897C44.0239 22.7716 44.382 24.2971 45.4663 25.0849Z"
                  fill="currentColor"
                />
                <path
                  d="M56.7998 33C59.1584 33 61.4516 33.9426 63.1538 35.5969C64.8576 37.2527 65.8525 39.5223 65.8905 41.8749L65.8921 41.9768C67.3822 42.1934 68.7751 42.876 69.8623 43.9396L69.9097 43.986C71.2469 45.2941 72.0002 47.0832 72.0002 48.9506C72.0002 50.818 71.2469 52.6071 69.9097 53.9152L69.8623 53.9616C68.5276 55.2673 66.7321 55.9989 64.8618 55.9989H62.6481C62.6427 55.9995 62.6373 55.9998 62.6317 55.9998H52.3042C52.2917 55.9999 52.2791 56 52.2666 56H49.1385C47.2683 56 45.4727 55.2685 44.138 53.9627L44.0906 53.9163C42.7535 52.6082 42.0002 50.8192 42.0002 48.9517C42.0002 47.0843 42.7535 45.2953 44.0906 43.9871L44.138 43.9407C45.1781 42.9233 46.4979 42.2545 47.9148 42.0087L47.9127 41.8749C47.8747 39.5223 48.7963 37.2527 50.4466 35.5969C52.0955 33.9426 54.3582 33 56.7168 33H56.7998Z"
                  fill="currentColor"
                />
              </svg>
            );
          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            );
          default:
            return "system";
        }
      })()}
    </button>
  );
}
