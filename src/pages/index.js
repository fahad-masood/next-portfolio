import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const aboutText = "Hi, My name is Fahad Masood. I am a Frontend Developer.";

    let i = 0;

    const interval = setInterval(() => {
      if (i < aboutText.length) {
        setText((prev) => prev + aboutText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen flex flex-col md:flex-row px-5 py-16 justify-between">
      <div className="flex-col mx-auto my-12">
        <div className="text-md text-gray-900 md:text-xl">Hello, I&apos;m</div>
        <div className="text-9xl text-gray-900 font-bold -ml-2">FAHAD</div>
        <div className="text-9xl text-gray-900 font-bold -ml-2">MASOOD</div>
        <div className="text-2xl text-gray-900 py-4">Frontend Developer</div>
        <button
          aria-label=""
          href=""
          className="my-8 py-1 px-5 mr-6 bg-[#24e9c1] shadow-xl text-md text-gray-900 hover:bg-[#009792] hover:scale-110 hover:text-white rounded-md"
        >
          Download Resume
        </button>
        <button
          target="_blank"
          aria-label="https://fahadmasood.hashnode.dev/"
          href="https://fahadmasood.hashnode.dev/"
          className="my-8 py-1 px-5 mr-6 bg-[#82daff] text-md text-gray-900  hover:bg-[#1aa1ef] hover:text-white hover:scale-110 rounded-md"
        >
          Read blogs
        </button>
      </div>

      <div className="flex-col justify-center items-center">
        <Image
          src="images/heroIllustration.svg"
          alt="Hero"
          width={548}
          height={557}
        />
      </div>
    </div>
  );
}
