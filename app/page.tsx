import Ads from "@/components/ads/ads";
import Blog from "@/components/blog/blog-section";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Programs from "@/components/programs/program-section";
import TransistionAnimation from "@/components/service/transistion";
import Services from "@/components/services/service-section";
import Student from "@/components/student/student-section";
import Tutors from "@/components/tutors/tutor-section";


export default function Home() {
  return (
    <>
      <TransistionAnimation title={"Home"} />
      <main className="w-full flex flex-col gap-20">
        <Header />
        <Services />
        <Student />
        <Ads />
        <Programs />
        <Tutors />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
