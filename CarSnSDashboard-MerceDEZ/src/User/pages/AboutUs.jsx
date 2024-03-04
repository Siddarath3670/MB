import Footer from '../../components/Footer';
import BlackNavBar from '../BlackNavBar';

import Bertha from '../assets/merc/Bertha.mp4';
import G1 from '../assets/merc/g1.webp';
import G2 from '../assets/merc/g2.webp';
import G3 from '../assets/merc/g3.webp';
import G4 from '../assets/merc/g4.webp';
import abt from '../assets/merc/abt.jpg';
const AboutUs = () => {
  return (
    <>
      <BlackNavBar></BlackNavBar>
      <div className="bg-white font-merriweather pl-8 pr-8 ">
        <div className="relative">
          <img src={abt} alt="Mercedes-Benz" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center p-10">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              About Us
            </h1>
            <h3 className="text-center text-lg font-extrabold text-white mb-6">
              At Mercedes-Benz, our employees and <br />
              communities are at the heart of <br />
              everything we do.
            </h3>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            <a
              href="#QF"
              className="quick-fact bg-white rounded-lg p-4 flex flex-col justify-center items-center transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 hover:bg-gray-100"
            >
              <div className="text-center font-bold text-2xl mb-2">
                Quick Facts
              </div>
              <span className="text-sm">
                Explore key facts about Mercedes-Benz
              </span>
            </a>
            <a
              href="#FD"
              className="quick-fact bg-white rounded-lg p-4 flex flex-col justify-center items-center transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 hover:bg-gray-100"
            >
              <div  className="text-center font-bold text-lg mb-2">
                The First Driver
              </div>
              <span className="text-sm">
                Learn about the story of Bertha Benz
              </span>
            </a>
          </div>

          <div className="text-lg mt-8 text-gray-700 leading-relaxed">
            <h1 id='QF' className="text-center text-2xl font-bold">Quick Facts</h1>
            <p className="text-center font-semibold">
              For nearly a century, Mercedes-Benz has made it our mission to
              move the world. <br /> Through our employees and their
              achievements, we've created a company we can <br />
              all be proud of.
            </p>
            {/* Remaining content goes here */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            <div className="text-center">
              <figure className="relative inline-block">
                <img src={G1} alt="img-1" className="w-64 h-auto rounded-lg" />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-opacity-60 text-black text-xl">
                  <span>93 years</span>
                </figcaption>
              </figure>
              <p className="mt-4">
                Mercedes-Benz was founded in 1926 by <br />
                Karl Benz, Gottlieb Daimler, Wilhelm <br />
                Maybach and Emil Jellinek, whose <br />
                daughter Mercedes is our original <br />
                namesake.
              </p>
            </div>
            <div className="text-center">
              <figure className="relative inline-block">
                <img src={G2} alt="img-1" className="w-64 h-auto rounded-lg " />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-opacity-60 text-black text-xl">
                  <span>
                    93 <br /> locations
                  </span>
                </figcaption>
              </figure>
              <p className="mt-4">
                With offices in 93 locations worldwide <br />
                and a corporate headquarters in <br />
                Stuttgart, Germany, our global presence <br />
                continues to grow.
              </p>
            </div>
            <div className="text-center">
              <figure className="relative inline-block">
                <img src={G3} alt="img-1" className="w-64 h-auto rounded-lg " />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-opacity-60 text-black text-xl">
                  <span>
                    {' '}
                    5 <br /> Continents
                  </span>
                </figcaption>
              </figure>
              <p className="mt-4">
                Our vehicles are manufactured in 17 <br />
                countries on five continents, and <br />
                distributed all over the world.
              </p>
            </div>
            <div className="text-center">
              <figure className="relative inline-block">
                <img src={G4} alt="img-1" className="w-64 h-auto rounded-lg " />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-opacity-60 text-black text-xl">
                  <span>
                    6 <br /> firsts
                  </span>
                </figcaption>
              </figure>
              <p className="mt-4">
                From the crumple zone in 1959 to the <br />
                airbag in 1980 and PRE-SAFE® braking in <br />
                2002, Mercedes-Benz has invented <br />
                many of the automotive technologies <br />
                we see today.
              </p>
            </div>
            {/* Repeat the same structure for other grid items */}
          </div>

          <div className="border-t border-gray-500 text-center py-16">
            <h1 id='FD' className="font-bold text-4xl mb-4">The First Driver</h1>
            <div className="max-w-screen-lg mx-auto">
              <iframe
                src={Bertha}
                className="mx-auto   rounded-md  h-[700px] w-[1000px]"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-lg mb-8">
              <span className="font-bold">Bertha Benz: The First Driver</span>{' '}
              <br />
              She forged the road ahead and paved it for us all. Discover the
              story of Bertha Benz and her historic first drive.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default AboutUs;
