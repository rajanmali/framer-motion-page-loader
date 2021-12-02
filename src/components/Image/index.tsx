interface ImageProps {
  src: string;
  type: string;
  alt: string;
  fallback: string;
}

const Image = ({ src, fallback, type = 'image/webp', alt }: ImageProps) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
