import { useEffect, useState } from 'react';
import BCCard from './BCCard';
import { globalUrl } from '../../../App';
import axios from 'axios';
import { nanoid } from 'nanoid';

const BCBody = () => {
  const url = globalUrl + '/car';
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        {/* Heading */}
        <div className="flex justify-center items-center flex-col mb-[60px]">
          <h3 className="text-6xl w-full"> Browse Cars</h3>
          <div className="w-full border-b-4 border-b-[#0066B1]"></div>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-10">
          {data.map((info) => {
            return <BCCard data={info} key={nanoid()}></BCCard>;
          })}
        </div>
      </div>
    </>
  );
};
export default BCBody;
