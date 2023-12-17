import Image from "next/image";

export default function Student() {
  return (
    <section className="student-container w-full px-4 md:px-[120px] flex flex-col overflow-hidden gap-5  ">
      <div className="w-full py-[96px]  flex flex-col px-8 gap-8">
        <div className="student-logo w-full flex justify-center">
          <Image
            src={"/sampleLogo.png"}
            width={167}
            height={34}
            className="logo"
            alt="logo"
          />
        </div>
        <h1 className="course-title text-2xl md:text-5xl -tracking-[0.96px] font-medium text-center">
          Courses was fantastic! It is Master platform for those looking to
          start a new career, or need a refresher.
        </h1>

        <div className="student-info w-full flex flex-col justify-center gap-2">
          <div className="student-image w-full flex justify-center">
            <Image
              src={"/tutors/Avatar1.png"}
              width={64}
              height={664}
              className="student"
              alt="avatar"
            />
          </div>
          <h1 className="font-[500] text-center text-[#101828] text-sm">Jacob Jones</h1>
          <p className="font-normal text-center text-gray-text text-sm">
            Student, National University
          </p>
        </div>
      </div>
    </section>
  );
}
