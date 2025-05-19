import Navbar from "../../components/core/General/Navbar";
import { FaHandHoldingHeart, FaFeatherAlt } from "react-icons/fa";
import PageHeader from "../../components/core/General/PageHeader";
import NewsFeed from "../../components/core/Balita/NewsFeed";

type GovAid = {
  id: number;
  title: string;
  description: string;
};

const govAids: GovAid[] = [
  {
    id: 1,
    title: "DA Farm Inputs Subsidy Program",
    description:
      "Libreng binhi at abono para sa mga rehistradong magsasaka sa ilalim ng RSBSA.",
  },
  {
    id: 2,
    title: "TESDA Livelihood Training",
    description:
      "Libreng pagsasanay sa agrikultura, pagpoproseso ng pagkain, at agribusiness.",
  },
];

type Blog = {
  id: number;
  title: string;
  snippet: string;
  author: string;
  date: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Aking Unang Ani: Kwento ng Tagumpay",
    snippet:
      "Sa kabila ng init ng araw at hirap ng buhay, napatunayan kong sulit ang bawat pawis sa una kong anihan...",
    author: "Juan Dela Cruz",
    date: "Mayo 12, 2025",
  },
  {
    id: 2,
    title: "Pagbabago sa Bukid: Organic Farming Journey",
    snippet:
      "Iniwan ko ang tradisyonal na paraan at niyakap ang organikong pagsasaka—narito ang aking karanasan.",
    author: "Maria Santos",
    date: "Mayo 8, 2025",
  },
];

const BalitaPage = () => {
  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-12">
        {/* Page Header */}
        <PageHeader
          header={"Balita at Tulong mula sa Pamahalaan"}
          description={
            "Alamin ang mga pinakabagong balita sa agrikultura at mga programang makakatulong sa'yo."
          }
        />

        {/* News Feed Section */}
        <NewsFeed />

        {/* Blog Section */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8 px-4 md:px-0">
            <FaFeatherAlt className="text-malunggay-green text-2xl" />
            <h2 className="text-3xl md:text-4xl font-headline text-headline tracking-wide">
              Mga Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white border border-[#e7d7ba] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                tabIndex={0}
                aria-label={`Blog: ${blog.title}`}
              >
                <header className="mb-2">
                  <h3 className="text-xl font-headline text-headline mb-1 hover:text-malunggay-green-darker transition-colors duration-200 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-body">
                    ni {blog.author} — <time>{blog.date}</time>
                  </p>
                </header>
                <p className="text-body font-body leading-relaxed text-sm md:text-base">
                  {blog.snippet}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Government Aid Section */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8 px-4 md:px-0">
            <FaHandHoldingHeart className="text-malunggay-green text-3xl" />
            <h2 className="text-3xl md:text-4xl font-headline text-headline tracking-wide">
              Tulong mula sa Pamahalaan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
            {govAids.map((aid) => (
              <article
                key={aid.id}
                className="bg-white border border-[#e7d7ba] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                tabIndex={0}
                aria-label={`Programang pangtulong: ${aid.title}`}
              >
                <h3 className="text-xl font-headline text-headline mb-3">
                  {aid.title}
                </h3>
                <p className="text-body font-body leading-relaxed">
                  {aid.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BalitaPage;
