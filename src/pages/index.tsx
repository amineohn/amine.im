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
      <h1 className="font-bold text-1xl">sup, sup test vercel deployment</h1>
    </Main>
  );
};

export default Index;
