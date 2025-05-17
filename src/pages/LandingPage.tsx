import Hero from "../components/LandingPage/Hero";
import Navbar from "../components/LandingPage/Navbar";

const LandingPage = () => {
  return (
    <div className="mx-auto">
      <Navbar />

      {/* Hero Section */}
      <section className="w-screen p-4 md:px-42">
        <Hero />
      </section>
    </div>
  );
};

export default LandingPage;
