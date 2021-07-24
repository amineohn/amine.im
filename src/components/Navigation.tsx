import { ThemeSwitcher } from "./ThemeSwitcher";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";
const Navigation = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-gray-900 md:my-8 dark:text-gray-100">
      <ThemeSwitcher />
      <div>
        <a
          onClick={() => router.push("/")}
          className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
        >
          Home
        </a>
        <a
          onClick={() => router.push("/about")}
          className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
        >
          About
        </a>
        <a
          onClick={() => router.push("/project")}
          className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-turquoise dark:hover:text-rose-700"
        >
          Projects
        </a>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navigation;
