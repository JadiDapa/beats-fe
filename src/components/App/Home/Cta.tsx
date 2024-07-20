import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Cta = () => {
  return (
    <section id="cta" className="relative overflow-hidden py-14 lg:px-24">
      <div className="flex w-full flex-col items-center justify-between bg-secondary p-12 px-6 lg:flex-row lg:rounded-xl lg:px-12">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="max-w-lg space-y-5"
        >
          <h2 className="text-3xl/snug font-semibold">
            <span className="font-semibold text-primary">Get in touch</span> by
            contacting us just right now!
          </h2>
          <p>
            Connect with us and Stay up to date to our most relevant products
            for every updates!
          </p>
          <div className="flex items-center gap-3">
            <Input placeholder="Your email address" />
            <Button>Send</Button>
          </div>
        </div>
        <figure
          data-aos="fade-left"
          data-aos-duration="500"
          className="hidden pr-20 lg:block"
        >
          <img src="/images/logo.png" className="size-40" alt="Gizmo Logo" />
        </figure>
      </div>
    </section>
  );
};

export default Cta;
