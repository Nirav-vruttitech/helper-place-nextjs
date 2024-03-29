"use client";
import React from "react";
import { NavLinks } from "@/data/NavLinks";
import Link from "next/link";
import { AiOutlineCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto px-2 my-2 h-14 flex items-center md:justify-center lg:justify-between gap-x-5 lg:gap-x-0">
        {/* logo */}
        <div className="lg:hidden md:absolute text-[30px] left-5">
          <GiHamburgerMenu />
        </div>
        <div className="">
          <Link href={"/"}>
            <img src={"/helperPlace.svg"} height={150} width={170} alt="helper-place-logo" />
          </Link>
        </div>
        {/* menu */}
        <nav className="hidden w-10/12 lg:flex justify-between items-center">
          <ul className="flex w-[550px] justify-between font-semibold lg:text-base lg:px-5  xl:px-0">
            {NavLinks.map((link) => {
              return (
                <li key={link.id} className={`uppercase cursor-pointer hover:text-primary`}>
                  {link.id === 4 ? (
                    <div className={`group relative flex cursor-pointer items-center gap-2`}>
                      <span>{link.title}</span>
                      <span className="lg:text-base">
                        <AiOutlineCaretDown />
                      </span>
                      {/* <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                    </div> */}
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`${
                        pathname === link.path ? "text-primary" : "text-gray-800"
                      }  hover:text-primary`}
                    >
                      <span>{link.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Login & Singup */}
          <div className="flex gap-x-5 text-white font-semibold">
            <button
              onClick={() => alert("click on login")}
              className={`btn-style bg-greenbtn uppercase p-2 rounded-md`}
            >
              Login
            </button>
            <button className="btn-style bg-yellowbtn uppercase p-2 rounded-md">register</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
