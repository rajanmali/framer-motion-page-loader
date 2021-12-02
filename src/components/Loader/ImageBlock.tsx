import { motion } from 'framer-motion';

// Components
import Image from '../Image';

interface ImageBlockProps {
  id: string;
}

const ImageBlock = ({ id }: ImageBlockProps) => {
  return (
    <motion.div
      className={`image-block ${id}`}
      animate={{ scale: 0.5, transition: { duration: 1 } }}
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
