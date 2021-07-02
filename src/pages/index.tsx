import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Amine"
          description="My Personal website made with NextJS & Tailwind."
        />
      }
    >
      <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
        Hello, I'm Amine Ouhani
      </h1>
      <div className="mb-8">
        <p className="mb-4 text-gray-600 dark:text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet qui
          quidem non earum eveniet magni voluptates, odio omnis itaque quo dolor
          quibusdam iste quas. Molestias minus officiis et dolores numquam.
        </p>
      </div>
    </Main>
  );
};

export default Index;
