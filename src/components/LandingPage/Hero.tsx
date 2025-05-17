import heroimg from "../../../images/heroimg2.png";

const Hero = () => {
  return (
    <div
      className="relative h-screen md:h-[calc(100vh-100px)] bg-cover bg-center flex items-start justify-start "
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="text-left w-full text-white p-8 rounded-lg flex flex-col gap-8 container py-24">
        <h1 className="md:text-5xl md:font-bold xl:text-6xl xl:font-medium  flex flex-col gap-3">
          <span>Palakasin ang</span>
          <span>Karunungan</span>
          <span>ng mga</span>
          <h1 className="text-dark-soil-brown">
            Magsa<span>saka</span>
          </h1>
        </h1>
        <div>
          <p className="md:text-2xl xl:text-3xl font-body text-dark-soil-brown">
            Isang plataporma ng <span>online</span> <br />
            <span className="text-rice-husk-beige"></span>
            na edukasyon para sa{" "}
            <span className="font-headline font-bold">AGRIKULTURA</span>
          </p>
        </div>
        <div>
          <button className="bg-malunggay-green-darker hover:bg-malunggay-green transition ease-in-out duration-200 text-rice-husk-beige text-2xl font-semibold px-6 py-3 rounded-3xl">
            Magsimula Na
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
