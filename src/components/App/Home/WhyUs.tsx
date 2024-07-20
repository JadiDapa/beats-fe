import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const carouselImage = [
  {
    url: "/images/cs1.png",
    alt: "Why Us 1 Images",
  },
  {
    url: "/images/cs2.png",
    alt: "Why Us 2 Images",
  },
  {
    url: "/images/cs3.png",
    alt: "Why Us 3 Images",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="flex flex-col justify-between bg-secondary px-6 py-20 lg:flex-row lg:px-24"
    >
      <div className="flex-1 space-y-6">
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="max-w-fit border-b-4 border-primary text-5xl font-semibold"
        >
          Why <span className="font-extrabold">BEATS</span> ?
        </h2>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
          className="prose lg:prose-lg"
        >
          <p>
            We trying to providing the best experience of every corner in audio
            world. BEATS giving you high quality audio and sleek comfy. With the
            most latest technology provided, the voices that given is the best
            for you
          </p>
          <p>
            We also giving you the most comfortable shipping moment and 100%
            covered warranty to giving the most trustworthy products for our
            cosuments, right! its for you!
          </p>
        </div>
        <Button
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          className="flex items-center gap-3"
        >
          <Phone />
          <span>Contact Us</span>
        </Button>
      </div>
      <div className="relative mt-12 flex flex-1 justify-center lg:mt-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="z-10 p-2"
        >
          <CarouselContent className="size-72 lg:size-96">
            {carouselImage.map((image) => (
              <CarouselItem
                key={image.alt}
                className="aspect-square w-full overflow-hidden"
              >
                <img
                  src={image.url}
                  className="h-full w-full object-cover"
                  alt={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-[140px] font-black tracking-wide text-white drop-shadow-2xl">
          BEATS
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
