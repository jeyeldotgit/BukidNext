import {
  FaSearch,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaLockOpen,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-xl text-white" />,
    title: "Maghanap",
    description: "Pumili ng aralin sa iyong wika — Tagalog o Cebuano.",
  },
  {
    icon: <FaChalkboardTeacher className="text-xl text-white" />,
    title: "Matuto",
    description:
      "Magbasa, makinig, o manood ng aralin — kahit offline kapag na-download.",
  },
  {
    icon: <FaCheckCircle className="text-xl text-white" />,
    title: "Subaybayan",
    description: "Sagutan ang mga pagsusulit at tingnan ang iyong progreso.",
  },
  {
    icon: <FaLockOpen className="text-xl text-white" />,
    title: "I-unlock ang mga Tampok",
    description:
      "Kapag naka-sign in ka, ma-access mo ang lahat ng core features tulad ng tracker at download.",
  },
];

const Walkthrough = () => {
  return (
    <section className="w-full bg-[#faf3e0] py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Paano Gamitin ang App{" "}
        <span className="text-malunggay-green">/ Step-by-Step</span>
      </h2>

      <div className="max-w-3xl mx-auto relative border-l-4 border-malunggay-green pl-6 space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-8 top-1.5 bg-malunggay-green rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-dark-soil-brown">
              {step.title}
            </h3>
            <p className="text-sm text-dark-soil-brown mt-1">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;
