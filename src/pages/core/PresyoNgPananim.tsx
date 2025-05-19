import Navbar from "../../components/core/General/Navbar";
import { useState, useEffect } from "react";
import PageHeader from "../../components/core/General/PageHeader";

type CropPrice = {
  id: number;
  cropName: string;
  price: number; // price per unit (e.g., per kilo)
  date: string; // date of price report
  region: string;
};

const mockPrices: CropPrice[] = [
  {
    id: 1,
    cropName: "Palay",
    price: 18.5,
    date: "2025-05-15",
    region: "Gitnang Luzon",
  },
  {
    id: 2,
    cropName: "Sibuyas",
    price: 55.0,
    date: "2025-05-14",
    region: "Rehiyon 3",
  },
  {
    id: 3,
    cropName: "Mais",
    price: 22.75,
    date: "2025-05-13",
    region: "Rehiyon 4A",
  },
];

const PresyoNgPananim = () => {
  const [search, setSearch] = useState("");
  const [prices, setPrices] = useState<CropPrice[]>([]);
  const [filteredPrices, setFilteredPrices] = useState<CropPrice[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data (replace this with real API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPrices(mockPrices);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter by crop name on search
  useEffect(() => {
    if (!search.trim()) {
      setFilteredPrices(prices);
    } else {
      const filtered = prices.filter((p) =>
        p.cropName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPrices(filtered);
    }
  }, [search, prices]);

  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          header="Presyo ng Pananim"
          description="Tingnan ang pinakabagong presyo ng mga pangunahing pananim mula sa
            PSA. Maaari kang maghanap ng pananim gamit ang search box sa ibaba."
        />

        <section className="mb-12">
          <label
            htmlFor="search"
            className="block mb-2 font-semibold text-headline"
          >
            Hanapin ang Pananim
          </label>
          <input
            id="search"
            type="text"
            placeholder="Halimbawa: Palay, Mais, Sibuyas"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-malunggay-green focus:border-transparent"
          />
        </section>

        <section>
          {loading ? (
            <p className="text-center text-headline font-semibold">
              Naglo-load ang data...
            </p>
          ) : filteredPrices.length === 0 ? (
            <p className="text-center text-headline font-semibold">
              Walang nahanap na resulta para sa &quot;{search}&quot;.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-[#e7d7ba] shadow-sm bg-white">
              <table className="min-w-full divide-y divide-[#e7d7ba]">
                <thead className="bg-malunggay-green text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold"
                    >
                      Pangalan ng Pananim
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-sm font-semibold"
                    >
                      Presyo (PHP/Kg)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-sm font-semibold"
                    >
                      Petsa ng Ulat
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-sm font-semibold"
                    >
                      Rehiyon
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7d7ba]">
                  {filteredPrices.map(
                    ({ id, cropName, price, date, region }) => (
                      <tr
                        key={id}
                        className="hover:bg-[#F0F6E5] transition-colors cursor-default"
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-headline">
                          {cropName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-malunggay-green font-semibold">
                          ₱{price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600 font-mono">
                          {new Date(date).toLocaleDateString("fil-PH", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-body">
                          {region}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default PresyoNgPananim;
