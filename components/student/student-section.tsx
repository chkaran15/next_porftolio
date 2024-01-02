import Image from "next/image";

export default function Student() {
  return (
    <section
      id="about"
      className="student-container w-full px-4 md:px-[120px] flex flex-col overflow-hidden gap-5  "
    >
      <div className="w-full py-[96px]  flex flex-col px-8 gap-8">
        <h1 className="course-title text-2xl md:text-5xl -tracking-[0.96px] font-medium text-center">
          Learn more about me here.
        </h1>

        <div className="student-info w-full flex flex-col justify-center gap-2">
          <div className="student-image w-full  flex justify-center">
            <Image
              src={"/header/student.png"}
              width={64}
              height={664}
              className="student rounded-full "
              alt="avatar"
            />
          </div>
          <h1 className="font-[500] text-center text-[#101828] text-lg">
            Karan Chaudhary
          </h1>
          <div className="flex justify-center w-full items-center">
            <p className="w-full lg:w-[50%] font-normal text-center text-gray-text ">
              Hi, I am Karan Chaudhary, a highly motivated final year student
              eager to learn new technologies and execute projects as per
              requirements. I possess excellent communication and leadership
              skills, along with the ability to manage time, solve problems, and
              multitask effectively. I am a dedicated learner, constantly
              striving for personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
