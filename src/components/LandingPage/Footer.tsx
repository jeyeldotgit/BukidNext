const Footer = () => {
  return (
    <footer className=" text-dark-soil-brown py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand / Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-dark-soil-brown">
            Bukid<span className="text-malunggay-green">Next</span>
          </h2>
          <p className="mt-3 text-sm">
            Isang plataporma para sa edukasyong agrikultural ng mga magsasaka sa
            rehiyon.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Mga Link</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Aralin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tungkol sa Amin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Suporta
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mag-sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Makipag-ugnayan</h3>
          <p className="text-sm">
            May suhestiyon o tanong? Email kami sa{" "}
            <a
              href="mailto:support@agrilern.ph"
              className="text-malunggay-green hover:underline"
            >
              support@agrilern.ph
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-rice-husk-beige mt-10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} BukidNext. Lahat ng karapatan ay nakalaan.
      </div>
    </footer>
  );
};

export default Footer;
