import { motion } from 'framer-motion';

// Components
import AnimatedLetters from '../common/AnimatedLetters';

// Types
import { BannerComponentTypes } from '../../types/Banner.types';

const BannerRowTop = ({ title }: BannerComponentTypes) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
      >
        <span className="row-message">
          We are speacialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

export default BannerRowTop;
