import { useEffect, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// Components
import Loader from './components/Loader';
import Header from './components/Header';
import Banner from './components/Banner';

// Styles
import './assets/scss/main.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading');
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <img
                src={process.env.PUBLIC_URL + '/images/image-2.jpg'}
                alt="transition"
              />
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
