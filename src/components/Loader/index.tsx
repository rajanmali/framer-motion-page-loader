import { useEffect } from 'react';
// Components
import ImageBlock from './ImageBlock';
interface LoaderProps {
  setLoading: any;
}

const Loader = ({ setLoading }: LoaderProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loader">
      <div className="loader-inner">
        <ImageBlock id="image-1" />
        <div className="transition-image">
          <img
            src={process.env.PUBLIC_URL + '/images/image-2.jpg'}
            alt="transition"
          />
        </div>
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </div>
    </div>
  );
};

export default Loader;
