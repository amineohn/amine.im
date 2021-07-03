import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="About" description="About me" />}>
    <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
      About Me
    </h1>
    <div className="mb-8">
      <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:from-gray-50 dark:via-gray-100 dark:to-white">
        Hey, I'm Amine I am 22 years old and I live in Bordeaux. Student at
        Digital Campus Bordeaux in 2020 for the profession of Junior Full-Stack
        Developer. I am a Full-Stack Junior developer.
      </p>
      <h1 className="pb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
        # Technology
      </h1>
      <p className="bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
        What technology am I using? HTML, CSS, JavaScript, NextJS, TypeScript,
        Tailwind, MySQL 😁
      </p>
    </div>
  </Main>
);

export default About;
