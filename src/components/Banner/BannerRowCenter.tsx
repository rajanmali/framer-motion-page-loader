// Components
import AnimatedLetters from '../common/AnimatedLetters';

// Types
import { BannerComponentTypes } from '../../types/Banner.types';

interface BannerRowCenterProps extends BannerComponentTypes {
  playMarquee: Boolean;
}

const BannerRowCenter = ({ title, playMarquee }: BannerRowCenterProps) => {
  return (
    <div className={`banner-row marquee ${playMarquee && 'animate'}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default BannerRowCenter;
