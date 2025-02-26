import Image from "next/image";

import { Button } from "@/components/ui/button";
import { spaceMono } from "@/config/font";

export default function HeroSectionGradientBackground() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-7 lg:py-32">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          {/* first block of flex */}
          <div className="relative z-10">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <p className={`${spaceMono.className} antialiased text-lg`}>
                  I'm Amit, a..
                </p>
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    A Full Stack Developer
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl">
                  {/* description */}
                  <p className="text-sm lg:text-base  text-muted-foreground font-stretch-expanded tracking-normal !leading-8">
                    <span className="rounded-md bg-zinc-800 px-1.5 py-0.5 text-zinc-200">
                      NextJs Specialist
                    </span>{" "}
                    Shaping High-Impact Projects.{" "}
                    <br className="block sm:hidden" />
                    <span className="rounded-md bg-zinc-800 px-1.5 py-0.5 text-zinc-200">
                      Open-Source Contributor
                    </span>{" "}
                    with Proven Reach. <br className="block sm:hidden" />
                    <span className="rounded-md bg-zinc-800 px-1.5 py-0.5 text-zinc-200">
                      DSA Expertise
                    </span>{" "}
                    for Top-Tier Efficiency.
                  </p>
                  {/* end description  */}
                </div>
                {/* Buttons */}
                <div className="mt-8 gap-3 flex justify-center">
                  <Button size={"lg"}>Get started</Button>
                  <Button size={"lg"} variant={"outline"}>
                    Learn more
                  </Button>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
          {/* first block of flex is ended  */}
          <div>
            {/* second block of flex */}
            <Image
              alt="Hero"
              className="w-[200px] h-[200px]  lg:w-[300px] lg:h-[300px] rounded-full mx-auto"
              height={300}
              src="/profile2.jpg"
              width={300}
            />
          </div>
          {/* second block ended of flex  */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
