import Navbar from "../../components/core/General/Navbar";
import PageHeader from "../../components/core/General/PageHeader";

import getCropPrice from "../../api/supabase/GetCropPrice";
import { useEffect, useState } from "react";
import type { CropsPrice, Crops } from "../../types/CoreTypes";

const PresyoNgPananim = () => {
  const [cropPrices, setCropPrices] = useState<CropsPrice[]>([]);
  const [cropDetails, setCropDetails] = useState<Crops[]>([]);

  // Fetching Data From Database
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await getCropPrice();
        if (res.success && res.data) {
          setCropPrices(res.data);

          // Flatten crops from each entry
          const allCrops = res.data.flatMap((item) => item.crops);
          setCropDetails(allCrops);
        }
      } catch (err) {
        console.error("Error Fetching Prices: ", err);
      }
    };

    fetchCrops();
  }, []);

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
            onChange={(e) => e.target.value}
            className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-base bg-gray-100"
          />
        </section>

        <section>
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
                {cropPrices.map((price, index) => {
                  const cropName = cropDetails[index]?.name ?? "N/A";

                  return (
                    <tr
                      key={price.crop_id}
                      className="hover:bg-[#F0F6E5] transition-colors cursor-default"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-headline">
                        {cropName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-malunggay-green font-semibold">
                        ₱{price.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600 font-mono">
                        {new Date(2023, price.month - 1, 1).toLocaleString(
                          "fil-PH",
                          { month: "long" }
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-body">
                        {price.year ?? "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PresyoNgPananim;
