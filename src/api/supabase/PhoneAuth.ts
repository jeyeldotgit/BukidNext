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

    const user = data?.session?.user;
    const isNewUser = user?.user_metadata?.profileCompleted !== true;

    return {
      success: true,
      isNewUser,
      data: data.session,
      message: "Verification Successful",
    };
  } catch (e) {
    console.log("Error Message: ", e);
    return { success: false, message: "Unexpected error occurred." };
  }
};
