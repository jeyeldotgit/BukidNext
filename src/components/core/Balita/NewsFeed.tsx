import { FaRegNewspaper } from "react-icons/fa";
import img from "../../../../images/heroimg.png";

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  date: string;
};

const news: NewsItem[] = [
  {
    id: 1,
    title: "Bagong Teknik sa Pagpapatubo ng Palay, Ipinakilala",
    summary:
      "Ang bagong teknolohiya ay naglalayong pataasin ang ani ng mga magsasaka sa rehiyon ng Gitnang Luzon.",
    date: "Mayo 15, 2025",
  },
  {
    id: 2,
    title: "Market Price Update: Tumataas ang Presyo ng Sibuyas",
    summary:
      "Ayon sa DA, may kakulangan sa supply ng sibuyas kaya tumaas ang presyo sa mga pamilihan.",
    date: "Mayo 10, 2025",
  },
];

const NewsFeed = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10 px-4 md:px-0">
        <FaRegNewspaper className="text-malunggay-green text-3xl" />
        <h2 className="text-4xl font-headline text-headline tracking-wide">
          Mga Balita
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {news.map((item) => (
          <article
            key={item.id}
            className="flex flex-col md:flex-row gap-6 px-4 md:px-6 py-6 border-b border-[#e7d7ba] bg-white hover:bg-[#FDEBC1] rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            {/* Left: Thumbnail */}
            <img
              src={img}
              alt="Balita thumbnail"
              className="rounded-full w-20 h-20 object-cover flex-shrink-0"
              loading="lazy"
              width={80}
              height={80}
            />

            {/* Right: Content */}
            <div className="flex-1 flex flex-col">
              {/* Header: Source + Date */}
              <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm font-body mb-1">
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="News source avatar"
                    className="w-6 h-6 rounded-full"
                    loading="lazy"
                    width={24}
                    height={24}
                  />
                  <span className="font-semibold text-malunggay-green">
                    Gov't News
                  </span>
                </div>
                <time
                  dateTime={item.date}
                  className="uppercase tracking-wider font-mono"
                >
                  {item.date}
                </time>
              </div>

              {/* Title */}
              <h3
                tabIndex={0}
                role="link"
                className="font-headline text-xl md:text-2xl text-headline mb-3 cursor-pointer hover:text-malunggay-green-darker transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-malunggay-green rounded"
                aria-label={`Basahin ang balita: ${item.title}`}
              >
                {item.title}
              </h3>

              {/* Summary */}
              <p className="font-body text-body text-sm md:text-base line-clamp-3 mb-4 leading-relaxed">
                {item.summary}
              </p>

              {/* Actions */}
              <nav
                aria-label="Balita actions"
                className="flex items-center gap-6 text-malunggay-green-darker text-sm font-semibold select-none"
              >
                <button className="flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-malunggay-green transition rounded px-2 py-1">
                  Basahin <span aria-hidden="true">→</span>
                </button>
                <button
                  aria-label="Like"
                  className="flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-malunggay-green"
                >
                  👍 24
                </button>
                <button
                  aria-label="Comment"
                  className="flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-malunggay-green"
                >
                  💬 7
                </button>
              </nav>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
