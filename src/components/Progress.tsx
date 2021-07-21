import { motion } from "framer-motion";
import styled from "styled-components";

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <Container className="border border-nightBlue dark:border-red-500">
      <ProgressFill
        className="bg-gradient-to-r from-nightBlue to-turquoise dark:bg-gradient-to-r dark:from-red-500 dark:to-red-900"
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
