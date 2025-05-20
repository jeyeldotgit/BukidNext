import { useState } from "react";
import { Link } from "react-router-dom";
import VerifyOtpModal from "../../components/Auth/VerifyOtpModal";
import { PhoneAuth } from "../../api/supabase/PhoneAuth";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ phoneNumber });

    // Call Supabase auth login or backend logic
    setShowPinModal(true); // Show modal after "login"
    try {
      const res = await PhoneAuth(phoneNumber);

      if (res?.success === false) {
        console.log("Error Logging in: ", res.message);
        return;
      }

      console.log("login successful: ", res?.message);
      return;
    } catch (e) {
      console.error("Error Logging In: ", e);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        showPinModal ? "bg-black/30" : "bg-rice-husk-beige"
      }`}
    >
      <div
        className={`w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition duration-300 ${
          showPinModal ? "brightness-75" : ""
        }`}
      >
        <h2 className="text-3xl font-bold text-dark-soil-brown mb-6 text-center font-headline">
          Mag login gamit and cellphone number
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Numero ng Telepono
            </label>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="+63"
              value={phoneNumber}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");
                setPhoneNumber(numericValue);
              }}
              required
            />
          </div>

          <button type="submit" className="btn w-full mt-4">
            Mag-login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-dark-soil-brown font-body">
          Wala ka pang account?{" "}
          <Link
            to="/signup"
            className="text-malunggay-green font-semibold hover:underline"
          >
            Gumawa ng isa
          </Link>
        </p>
      </div>

      {/* PIN Modal */}
      <VerifyOtpModal
        phoneNumber={phoneNumber}
        showPinModal={showPinModal}
        setShowPinModal={setShowPinModal}
      />
    </div>
  );
};

export default Login;
