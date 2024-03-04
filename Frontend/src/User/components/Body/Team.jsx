const Team = () => {
  return (
    <div className=" h-[600px] flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="font-slogan text-4xl mb-8 text-pri-blue">Expert Team</h1>
      {/* Para */}
      <p className="text-center text-2xl mb-5 font-normal text-pri-blue">
        Meet the pit crew who’ll make your car hum like never before.
      </p>
      {/* Cards Container */}
      <div className="flex items-center justify-around w-full">
        {/* Card 1 */}
        <div
          className="h-[300px] w-[350px]  flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black">
            <img
              src="https://imgs.search.brave.com/9kfwKh3jx5r6Y5P1IG_bkOaUFUbk8WgurGZzdhiNi_c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODI0/OTgxNTg2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtbWVjaGFuaWMt/Zml4aW5nLWNhcnMt/YXQtYW4tYXV0by1y/ZXBhaXItc2hvcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MHlsbjJmTEVEOEs5/cnNrZzZNakhqVUNr/djVjZmg1SXJZc2py/WUpxNkV6Zz0"
              alt=""
              className="object-cover h-full w-full rounded-full"
            />
          </div>
          <h2 className="text-3xl font-normal text-sec-blue font-bold">
            George Lylod
          </h2>
          <h3 className="text-xl font-normal text-pri-blue">Lead Mechanic</h3>
        </div>

        {/* Card 2 */}
        <div
          className="h-[300px] w-[350px]   flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black">
            <img
              src="https://imgs.search.brave.com/YU1XyQWCszto_yUj_o1DLJW-iT3680fVySPgjw8xdw4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MDAyMDk0MC9waG90/by9wb3J0cmFpdC1v/Zi1zdWNjZXNzZnVs/LWJ1c2luZXNzbWFu/LndlYnA_Yj0xJnM9/MTcwNjY3YSZ3PTAm/az0yMCZjPXBHTWZn/ejZjRnZtVzU3VXUw/WU8yVjNHUmNxbnJz/S3NOdWJoZHBUTEo4/TTg9"
              alt=""
              className="object-cover h-full w-full rounded-full"
            />
          </div>
          <h2 className="text-3xl font-normal font-bold text-sec-blue">
            Steph Mills
          </h2>
          <h3 className="text-xl font-normal text-pri-blue">
            Sales Representative
          </h3>
        </div>
        {/* Card 3 */}
        <div
          className="h-[300px] w-[350px]   flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black">
            <img
              src="https://imgs.search.brave.com/14YnwpNqkJPBILioNtohIJ_igz1qX41pjsOSUmxEBjU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/MjEwNDcxMC9waG90/by9zaG90LW9mLWEt/eW91bmctbWFsZS1l/bmdpbmVlci13b3Jr/aW5nLWluLWEtc2Vy/dmVyLXJvb20uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1z/dnpQNU9BUU1Tc3E4/Wmg0Z2FzUEthYlBZ/cTRrV0IzdDlSNE5v/TnBNWmM9"
              alt=""
              className="object-cover h-full w-full rounded-full"
            />
          </div>
          <h2 className="text-3xl font-normal  text-pri-blue font-bold">
            Sasuke
          </h2>
          <h3 className="text-xl font-normal">Technician</h3>
        </div>
      </div>
    </div>
  );
};
export default Team;
