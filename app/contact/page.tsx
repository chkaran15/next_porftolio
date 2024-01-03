import { Parallex } from "@/components/common/parallex-section";
import TransistionAnimation from "@/components/service/transistion";
export default function Contact() {
  return (
    <div className="main  h-[300vh] ">
      <TransistionAnimation title={"Contact"} />
      <div className="h-screen"></div>
      <Parallex />
      <div className="h-screen"></div>
    </div>
  );
}
