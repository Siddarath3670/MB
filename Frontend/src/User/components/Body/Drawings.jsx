import { FaDotCircle } from 'react-icons/fa';
import { BsOctagonFill } from 'react-icons/bs';
import { BiSolidCircleHalf } from 'react-icons/bi';
import { MdHexagon } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
const Drawings = () => {
  return (
    <div className=" flex justify-around  bg-slate-50 items-center w-full h-[200px]">
      <FaDotCircle className=" text-6xl text-[#001C55]"></FaDotCircle>
      <BiSolidCircleHalf className="text-6xl text-[#00072D]"></BiSolidCircleHalf>
      <BsOctagonFill className="text-6xl text-[#001C55]"></BsOctagonFill>
      <FaCircle className="text-[#00072D] text-6xl"></FaCircle>
      <MdHexagon className="text-[#001C55] text-6xl "></MdHexagon>
      <FaCircle className="text-[#00072D] text-6xl"></FaCircle>
    </div>
  );
};
export default Drawings;
