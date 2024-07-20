import { Headset, Monitor, SquareActivity, Truck } from "lucide-react";

const featureItems = [
  {
    title: "High Quality",
    description: "Providing Best Product",
    Icon: Monitor,
  },
  {
    title: "Full Warranty",
    description: "100% Coverage",
    Icon: SquareActivity,
  },
  {
    title: "Free Shipping",
    description: "No Delivery Issues",
    Icon: Truck,
  },
  {
    title: "Support 24/7",
    description: "Handled By Experts",
    Icon: Headset,
  },
];

const Features = () => {
  return (
    <section id="features" className="px-6 py-14 lg:px-24">
      <div className="grid w-full grid-cols-1 justify-between divide-y rounded-xl bg-primary px-6 py-6 text-background sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:rounded-full lg:px-12">
        {featureItems.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={item.title}
            className="flex w-full items-center gap-3 py-2 sm:w-auto lg:px-6 lg:py-0"
          >
            <div className="">
              <item.Icon className="size-12 lg:size-16" strokeWidth={1.3} />
            </div>
            <div className="">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
