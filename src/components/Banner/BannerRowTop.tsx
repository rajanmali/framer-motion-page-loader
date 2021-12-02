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
      <div className="row-col">
        <span className="row-message">
          We are speacialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </div>
    </div>
  );
};

export default BannerRowTop;
