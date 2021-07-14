import { motion } from "framer-motion";
import styled from "styled-components";

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <Container className="border border-gray-700 dark:border-gray-50">
      <ProgressFill
        className="bg-gray-900 bg-opacity-50 dark:bg-white"
        initial={false}
        transition={{ ease: "easeOut", duration: 2 }}
        animate={{ x: `${percentage - 100}%` }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
