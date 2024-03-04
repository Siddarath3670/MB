const Reviews = () => {
  return (
    <div className="flex justify-evenly items-center h-[500px] w-full ">
      {/* Card 1 */}
      <div
        className="w-[300px] h-[350px] shadow-md  bg-slate-100
      p-5
      rounded-3xl flex flex-col justify-between "
      >
        {/* Review and face */}
        <div className="h-[60%] w-full flex flex-col">
          <img
            className="h-[50px] object-cover object-right-top  
            mb-4
            ml-2 w-[50px] rounded-full"
            src="https://imgs.search.brave.com/23MrUl5yZuiV4JEO5ZucyIrbBAmQreLBMdL-j81dQWQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC9kL2Iv/Zi80NTk3Ni5qcGc"
          ></img>
          <h3 className="w-full p-3 font-normal text-pri-blue">
            My Mercedes-Benz S-Class gracefully cruises down the highway, a
            testament to unparalleled engineering excellence
          </h3>
        </div>
        {/* Name */}
        <div className="h-[10%] w-full font-normal  text-pri-blue ">
          Madara Uchiha
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="w-[300px]  h-[350px] shadow-md   bg-slate-100
      p-5
      rounded-3xl flex flex-col justify-between "
      >
        {/* Review and face */}
        <div className="h-[60%] w-full flex flex-col">
          <img
            src="https://imgs.search.brave.com/8Y5r0dfj5TvPkqnY38M3DKBefQumBooAo2D-6S45u4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzA1/L2RkLzFkMDVkZGQ2/NWM3ZWJjZWI1ZGIw/MjA3MjBkNzJhZjkz/LmpwZw"
            className="h-[50px] object-cover  ml-2 w-[50px]   mb-4 rounded-full"
          ></img>
          <h3 className="w-full p-3 font-normal  text-pri-blue">
            Thrilled with the incredible bargains on Mercedes-Benz vehicles!
            Scored my dream car without breaking the bank.
          </h3>
        </div>
        {/* Name */}
        <div className="h-[10%] w-full font-normal  text-pri-blue ">
          Ninja Hatori
        </div>
      </div>

      {/* Card 3*/}
      <div
        className="w-[300px]  h-[350px] shadow-md  bg-slate-100
      p-5
      rounded-3xl  flex flex-col justify-between "
      >
        {/* Review and face */}
        <div className="h-[60%] w-full  flex flex-col">
          <img
            src="https://imgs.search.brave.com/wUcSCe0Q_hrNe69t-3I4M0coi_vKlrRnWI2AVDYcNY0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iZWlu/Z3NlbGZpc2guaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvbm9iaXRhLWRw/MTEuanBn"
            className="h-[50px] object-cover ml-2 w-[50px] rounded-full   mb-4 "
          ></img>
          <h3 className="w-full p-3  text-pri-blue font-normal">
            Unrivaled services! They turbocharged my Mercedes-Benz, elevating
            its performance to unparalleled heights.
          </h3>
        </div>
        {/* Name */}
        <div className="h-[10%] w-full font-normal  text-pri-blue ">Nobita</div>
      </div>
    </div>
  );
};
export default Reviews;
