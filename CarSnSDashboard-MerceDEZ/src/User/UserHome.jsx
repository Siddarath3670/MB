import { useEffect, useState } from 'react';
import Hero1 from './components/Hero/Hero1';
import Hero2 from './components/Hero/Hero2';
import Hero3 from './components/Hero/Hero3';
import { Hero4 } from './components/Hero/Hero4';
import Hero5 from './components/Hero/Hero5';

import { HomeBody } from './components/Body/HomeBody';
import Footer from '../components/Footer';

// Images

const UserHome = () => {
  const numOfHero = 5;
  const [activeHero, setActiveHero] = useState(1);

  const nextHero = () => {
    setActiveHero((prevHero) => (prevHero % numOfHero) + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextHero, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className=" relative">
        {/* DYNAMIC  HERO */}
        {activeHero === 1 && <Hero1 />}
        {activeHero === 2 && <Hero2 />}
        {activeHero === 3 && <Hero3 />}
        {activeHero === 4 && <Hero4 />}
        {activeHero === 5 && <Hero5 />}
      </div>

      <HomeBody></HomeBody>
      <Footer></Footer>
    </>
  );
};
export default UserHome;
