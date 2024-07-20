const FindUs = () => {
  return (
    <section id="find-us" className="space-y-6 px-6 py-12 lg:px-24">
      <h2 className="max-w-fit border-b-4 border-primary text-5xl font-semibold">
        Find Us!
      </h2>
      <figure className="w-full cursor-pointer overflow-hidden lg:h-72">
        <img
          src="/images/map.png"
          className="object-contain object-center"
          alt="Gizmo Location Map"
        />
      </figure>
    </section>
  );
};

export default FindUs;
