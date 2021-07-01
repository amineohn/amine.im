import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

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
      <h1 className="text-5xl font-bold text-black dark:text-white">
        Hello, I'm Amine Ouhani
      </h1>
      <p className="font-medium text-gray-700 dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet qui
        quidem non earum eveniet magni voluptates, odio omnis itaque quo dolor
        quibusdam iste quas. Molestias minus officiis et dolores numquam.
      </p>
    </Main>
  );
};

export default Index;
