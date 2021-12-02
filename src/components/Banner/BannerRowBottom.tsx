// Components
import AnimatedLetters from '../common/AnimatedLetters';

// Types
import { BannerComponentTypes } from '../../types/Banner.types';

const BannerRowBottom = ({ title }: BannerComponentTypes) => {
  return (
    <div className="banner-row center">
      <div className="scroll">
        <span>scroll</span>
        <span>down</span>
      </div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default BannerRowBottom;
