export default function Services() {
  const services = [
    {
      title: "Bespoke Couture",
      description:
        "Custom-designed garments tailored to reflect your individuality, elegance, and personal style.",
    },
    {
      title: "Evening & Occasion Wear",
      description:
        "Sophisticated gowns and statement pieces crafted for celebrations, galas, and special occasions.",
    },
    {
      title: "Traditional Attire",
      description:
        "Modern interpretations of traditional fashion that honour heritage while embracing contemporary design.",
    },
    {
      title: "Bridal Couture",
      description:
        "Exclusive bridal creations designed to make your special day unforgettable.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white text-black py-28 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-gray-500 mb-4">
            Services
          </p>

          <h2 className="text-4xl lg:text-5xl mb-6">
            Crafted For Every Occasion
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 leading-8">
            From bespoke couture to timeless occasion wear, every piece is
            designed with precision, craftsmanship, and elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 p-10 hover:border-black transition duration-300"
            >
              <h3 className="text-2xl mb-6">{service.title}</h3>

              <p className="text-gray-600 leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}