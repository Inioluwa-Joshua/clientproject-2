import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = ["Use Cases", "Solutions", "Resources", "Pricing", "API"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-custom-btn-black dark:text-gray-100">
                    {/* <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span> */}
                    <span className="tracking-[5px] font-light">CLIAD.AI</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none text-[#71799b] text-[1.1rem] capitalize hover:text-[#14161b]"
                      >
                        {item}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="flex flex-2 gap-3">
          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href="/"
                    className="inline-block px-1 py-2 font-norm no-underline rounded-md dark:text-gray-200 dark:focus:bg-gray-800 focus:outline-none text-[#71799b] text-[1rem] capitalize hover:text-[#14161b]"
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/"
              className="hidden lg:flex px-6 py-2 text-white bg-custom-btn-black dark:border-[bg-white] dark:border-[1px] rounded-md"
            >
              Dashboard
            </Link>
          </div>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
