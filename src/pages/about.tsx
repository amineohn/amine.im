import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="About" description="About me" />}>
    <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-tl dark:from-indigo-300 dark:to-purple-400">
      About
    </h1>
    <div className="mb-8">
      <p className="mb-4 text-gray-600 dark:text-gray-50">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p className="dark:text-gray-50">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </div>
  </Main>
);

export default About;
