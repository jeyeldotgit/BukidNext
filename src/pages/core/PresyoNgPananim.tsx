import { useState, useEffect } from "react";
import Navbar from "../../components/core/General/Navbar";
import PageHeader from "../../components/core/General/PageHeader";
import getCropPrice from "../../api/supabase/GetCropPrice";
import type { Crop } from "../../types/CoreTypes";

const PresyoNgPananim = () => {
  const [search, setSearch] = useState("");
  const [dbCrops, setDbCrops] = useState<Crop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCropPrice = async () => {
      const res = await getCropPrice();
      if (res.success) {
        setDbCrops(res.data ?? []);
      } else {
        console.error("Error fetching crops:", res.message);
      }
      setLoading(false);
    };

    fetchCropPrice();
  }, []);
  const filteredCrops = dbCrops?.filter((crop) => crop.crops);
  console.log(filteredCrops);

  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          header="Presyo ng Pananim"
          description="Tingnan ang pinakabagong presyo ng mga pangunahing pananim mula sa PSA. Maaari kang maghanap ng pananim gamit ang search box sa ibaba."
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
          ) : filteredCrops.length === 0 ? (
            <p className="text-center text-headline font-semibold">
              Walang nahanap na resulta para sa &quot;{search}&quot;.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-[#e7d7ba] shadow-sm bg-white">
              <table className="min-w-full divide-y divide-[#e7d7ba]">
                <thead className="bg-malunggay-green text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Pangalan ng Pananim
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">
                      Presyo (PHP/Kg)
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">
                      Buwan
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold">
                      Taon
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7d7ba]">
                  {filteredCrops.map((crop) => (
                    <tr
                      key={crop.price_id}
                      className="hover:bg-[#F0F6E5] transition-colors cursor-default"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-headline">
                        {crop.crops.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-malunggay-green font-semibold">
                        ₱{crop.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600 font-mono">
                        {new Date(2023, crop.month - 1, 1).toLocaleString(
                          "fil-PH",
                          { month: "long" }
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-body">
                        {crop.year ?? "N/A"}
                      </td>
                    </tr>
                  ))}
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
