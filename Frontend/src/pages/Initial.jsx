import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Initial = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
        {/* <Table></Table> */}
        {/* <Home></Home> */}
      </div>
      <Footer></Footer>
    </>
  );
};
export default Initial;
