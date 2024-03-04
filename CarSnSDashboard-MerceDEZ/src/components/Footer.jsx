import { FaGithub } from 'react-icons/fa';
import { FaMeta, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="container mx-auto py-8 flex flex-col items-center justify-center">
        <p className="text-center text-lg">
          © 2024 Dotaizz. All Rights Reserved.
        </p>

        <div className="mt-4 flex space-x-4">
          <a href="https://twitter.com/dotaizz44865" className="text-xl">
            <FaXTwitter className="hover:text-[#2c95e0] hover:scale-150" />
          </a>
          <a href="#" className="text-xl">
            <FaMeta className="hover:text-[#2c95e0] hover:scale-150" />
          </a>
          <a
            href="https://github.com/Ruturaj2003/CarSnSDashboard"
            className="text-xl"
          >
            <FaGithub className="hover:text-[#2c95e0] hover:scale-150" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
