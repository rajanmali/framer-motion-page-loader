import { motion } from 'framer-motion';

// Components
import Image from '../Image';

interface ImageBlockProps {
  id: string;
  variants: any;
}

const ImageBlock = ({ id, variants }: ImageBlockProps) => {
  return (
    <motion.div
      className={`image-block ${id}`}
      animate={{ scale: 0.5, transition: { duration: 1 } }}
      variants={variants}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};

export default ImageBlock;
