import Features from "../components/LandingPage/Features";
import Footer from "../components/LandingPage/Footer";
import Hero from "../components/LandingPage/Hero";
import Navbar from "../components/LandingPage/Navbar";
import Resources from "../components/LandingPage/Resources";
import Walkthrough from "../components/LandingPage/Walkthrough";

const LandingPage = () => {
  return (
    <div className="mx-auto">
      <Navbar />

      {/* Hero Section */}
      <section className=" md:px-32">
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Resources />
      </section>
      <section>
        <Walkthrough />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
