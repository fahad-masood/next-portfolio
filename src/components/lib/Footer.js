import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div class="flex-col relative z-10">
      <footer class="text-center items-center justify-between md:flex-row flex text-black py-4 z-10 relative">
        <div class="text-sm">
          made with ♥️ by <span class="font-bold">Fahad Masood</span>
        </div>
        <div class="flex">
          <Link
            target="_blank"
            aria-label="https://www.linkedin.com/in/fahad--masood/"
            rel="noopener noreferrer"
            class="mr-4"
            href="https://www.linkedin.com/in/fahad--masood/"
          >
            <div class="text-lg hover:animate-waving transition fade-in-out duration-500">
              <Image
                src="images/linkedin.svg"
                alt="Linkedin"
                width={16}
                height={16}
              />
            </div>
          </Link>

          <Link
            target="_blank"
            aria-label="https://github.com/fahad-masood"
            rel="noopener noreferrer"
            class="mr-4"
            href="https://github.com/fahad-masood"
          >
            <div class="text-lg hover:animate-waving transition fade-in-out duration-500">
              <Image
                src="images/github.svg"
                alt="Github"
                width={16}
                height={16}
              />
            </div>
          </Link>

          <Link
            target="_blank"
            aria-label="https://twitter.com/fahad_masood_"
            rel="noopener noreferrer"
            class="mr-4"
            href="https://twitter.com/fahad_masood_"
          >
            <div class="text-lg hover:animate-waving transition fade-in-out duration-500">
              <Image
                src="images/twitter.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </div>
          </Link>
        </div>
      </footer>
      <div class="z-0 footer-gradient absolute bottom-[0px] left-0 right-0"></div>
    </div>
  );
};
