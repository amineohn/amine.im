import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Amine"
          description="My Personal website made with NextJS & TailWind."
        />
      }
    >
      <h1 className="text-2xl font-bold">
        sup, sup
      </h1>
    </Main>
  );
};

export default Index;
