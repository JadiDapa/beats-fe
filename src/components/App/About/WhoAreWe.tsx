const WhoAreWe = () => {
  return (
    <section
      id="who-are-we"
      className="flex flex-col justify-between px-6 pb-12 pt-12 lg:flex-row lg:px-24 lg:pt-24"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="400"
        className="flex-1 space-y-6"
      >
        <h1 className="max-w-fit border-b-4 border-primary text-5xl font-semibold">
          Who are we
        </h1>
        <p className="prose lg:prose-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          doloribus, consectetur, nam repellendus optio adipisci voluptates
          consequatur eligendi distinctio doloremque nobis excepturi molestiae
          sit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          minima sunt reiciendis.
        </p>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="600"
        className="relative mt-12 flex flex-1 justify-center lg:mt-6"
      >
        <figure className="z-10 aspect-[4/3] w-5/6 overflow-hidden">
          <img
            src="https://s.wsj.net/public/resources/images/MK-CF638_BEATS_P_20130818180339.jpg"
            className="h-full w-full object-cover"
            alt="About Us Image"
          />
        </figure>

        <div className="absolute -top-8 right-8 z-0 aspect-[4/3] w-4/6 border-8 border-border" />
      </div>
    </section>
  );
};

export default WhoAreWe;
