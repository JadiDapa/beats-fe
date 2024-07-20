import { Button } from "@/components/ui/button";
import AnimatedNumbers from "react-animated-numbers";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-start px-6 py-12 lg:flex-row lg:justify-between lg:px-24"
    >
      <div className="">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center text-5xl font-medium lg:text-start lg:text-6xl/[1.1]"
        >
          Embrace{" "}
          <span className="font-semibold text-primary underline">Voices</span>{" "}
          <br />
          That Goes In Your Mind
        </h1>
        <h2
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
          className="mt-6 max-w-md text-center text-sm lg:text-start lg:text-base"
        >
          We Providing best quality of audio gadgets. Statify your hearing
          experience with{" "}
          <span className="border-b-2 font-semibold text-primary">Beats!</span>
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3 lg:justify-normal">
          <Button
            data-aos="zoom-in"
            data-aos-delay="400"
            className="rounded-full px-6"
          >
            <a href="#featured-product" className="h-full w-full">
              Explore Now
            </a>
          </Button>
          <Button
            data-aos="zoom-in"
            data-aos-delay="400"
            variant={"outline"}
            className="rounded-full px-6"
          >
            <Link to="/about" className="w-full">
              Learn More
            </Link>
          </Button>
        </div>
        <div className="mt-10 flex justify-center divide-x divide-muted-foreground lg:justify-normal">
          <div className="flex flex-col items-center gap-3 px-3 lg:pr-6">
            <AnimatedNumbers
              className="text-primary"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={15}
              fontStyle={{
                fontSize: 36,
              }}
            />
            <p className="">Products</p>
          </div>
          <div className="flex flex-col items-center gap-3 px-3 lg:px-6">
            <AnimatedNumbers
              className="text-primary"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.2,
              })}
              animateToNumber={850}
              fontStyle={{
                fontSize: 36,
              }}
            />
            <p className="">Customers</p>
          </div>
          <div className="flex flex-col items-center gap-3 px-3 lg:px-6">
            <AnimatedNumbers
              className="text-primary"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.5,
              })}
              animateToNumber={3}
              fontStyle={{
                fontSize: 36,
              }}
            />
            <p className="">Categories</p>
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex w-full justify-center lg:mt-0 lg:w-2/6">
        <div className="absolute top-12 z-0 h-[420px] w-[360px] rounded-t-full bg-muted/50 lg:bottom-6 lg:left-6" />
        <div className="absolute top-16 z-30 w-[240px] lg:bottom-14 lg:right-16 lg:top-0 lg:w-[320px]">
          <img
            src="/images/hero.png"
            className="object-cover"
            alt="Gizmo Product"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="600"
          />
        </div>

        <div className="relative z-10 h-[420px] w-[400px] scale-90 rounded-t-full bg-secondary lg:scale-100" />
        <div className="absolute -bottom-6 -left-2 z-20 h-[420px] w-[400px] scale-90 rounded-t-full border-2 sm:right-72 lg:-left-8 lg:scale-100" />
      </div>
    </section>
  );
};

export default Hero;
