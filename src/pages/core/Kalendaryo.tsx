import Navbar from "../../components/core/General/Navbar";
import PageHeader from "../../components/core/General/PageHeader";
import CropCalendar from "../../components/core/Kalendaryo/CropCalendar";

const KalendaryoPage = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-[#fefcf7] px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <PageHeader
            header="Kalendaryo ng Pagtatanim at Panahon"
            description="Tingnan ang kalendaryo para malaman ang tamang panahon ng pagtatanim
            at inaasahang lagay ng panahon."
          />

          <CropCalendar />
        </div>
      </section>
    </div>
  );
};

export default KalendaryoPage;
