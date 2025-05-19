import {
  FaBookOpen,
  FaCloudDownloadAlt,
  FaHeadphones,
  FaChartLine,
  FaCalendarAlt,
  FaBalanceScale,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen className="text-4xl text-green-700" />,
    title: "Lokal na mga Leksyon",
    desc: "Mga aralin sa Tagalog at Cebuano para mas madaling maintindihan.",
  },
  {
    icon: <FaHeadphones className="text-4xl text-green-700" />,
    title: "Audio at Video",
    desc: "Makinig o manood ng mga aralin para sa mas malalim na pag-unawa.",
  },
  {
    icon: <FaChartLine className="text-4xl text-green-700" />,
    title: "Tagasubay ng Progreso",
    desc: "Subaybayan ang mga natapos mong aralin at quizzes.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-green-700" />,
    title: "Kalendaryong Pansakahan",
    desc: "Gabay sa pagtatanim ayon sa panahon at rehiyon.",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-green-700" />,
    title: "Presyo ng Pananim",
    desc: "Alamin ang makatwirang presyo ng mga pananim batay sa kaalaman at datos.",
  },
  {
    icon: <FaCloudDownloadAlt className="text-4xl text-green-700" />,
    title: "Maaring I-download",
    desc: "I-download ang mga leksyon para mabasa kahit offline.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-rice-husk-beige py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Core Features{" "}
          <span className="text-malunggay-green">/ Mga Tampok</span>
        </h2>
        <p className="text-center text-dark-soil-brown mb-12 max-w-2xl mx-auto">
          Gisagol ang teknolohiya ug lokal nga kasayuran aron mas mapadali ang
          imong pagkat-on ug pagpanguma. Ani ang mga gipangandam nga mga gamit:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#ffe5a8] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              {feature.icon}
              <h3 className="mt-4 font-semibold text-lg text-green-700">
                {feature.title}
              </h3>
              <p className="text-sm mt-2 text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
