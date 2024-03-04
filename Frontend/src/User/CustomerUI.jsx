import { Outlet } from 'react-router';
import UserNavbar from './UserNavbar';

const CustomerUI = () => {
  return (
    <div>
      <UserNavbar></UserNavbar>

      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default CustomerUI;
