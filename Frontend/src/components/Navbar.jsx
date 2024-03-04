import { useNavigate } from 'react-router';
import logo from '../assets/mercLogo.png';

const Navbar = () => {
  const navi = useNavigate();
  return (
    <>
      <div className="h-16 mt-[10px] mr-16 ml-16  flex items-center justify-between  ">
        <div
          className="
      w-[55%] h-full   
        flex items-center
        
        "
        >
          {' '}
          {/* Logo */}
          <img
            src={logo}
            className=" ml-4 mr-8  rounded-full h-[50px] w-[50px]"
          ></img>
          {/* Navlink Container */}
          <div className="300 h-full w-[70%] flex items-center ">
            <h2 className="text-3xl"> ADMIN PANEL</h2>
          </div>
        </div>
        <div
          onClick={() => navi('/')}
          className=" w-[200px] h-full flex justify-center items-center cursor-pointer"
        >
          <h2
            onClick={() => console.log('Logged Out')}
            className=" text-2xl font-tableD"
          >
            Log Out
          </h2>
        </div>
      </div>
      <div className="bg-slate-950 mr-16 ml-16  h-[1px]"></div>
    </>
  );
};
export default Navbar;
