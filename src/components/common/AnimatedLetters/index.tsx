import { motion } from 'framer-motion';

// Constants
import { banner } from '../../Banner';
// Types
import { BannerComponentTypes } from '../../../types/Banner.types';

interface AnimatedLettersTypes extends BannerComponentTypes {
  disabled?: boolean;
}

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.96],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title, disabled }: AnimatedLettersTypes) => {
  const titleArray = title.split('');
  return (
    <motion.span
      className="row-title"
      variants={disabled ? {} : banner}
      initial="initial"
      animate="animate"
    >
      {titleArray.map((letter) => (
        <motion.span className="row-letter" variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
