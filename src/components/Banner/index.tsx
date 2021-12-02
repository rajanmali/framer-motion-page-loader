import { useState, useEffect } from 'react';

// Components
import BannerRowTop from './BannerRowTop';
import BannerRowCenter from './BannerRowCenter';
import BannerRowBottom from './BannerRowBottom';

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <section className="banner">
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee={playMarquee} />
      <BannerRowBottom title="studio" />
    </section>
  );
};

export default Banner;
