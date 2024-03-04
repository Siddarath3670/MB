import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/merLogo.svg';

const BlackNavBar = () => {
  const navLinks = ['Browse Cars', 'Book Service', 'About', 'Contact']; // Manually specified array
  const navi = useNavigate();
  return (
    <>
      <div className="h-16 mt-6 mr-16 ml-16 flex items-center justify-between">
        <div className="w-[55%] h-full flex items-center">
          {/* Logo */}
          <Link to={'/user'}>
            <img
              src={logo}
              className="ml-4  mr-8 rounded-full h-[60px] w-[60px]"
              alt="Logo"
            />
          </Link>

          {/* Navlink Container */}
          <div className="300 h-full w-[70%] flex items-center justify-evenly">
            {navLinks.map((link, index) => {
              const path = link.replace(/\s/g, '').toLowerCase();
              return (
                <Link to={'/user/' + path} key={index}>
                  <div
                    key={index}
                    className={`h-full ${
                      index === 2 ? '2 ' : ''
                    }border-b-[0px]  text-black   cursor-pointer   hover:border-blue-600 hover:border-b-[4px]  flex justify-center items-center`}
                  >
                    <h1 className="font-semibold">{link}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" w-[200px] h-full flex">
          <div
            className=" text-2xl text-black font-tableH my-auto   
          cursor-pointer
          mx-auto"
            onClick={() => navi('/')}
          >
            Log Out
          </div>
        </div>
      </div>
      <div className="bg-black mr-16 ml-16 h-[1px]"></div>
    </>
  );
};
export default BlackNavBar;
