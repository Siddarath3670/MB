import { useDispatch } from 'react-redux';
import { assignCarId } from '../../../state/slices/commonSlice';
import { useNavigate } from 'react-router';

const BCCard = ({ data }) => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { id } = data;

  const handleClick = () => {
    dispatch(assignCarId(id));
    navi('/user/browsecar');
  };
  return (
    <div
      onClick={() => handleClick()}
      className="h-[300px] w-[400px] bg-slate-300  bg-opacity-25 rounded-lg flex flex-col p-2 cursor-pointer  "
    >
      {/* Image COntainer */}
      <div className="h-[80%] w-full  rounded-md mb-3">
        <img
          src={`http://localhost:8081/images/${data.carimage}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* Name of Image */}
      <div className="h-[10%]">
        <h3 className="text-3xl font-tableD text-center">
          Mercedes-benz {data.modelname}
        </h3>
      </div>
    </div>
  );
};
export default BCCard;
