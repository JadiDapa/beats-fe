const OurStory = () => {
  return (
    <section className="space-y-6 bg-secondary px-6 py-12 lg:px-24">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="relative mt-6 grid grid-cols-2 gap-6 lg:grid-cols-6"
      >
        <figure className="col-span-1 h-44 overflow-hidden rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIhN0zF0wTsz02KMP9uo3b-iMwKoax-fP2ievP5NWEpW0hQ-lapWe2OsGDvrDekK3LxA&usqp=CAU"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </figure>
        <figure className="col-span-1 h-44 overflow-hidden rounded-md lg:col-span-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAQaGfogPFQOmfsXImKNYTwnmlKj-zOnCUA&s"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </figure>
        <figure className="col-span-2 h-44 overflow-hidden rounded-md lg:col-span-3">
          <img
            src="https://images.fastcompany.com/image/upload/f_auto,c_fit,w_1920,q_auto/fc/3042176-poster-p-1-how-beats-tapped-the-stories-of-sport-to-sell-the-emotion-of-sound.webp"
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </figure>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" className="space-y-6">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="max-w-fit border-b-4 border-primary text-5xl font-semibold"
        >
          Our Story
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-duration="700"
          className="prose lg:prose-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          doloribus, consectetur, nam repellendus optio adipisci voluptates
          consequatur eligendi distinctio doloremque nobis excepturi molestiae
          sit!
        </p>
        <p className="prose lg:prose-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          minima sunt reiciendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi architecto est explicabo maiores incidunt.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
