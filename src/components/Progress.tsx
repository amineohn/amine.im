import { motion } from "framer-motion";
import styled from "styled-components";

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <Container className="transition border border-black dark:border-white hover:border-turquoise dark:hover:border-indigo-300">
      <ProgressFill
        className="transition bg-black dark:bg-white hover:bg-turquoise dark:hover:bg-indigo-400"
        initial={false}
        transition={{ ease: "easeOut", duration: 2 }}
        animate={{ x: `${percentage - 100}%` }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 30vh;
  height: 7.5px;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 3%;
`;

const ProgressFill = styled(motion.div)`
  width: 100%;
  height: 7.5px;
  transform: translateX(-100%);
`;

export default Progress;
