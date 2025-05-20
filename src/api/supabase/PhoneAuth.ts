import supabase from "../../lib/supabaseClient";

export const PhoneAuth = async (phoneNumber: string) => {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    return { success: true, message: "Check SMS for OTP" };
  } catch (e) {
    console.log("Error Message: ", e);
    return;
  }
};

export const verifyOTP = async (phoneNumber: string, Otp: string) => {
  try {
    const { error, data } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: Otp,
      type: "sms",
    });

    if (error) {
      return { success: false, message: error.message };
    }

    return {
      success: true,
      data: data.session,
      message: "Verification Successful",
    };
  } catch (e) {
    console.log("Error Message: ", e);
    return;
  }
};
