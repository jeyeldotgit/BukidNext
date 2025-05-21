import supabase from "../../lib/supabaseClient";

import type { Crop } from "../../types/CoreTypes";

const getCropPrice = async () => {
  try {
    const { data, error } = await supabase.from("monthly_prices").select(`
        price_id,
        crop_id,
        price,
        month,
        year,
        crops (
        name)
         
      `);

    if (error) {
      return { success: false, message: error.message };
    }

    return {
      success: true,
      message: "Fetch Prices with Crop Details Successful",
      data: data as Crop[],
    };
  } catch (err) {
    console.error("Error Fetching Crop Price: ", err);
    return { success: false, message: "Unexpected error" };
  }
};

export default getCropPrice;
