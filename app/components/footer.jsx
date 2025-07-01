// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        
        {/* Top gradient line */}
        <div className="flex justify-center z-0">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {year} Developer Portfolio by{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tarun-benakanakonda/"
              className="text-[#16f2b3] hover:underline underline-offset-4 transition duration-300"
              aria-label="Tarun Benakanakonda LinkedIn Profile"
            >
              Tarun Benakanakonda
            </Link>
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tarunmb/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] transition duration-300"
              aria-label="Star this repository on GitHub"
            >
              <IoStar />
              <span>Star</span>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tarunmb/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] transition duration-300"
              aria-label="Fork this repository on GitHub"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>

            {/* Social Icons */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tarunmb"
              className="hover:text-[#16f2b3] transition duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tarun-benakanakonda/"
              className="hover:text-[#16f2b3] transition duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
