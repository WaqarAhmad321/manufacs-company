import Particles from "./ui/particles";
import { PulsatingButton } from "./ui/shimmer-button";
import { MotionDiv, MotionH1, MotionP, MotionVideo } from "./motion-tags";
import { Spotlight } from "./ui/spotlight-effect";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex w-full justify-center bg-brand-dark px-4 bg-grid-white/[0.2] lg:h-[70rem]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

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
          className="bg-opacity-50 bg-gradient-to-b from-neutral-100 to-neutral-200 bg-clip-text py-7 text-center font-lexend text-4xl font-bold text-transparent md:text-6xl lg:text-8xl max-w-screen-2xl"
        >
          Building software that delivers real-world results
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
          className="mx-auto text-center font-manrope text-base font-normal leading-7 tracking-wide text-neutral-200 lg:text-[22px]"
        >
          At Manufacs, we deliver efficient digital solutions that ensure a
          great user experience, <br className="hidden md:block" /> drive
          business growth, and provide ongoing support for your success.
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
          <Link href="/contact">
            <PulsatingButton className="z-50 bg-white font-lexend font-bold uppercase text-brand hover:cursor-pointer lg:text-xl">
              Book a free Consultation
            </PulsatingButton>
          </Link>
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
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
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
      <Spotlight className="-top-40 left-0 overflow-x-hidden md:-top-20 md:left-60" />
    </div>
  );
};

export default HeroSection;
