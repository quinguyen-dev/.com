import Image from "next/image";
import Phone from "../../../public/images/space-black.png";

function IntroCard({
  header,
  children,
  right = false,
}: {
  header: string;
  children: React.ReactElement;
  right?: boolean;
}) {
  return (
    <div className="flex max-w-[364px] flex-col">
      <h1 className={`px-2 text-xl ${right ? "text-right" : "text-left"}`}>
        {header}
      </h1>
      <hr className="my-2" />
      <div className={`px-2 [&>p]:${right ? "text-right" : "text-left"}`}>
        {children}
      </div>
    </div>
  );
}

export default function IntroPage() {
  return (
    <div className="flex h-full w-full select-none items-center justify-center space-x-8">
      {/* <!-- Left-mosttext-left information cards --> */}
      <div className="grid h-[400px] grid-rows-2">
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
      <div className="relative -translate-y-8">
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
      <div className="grid h-[400px] grid-rows-2">
        <IntroCard header="WHERE" right>
          <p className="text-sm text-[#A9A9A9]">
            I am based in Worcester, MA, where I attend Worcester Polytechnic
            Institute as a graduate student.
          </p>
        </IntroCard>
        <IntroCard header="MORE" right>
          <p className="text-sm text-[#A9A9A9]">
            Contact me at the following platforms.
          </p>
        </IntroCard>
      </div>
    </div>
  );
}
