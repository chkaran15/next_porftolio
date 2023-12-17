import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { PiBasketballLight } from "react-icons/pi";
import FooterCard from "./footer-card";
import data from "../../utils/Data/footer-data"

export default function Footer() {
  return (
    <section className="footer-section w-full flex flex-col px-8 md:px-[120px] py-12 bg-[#101828] gap-12 overflow-hidden text-white">
      <footer className="footer-container flex flex-col md:flex-col lg:flex-row gap-16">
        <div className="footer-logo w-full flex justify-center flex-col lg:w-[320px] gap-8">
        <Image
          src={"/footerlogo.png"}
          width={167}
          height={34}
          className="logo"
          alt="logo"
        />
        <p className="text-[#EAECF0] text-base font-normal">
          Top learning experiences that create more talent in the world.
        </p>
        </div>

        <div className="footer-link-container  w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          {
            data?.map((item, i) => 
              <FooterCard key={i} item={item}/>
            )
          }
        </div>
      </footer>

      <div className="footer-rights flex flex-col sm:flex-row justify-between gap-6">
        <h3 className="">&copy; 2022 Ed-Circle. All rights reserved.</h3>
        <div className="social-icons flex gap-6">
          <Link href="#">
            <BsTwitter className="w-[24px] h-[24px]" />
          </Link>
          <Link href="#">
            <BsLinkedin className="w-[24px] h-[24px]" />
          </Link>
          <Link href="#">
            <BsFacebook className="w-[24px] h-[24px]" />
          </Link>
          <Link href="#">
            <BsGithub className="w-[24px] h-[24px]" />
          </Link>
          <Link href="#">
            <PiBasketballLight className="w-[24px] h-[24px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
