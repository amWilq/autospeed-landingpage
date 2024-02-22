import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
<section style={{ backgroundColor: '#131316' }} className="flex justify-center items-center flex-col sm:flex-row m-1">
  <div className="flex items-center mb-3 sm:mb-0 mr-2">
    <FaPhone size={24} className="mr-2" color="#841404" />
    
    <span > 600 155 773</span>
    <span className="mx-2 text-gray-500">|</span>
    
    <span> 600 155 773</span>

  </div>
  <div className="flex items-center">
    <FaEnvelope className="mr-2" size={24} color="#841404" /> jan.kowalski@example.com
  </div>
</section>



      <div className="w-full h-20 top-0" style={{ backgroundColor: '#841404' }}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/">
                  <p>STRONA GLÓWNA</p>
                </Link>

              </li>
              <li>
                <Link href="/localization">
                  <p>LOKALIZACJA</p>
                </Link> 
              </li>
              <li>
                <Link href="/contact">
                  <p>KONTAKT</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;