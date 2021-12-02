import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import BannerRowTop from './BannerRowTop';
import BannerRowCenter from './BannerRowCenter';
import BannerRowBottom from './BannerRowBottom';

export const banner = {
  animate: {
    transition: { delayChildren: 0.4, staggerChildren: 0.1 },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee={playMarquee} />
      <BannerRowBottom title="studio" />
    </motion.div>
  );
};

export default Banner;
