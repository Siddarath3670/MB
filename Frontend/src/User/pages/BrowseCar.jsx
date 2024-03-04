import UserNavbar from '../UserNavbar';
import BCHero from '../components/Hero/BCHero';
import BCBody from '../components/Body/BCBody';
import Footer from '../../components/Footer';
const BrowseCar = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      {/* Hero */}
      <BCHero></BCHero>
      {/* Body */}
      <BCBody></BCBody>
      <Footer></Footer>
    </>
  );
};
export default BrowseCar;
