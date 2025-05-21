import supabase from "../../lib/supabaseClient";

import type { CropsPrice } from "../../types/CoreTypes";

const getCropPrice = async () => {
  try {
    const { data, error } = await supabase.from("monthly_prices").select(`
    price_id,
    crop_id,
    year,
    month,
    price,
    crops (
      name,
      category
    )
  `);

    if (error) {
      return { success: false, message: error.message };
    }

    return {
      success: true,
      message: "Fetch Prices with Crop Details Successful",
      data: data as CropsPrice[],
    };
  } catch (err) {
    console.error("Error Fetching Crop Price: ", err);
    return { success: false, message: "Unexpected error" };
  }
};

export default getCropPrice;
