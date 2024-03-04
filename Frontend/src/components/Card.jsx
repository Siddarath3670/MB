import CountUp from 'react-countup';
const Card = ({ children, number, desc, apxString }) => {
  return (
    <div className="flex   rounded-lg shadow-md flex-col bg-white w-[300px] h-[200px]   p-1 items-center justify-center">
      <div className="text-center font-tableD text-3xl text-[#8f8f8f]">
        {desc}
      </div>
      <div className="w-full ">{children}</div>
      <div className=" text-4xl text-center text-[#8f8f8f]  w-full">
        <CountUp end={number} /> {apxString}
      </div>
    </div>
  );
};
export default Card;
