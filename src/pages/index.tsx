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
      <h1 className="pb-2 text-5xl font-bold text-black dark:text-white">
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
