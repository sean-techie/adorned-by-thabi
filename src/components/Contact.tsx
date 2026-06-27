export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white text-black py-28 px-6 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-gray-500 mb-4">
          Contact
        </p>

        <h2 className="text-4xl lg:text-6xl mb-8">
          Begin Your Couture Journey
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto mb-16">
          Whether you're looking for bespoke couture, occasion wear, or a
          statement piece for your next event, Adorned by Thabi is ready to
          bring your vision to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-10">
            <h3 className="text-xl mb-4">Email</h3>

            <a
              href="mailto:adornedbythabi@gmail.com"
              className="text-gray-600 hover:text-black transition"
            >
              adornedbythabi@gmail.com
            </a>
          </div>

          <div className="border border-gray-200 p-10">
            <h3 className="text-xl mb-4">Phone</h3>

            <a
              href="tel:0627165823"
              className="text-gray-600 hover:text-black transition"
            >
              062 716 5823
            </a>
          </div>

          <div className="border border-gray-200 p-10">
            <h3 className="text-xl mb-4">TikTok</h3>

            <a
              href="https://www.tiktok.com/@adornedbythabi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              @adornedbythabi
            </a>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="https://wa.me/27627165823"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black px-10 py-4 uppercase tracking-[0.2em] hover:bg-black hover:text-white transition duration-500"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}