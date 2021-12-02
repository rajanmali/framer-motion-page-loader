import { BannerComponentTypes } from '../../../types/Banner.types';

const AnimatedLetters = ({ title }: BannerComponentTypes) => {
  const titleArray = title.split('');
  return (
    <span className="row-title">
      {titleArray.map((letter) => (
        <span className="row-letter">{letter}</span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
