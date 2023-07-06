import Image from "next/image";
import Phone from "../../../public/images/space-black.png";

function IntroCard({
  header,
  children,
}: {
  header: string;
  children: React.ReactElement;
}) {
  return (
    <div className="flex flex-col md:max-w-[364px]">
      <h1 className="text-xl md:px-2">{header}</h1>
      <hr className="md: my-2 hidden md:block" />
      <div className="pt-1 md:px-2 md:pt-0">{children}</div>
    </div>
  );
}

export default function IntroPage() {
  return (
    <div className="flex h-full w-5/6 min-w-[320px] select-none flex-col items-center p-0 md:w-11/12 md:flex-row md:justify-center">
      <header className="mb-12 mt-[128px] w-full text-left md:hidden">
        <h1 className="text-[48px]">QUI NGUYEN</h1>
        <h2 className="text-[#A9A9A9]">Web & Mobile Developer</h2>
      </header>
      {/* <!-- Left-most information cards --> */}
      <div className="space-y-8 md:grid md:h-[392px] md:grid-rows-2 md:space-y-0">
        <IntroCard header="WHO">
          <p className="text-sm text-[#A9A9A9]">
            I am a twenty-one (21) year old developer with a passion to create
            amazing user experiences.
          </p>
        </IntroCard>
        <IntroCard header="WHY">
          <p className="text-sm text-[#A9A9A9]">
            People judge an experience largely based on how they felt at its
            peak and at its end, rather than the total sum or average of every
            moment of the experience.
          </p>
        </IntroCard>
      </div>

      {/* <!-- Phone render --> */}
      <div className="relative hidden -translate-y-8 md:mx-8 md:block">
        <Image
          src={Phone}
          alt="iPhone 12"
          width={290}
          className="max-w-[290px]"
        />
        <div className="absolute left-1/2 top-1/2 flex h-[562px] w-[262px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-[33px] bg-[linear-gradient(180deg,_#161616_0%,_#0C0C0C_100%)] p-4">
          <small className="mt-8 text-[10px] font-bold">
            Qui is currently listening to
          </small>
        </div>
      </div>

      {/* <!-- Right-most information cards --> */}
      <div className="mt-8 space-y-8 md:mt-0 md:grid md:h-[392px] md:grid-rows-2 md:space-y-0">
        <IntroCard header="WHERE">
          <p className="text-sm text-[#A9A9A9] ">
            I am based in Worcester, MA, where I attend Worcester Polytechnic
            Institute as a graduate student.
          </p>
        </IntroCard>
        <IntroCard header="WHY">
          <p className="text-sm text-[#A9A9A9]">
            People judge an experience largely based on how they felt at its
            peak and at its end, rather than the total sum or average of every
            moment of the experience.
          </p>
        </IntroCard>
      </div>
    </div>
  );
}
