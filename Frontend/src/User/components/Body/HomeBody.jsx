import BottomSlogan from './BottomSlogan';
import Features from './Features';
import Reviews from './Reviews';
import Slogan from './Slogan';
import Team from './Team';
import Drawings from './Drawings';

export const HomeBody = () => {
  return (
    <div className="w-full -mt-10   ">
      {/* Slogan */}
      <Slogan></Slogan>
      {/* Dont know what to name this */}
      <Features></Features>
      <Team></Team>
      <Drawings></Drawings>
      <Reviews></Reviews>
      <BottomSlogan></BottomSlogan>
    </div>
  );
};
