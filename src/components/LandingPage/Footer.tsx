const Footer = () => {
  return (
    <footer className=" text-dark-soil-brown py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Brand / Mission */}
        <div>
          <h2 className="text-3xl font-extrabold text-dark-soil-brown mb-4">
            Bukid<span className="text-malunggay-green">Next</span>
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            Ang kinabukasan ng agrikultura ay narito. BukidNext ay nagbibigay ng
            libre, makabago, at lokal na edukasyon para sa mga magsasaka.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Mga Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-malunggay-green transition">
                📘 Aralin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-malunggay-green transition">
                🧑‍🌾 Tungkol sa Amin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-malunggay-green transition">
                🤝 Suporta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-malunggay-green transition">
                🔐 Mag-sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Makipag-ugnayan</h3>
          <p className="text-sm opacity-80 mb-2">
            May suhestiyon, tanong, o nais na ibahagi?
          </p>
          <a
            href="mailto:bukidnext@gmail.com"
            className="text-malunggay-green font-medium hover:underline"
          >
            📩 bukidnext@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-rice-husk-beige mt-12 text-center text-xs text-dark-soil-brown/70">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">BukidNext</span>. Lahat ng karapatan ay
        nakalaan.
      </div>
    </footer>
  );
};

export default Footer;
