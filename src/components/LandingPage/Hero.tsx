import heroimg from "../../../images/apphero.png";

const Hero = () => {
  return (
    <div
      className="relative h-[650px] md:h-[calc(100vh-100px)] md:w-full bg-cover bg-center flex items-start justify-start "
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="flex flex-col justify-between md:justify-normal h-full p-8 gap-6 md:text-left md:w-full  md:rounded-lg md:gap-8 md:container md:py-24">
        <h1 className="text-4xl font-semibold md:text-5xl md:font-bold xl:text-6xl xl:font-medium  flex flex-col gap-3">
          <span>Palakasin ang</span>
          <span>Karunungan</span>
          <span>ng mga</span>
          <span>Magsasaka</span>
        </h1>
        <div>
          <p className="bg-rice-husk-beige p-2 rounded-2xl opacity-70 text-xl font-bold  md:text-2xl xl:text-3xl md:font-body md:bg-transparent text-dark-soil-brown">
            Isang plataporma ng <span>online</span> <br />
            <span className="text-rice-husk-beige"></span>
            na edukasyon para sa{" "}
            <span className="font-headline font-bold">AGRIKULTURA</span>
          </p>
        </div>
        <div>
          <button className="bg-malunggay-green-darker hover:bg-malunggay-green transition ease-in-out duration-200 text-rice-husk-beige text-2xl font-semibold px-6 py-3 rounded-3xl">
            Magumpisang Matuto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
