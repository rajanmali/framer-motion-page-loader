// Components
import Image from '../Image';

interface ImageBlockProps {
  id: string;
}

const ImageBlock = ({ id }: ImageBlockProps) => {
  return (
    <div className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `images/${id}.jpg`}
        alt={id}
      />
    </div>
  );
};

export default ImageBlock;
