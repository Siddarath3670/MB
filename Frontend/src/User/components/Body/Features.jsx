const Features = () => {
  return (
    <div className="w-full flex flex-col  py-10 px-5 ">
      {/* Card 1 */}
      <div className="flex w-full mb-10">
        <div className="w-[55%]  h-[500px] flex pr-16 flex-col items-end justify-center  ">
          <h1 className="font-slogan text-4xl mb-3 text-ter-blue">
            Exclusive, Top-Quality <br /> Vehicles
          </h1>
          <p className="w-[400px] mr-[85px] text-3xl  text-ter-blue font-semibold">
            Discover a curated collection of high-performance cars tuned to
            perfection. From classic muscle cars to sleek aerodynamic racers,
            our inventory will set the pavement ablaze.
          </p>
        </div>

        <img
          className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
          src="https://imgs.search.brave.com/tOcqN4zkcdudVGTaWjT3zlAyTqPg94QTbWLE8SwQ82I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstbWVyY2Vk/ZXMtemNqNDd5eDlt/cTd0ZmplZC5qcGc"
          alt=""
        />
      </div>
      {/* Card 2 */}
      <div className="flex w-full mb-10">
        <img
          className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
          src="https://wallpapercave.com/wp/wp7374501.png"
          alt=""
        />
        <div className="w-[55%]  h-[500px] flex pl-16 flex-col items-start justify-center  ">
          <h1 className="font-slogan text-4xl mb-3 text-ter-blue ">
            Unprecedented <br /> Automotive Service
          </h1>
          <p className="w-[400px] text-3xl font-semibold text-ter-blue">
            Our expert mechanics are veterans of the track, lending their
            extensive knowledge and experience to provide top-tier maintenance,
            enhancements, and repairs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
