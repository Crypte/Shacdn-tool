'use client'

import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { NAV_BAR } from '@/constants';
import Link from 'next/link';

export const Navbarmobile= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const main = document.getElementById('body');
  
    if (main) {
      if (isMenuOpen) {
        main.classList.add('disable-scroll');
      } else {
        main.classList.remove('disable-scroll');
      }
    }
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="xl:hidden block">
      <div className={`overlay transition ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={toggleMenu} />
      <div className="fixed w-full top-0 z-50 backdrop-blur-md pt-4 px-4">
        <div className="bg-black rounded-2xl transition-all flex items-center justify-between p-3  shadow-[0px_0px_50px_-10px_rgba(0,0,0,0.81)]">
          <div className="flex mr-4">
            <Link
              href='/'
              className="flex items-center text-3xl gap-6"
              onClick={() => {
                closeMenu();
              }}
            >
              <Image className="rounded-lg" src={'/logo_app/logoblack.png'} width={40} height={40} alt="logo" />
            </Link>
          </div>

          <div className="cursor-pointer p-2" onClick={toggleMenu}>
            {isMenuOpen ? <VscChromeClose size={30} color="white" /> : <GiHamburgerMenu size={30} color="white" />}
          </div>
        </div>
      </div>
      <div className={`overflow-scroll fixed top-20 left-0 right-0 bottom-0 px-10 z-20 h-auto pb-12 transition ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="fixios mt-12">
          {NAV_BAR.map((link) => (
            <div key={link.key}>
              <h2 className="my-3 pb-2 border-b border-white/30 text-white text-3xl mt-6">{link.label}</h2>
              {link.submenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  <label className="py-4 text-xl text-center text-white cursor-pointer transition duration-300 ease-in-out flex items-center" htmlFor={item.label}>
                    <div className="ml-2 flex items-center gap-5">
                    <span className="p-1.5 bg-white/20 rounded-lg"><item.icon size={25} className="text-main-color"/></span>
                      <span className=" text-xl">{item.label}</span>
                    </div>
                  </label>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};