/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Image from 'next/image'
import { useTheme } from "next-themes";
import { BsLinkedin } from "react-icons/bs";
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logoDark.png';


export default function Navbar() {
  const { setTheme, theme } = useTheme();
  // Check which theme is active
  if(theme === 'dark') {
    setTheme('dark');
  }

  return (
    <header className="w-full">
      <nav className="w-full flex justify-between items-center">
        <div className="font-bold text-2xl px-8 py-4">
          <Link href="/">
            <a>
              <Image 
                src={theme === 'light' ? logoDark : logo} 
                alt="logo"
                width="80px"
                height="75px" />
            </a>
          </Link>
        </div>
        
        <div className="w-full px-8 py-2 flex items-center justify-end">
          <div >
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/furkan-uelker/">
              <BsLinkedin className="ml-4"/>
            </a>
          </div>
          <div className="text-gray-400">
            <button
              className="flex justify-center items-center pl-2"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
