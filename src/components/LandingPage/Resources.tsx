import {
  FaNewspaper,
  FaLightbulb,
  FaInfoCircle,
  FaTools,
} from "react-icons/fa";

const resources = [
  {
    icon: <FaNewspaper className="text-3xl icon" />,
    title: "Mga Abiso ng DA",
    description:
      "Mga abiso mula sa Department of Agriculture tungkol sa peste, subsidiya, at mga pananim.",
    link: "#",
  },
  {
    icon: <FaLightbulb className="text-3xl icon" />,
    title: "Mga Tip sa Smart Farming",
    description:
      "Makabagong teknik sa pagsasaka na makatutulong upang mapabuti ang ani sa iyong bukid.",
    link: "#",
  },
  {
    icon: <FaInfoCircle className="text-3xl icon" />,
    title: "Mga Programa ng Gobyerno",
    description:
      "Listahan ng mga ayuda at programa para sa mga magsasaka sa iba't ibang rehiyon.",
    link: "#",
  },
  {
    icon: <FaTools className="text-3xl icon" />,
    title: "Tulong sa Modernisasyon",
    description:
      "Gabay sa paggamit ng makabagong kagamitan at teknolohiya para sa mas episyenteng pagsasaka.",
    link: "#",
  },
];

const Resources = () => {
  return (
    <section className="w-full bg-[#faf3e0] py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Government Support & Tips{" "}
        <span className="text-malunggay-green">/ Mga Artikulo</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {resources.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-malunggay-green/10 p-8 rounded-2xl">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-dark-soil-brown">
                {item.title}
              </h3>
              <p className="mt-2 text-dark-soil-brown">{item.description}</p>
              <a
                href={item.link}
                className="mt-3 inline-block text-malunggay-green font-semibold hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
