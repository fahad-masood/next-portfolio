import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="text-black relative py-4 z-10">
        <div className="flex items-center justify-between">
          <div className="md:flex hidden">
            <Link
              className="md:flex hidden mx-5 font-medium text-lg"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="md:flex hidden mx-5 font-medium text-lg"
              href="/socials"
            >
              Socials
            </Link>
          </div>
          <Link className="text-4xl font-bold" href="">
            F
          </Link>
          <div className="md:hidden block cursor-pointer">
            <Image src="images/hamburger.svg" width={24} height={24} alt="" />
          </div>
          <div className="md:flex hidden">
            <Link
              className="md:flex hidden mx-5 font-medium text-lg"
              href="/skills"
            >
              Skills
            </Link>
            <Link
              className="md:flex hidden mx-5 font-medium text-lg"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden  text-black flex-col w-full transition ease-in-out flex items-end justify-end text-lg ">
          <Link aria-label="Projects" className="my-3" href="/projects">
            Projects
          </Link>
          <Link aria-label="Socials" className="my-3" href="/socials">
            Socials
          </Link>
          <Link aria-label="Skills" className="my-3" href="/skills">
            Skills
          </Link>
          <Link aria-label="Contact" className="my-3" href="/contact">
            Contact
          </Link>
        </div>
      </header>
      <div className="header-gradient absolute top-[-100px] left-0 right-0"></div>
    </div>
  );
};
