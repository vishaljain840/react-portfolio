import React from 'react';
import logo from '../assets/vj_logo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div classname="flex flex-shrink-0 items-centre">
        <img src={logo} alt="Logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vishal-jain-8581aa150/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vishaljain840"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
