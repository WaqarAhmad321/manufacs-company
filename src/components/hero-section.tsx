import Particles from "./ui/particles";
import { PulsatingButton } from "./ui/shimmer-button";
import { BorderBeam } from "./ui/border-beam";
import { MotionDiv, MotionH1, MotionP, MotionVideo } from "./motion-tags";

const HeroSection = () => {
  return (
    <div className="bg-brand-dark relative flex w-full justify-center px-4 bg-grid-white/[0.2] lg:h-[70rem]">
      <div className="bg-brand-dark pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-50 mt-32 lg:mt-48">
        <MotionH1
          initial={{
            opacity: 0,
            y: 100,
          }}
          
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
          }}
          className="bg-opacity-50 py-7 text-center font-lexend text-4xl font-bold md:text-6xl lg:text-8xl"
        >
          Online presence now <br className="hidden lg:block" /> for everyone.
        </MotionH1>

        <MotionP
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
            // delay: 0.6,
          }}
          className="font-manrope mx-auto text-center text-base font-normal leading-7 tracking-wide text-neutral-200 lg:text-[22px]"
        >
          Having online business presence should not be expensive{" "}
          <br className="hidden md:block" /> That&apos;s why, Manufacs provide
          afforable digital solutions.
        </MotionP>

        <MotionDiv
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
            // delay: 0.8,
          }}
          className="z-50 mt-8 flex w-full justify-center"
        >
          <PulsatingButton className="text-brand z-50 bg-white font-lexend font-bold uppercase hover:cursor-pointer lg:text-xl">
            Book a free Consultation
          </PulsatingButton>
        </MotionDiv>

        {/* <Image
          src={HeroImage}
          alt="Hero Image"
          className="mx-auto mt-12 max-w-[87.5rem] rounded-xl"
        /> */}

        <div className="relative rounded-2xl shadow-2xl">
          <MotionVideo
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              // delay: 0.6,
              duration: 0.9,
              ease: "easeIn",
            }}
            src="/Home-Hero-Video.webm"
            // autoPlay
            muted
            // loop
            className="w-[87.5rem mx-auto mt-24 rounded-2xl lg:mt-12 lg:h-[40rem]"
          ></MotionVideo>
          {/* <BorderBeam /> */}
        </div>
      </div>

      <Particles
        className="absolute inset-0 overflow-hidden"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  );
};

export default HeroSection;
