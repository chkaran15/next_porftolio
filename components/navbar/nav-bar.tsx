"use client";
import Image from "next/image";
import SearchBar from "./search-bar";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

interface Type {
  open: boolean;
  setOpen: Function;
}

export default function Navbar({ open, setOpen }: Type) {
  return (
    <>
      {!open ? (
        <nav
          className={`navbar w-full px-5 sm:px-4 lg:px-[90px] py-[28px] overflow-hidden ${
            open ? "opacity-60" : ""
          }`}
        >
          <div className=" w-full flex gap-0 lg:gap-1 xl:gap-[92px] items-center rounded-lg  justify-between">
            <div className="flex  w-full  gap-4 justify-between  md:justify-start xl:justify-between items-center md:gap-6">
              <HiMenu
                className="block xl:hidden text-2xl mt-2"
                onClick={() => setOpen(true)}
              />

              <Image
                src={"/logo/logo.png"}
                width={167}
                height={34}
                className="logo hidden lg:block"
                alt="logo"
              />

              {/* <SearchBar /> */}

              <div className="hidden xl:flex gap-6 items-center  text-base font-medium  text-[#101828]">
                <Link href="#">Program</Link>
                <Link href="#">Enterprise</Link>
                <Link href="#">Universities</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#"
                className="align-center text-base font-medium text-[#101828] w-20"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="bg-voilet text-[#FFFFFF] border-1 px-4 py-[10px] border-voilet rounded-lg w-[175px]"
              >
                Create free account
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <div className="navbar-show flex flex-col gap-2 px-4 py-4 overflow-y-scroll  w-[320px] h-screen  bg-white ">
          <div className="relative flex justify-between py-2">
            <Image
              src={"/sampleLogo.png"}
              width={167}
              height={34}
              className="logo  "
              alt="logo"
            />

            <GrFormClose
              className="absolute top-2 right-2  text-2xl "
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex flex-col gap-4 mt-5 text-base font-medium  text-[#101828]">
            <Link href="#">Program</Link>
            <Link href="#">Enterprise</Link>
            <Link href="#">Universities</Link>
          </div>

          <div className="flex md:hidden flex-col gap-4">
            <Link
              href="#"
              className="align-center text-base font-medium text-[#101828] w-20"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="bg-voilet text-[#FFFFFF] border-1 px-4 py-[10px] border-voilet rounded-lg w-[175px]"
            >
              Create free account
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
