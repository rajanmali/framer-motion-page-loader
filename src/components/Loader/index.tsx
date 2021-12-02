import { motion } from 'framer-motion';

// Components
import ImageBlock from './ImageBlock';
interface LoaderProps {
  setLoading: any;
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opactiy: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.96],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: 'easeInOut', duration: 0.8 },
  },
};

const Loader = ({ setLoading }: LoaderProps) => {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => {
          setLoading(false);
        }}
      >
        <ImageBlock id="image-1" variants={item} />
        <div className="transition-image">
          <img
            src={process.env.PUBLIC_URL + '/images/image-2.jpg'}
            alt="transition"
          />
        </div>
        <ImageBlock id="image-3" variants={item} />
        <ImageBlock id="image-4" variants={item} />
        <ImageBlock id="image-5" variants={item} />
      </motion.div>
    </div>
  );
};

export default Loader;
