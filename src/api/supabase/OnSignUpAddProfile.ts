import supabase from "../../lib/supabaseClient";

export interface FormData {
  name: string;
  age: number;
  region: string;
  phoneNumber: string;
}

const OnSignUpAddProfile = async (formData: FormData, userId: string) => {
  try {
    const { error } = await supabase.from("profiles").insert({
      id: userId,
      name: formData.name,
      age: formData.age,
      region: formData.region,
      phone_number: formData.phoneNumber,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    return { success: true, message: "Profile Successfully Added" };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error Updating Profile Table: ", error.message);
      return;
    }
  }
};

export default OnSignUpAddProfile;
