import Card from '../components/Card';
import { MdOutlinePendingActions } from 'react-icons/md';
import { IoMdDoneAll } from 'react-icons/io';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { globalUrl } from '../App';

const Home = () => {
  const url = globalUrl;
  const [pending, setPending] = useState(0);
  const [serviced, setServiced] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [turnOver, setTurnOver] = useState(0);

  const fetchTotalEmployee = async () => {
    try {
      const response = await axios.get(`${url}/totalEmployee`);
      setEmployee(response.data[0].emp);
    } catch (error) {
      console.error('Error fetching total employees:', error);
    }
  };
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${url}/trueServices`);
      setServiced(response.data[0].service);
    } catch (error) {
      console.error('Error fetching total employees:', error);
    }
  };
  const fetchPending = async () => {
    try {
      const response = await axios.get(`${url}/pendingBookings`);

      setPending(response.data[0].pending);
    } catch (error) {
      console.error('Error fetching total employees:', error);
    }
  };
  const fetchTurnOver = async () => {
    try {
      const response = await axios.get(`${url}/turnOver`);
      const earning = (response.data[0].total / 100000).toFixed(1);
      setTurnOver(earning);
    } catch (error) {
      console.error('Error fetching total employees:', error);
    }
  };

  useEffect(() => {
    fetchTotalEmployee();
    fetchPending();
    fetchTurnOver();
    fetchServices();
  }, []);

  return (
    <div className="w-full h-[600px] mt-5 flex flex-col mr-16">
      {/* Heading Container */}
      <div className="flex flex-col ">
        <h1 className=" text-center [word-spacing:25px] tracking-wider text-[#797979]  text-5xl font-homeT">
          Business Operations Analytics{' '}
        </h1>
        <div className="border-b-2 border-b-slate-200"></div>
      </div>
      {/* Cards Container */}
      <div className="flex flex-col h-[540px] w-full mr-16 bg-red-50 ">
        {/* Card Col 1 */}
        <div className="w-full h-[270px]  bg-slate-50 p-5 flex items-center justify-evenly ">
          {/* Card 1  */}
          <Card desc={'Pending'} number={pending} apxString={''}>
            <MdOutlinePendingActions className="text-8xl text-[#7360DF] mx-auto" />
          </Card>
          {/* Card 2 */}
          <Card desc={'Serviced'} number={serviced} apxString={''}>
            <IoMdDoneAll className="text-8xl text-[#7360DF] mx-auto" />
          </Card>
        </div>

        {/* Card Col 2 */}
        <div className="w-full h-[270px]  bg-slate-50 p-5 flex items-center justify-evenly ">
          {/* Card 3  */}
          <Card desc={'Employees'} number={employee} apxString={''}>
            <FaPeopleGroup className="text-8xl text-[#7360DF] mx-auto" />
          </Card>
          {/* Card 4 */}
          <Card desc={'Turn Over'} number={turnOver} apxString={'L'}>
            <FaMoneyBillTrendUp className="text-8xl text-[#7360DF] mx-auto" />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Home;
