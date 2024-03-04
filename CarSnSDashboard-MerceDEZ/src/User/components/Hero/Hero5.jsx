import hero from '../../assets/hero5.jpg';

const Hero5 = () => {
  return (
    <>
      <img
        className="h-[600px] w-full relative -z-10 -top-[90px]  object-cover"
        src={hero}
        alt=""
      />
      <div className="absolute right-6 bottom-[200px] text-white">
        {/* <h1 className="text-8xl font-heroFont">
          Sheer Driving <span className="font-bold"> Pleasure </span>{' '}
        </h1> */}
      </div>
    </>
  );
};
export default Hero5;
