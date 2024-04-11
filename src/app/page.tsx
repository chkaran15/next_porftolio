import Header from "@/components/home/header";
import { LandingSection } from "@/components/home/landing-section";
import ScaleVideoSection from "@/components/home/scale-video-animation";
import TransistionAnimation from "@/components/service/transistion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <TransistionAnimation title={"Home"} /> */}
      <main className="w-full flex flex-col gap-20">
        <LandingSection />
        {/* <Header /> */}
        <ScaleVideoSection />
        <div className="h-screen">zdggfas</div>
      </main>
    </>
  );
}
