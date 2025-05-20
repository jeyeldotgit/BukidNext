import { useState } from "react";
import { Link } from "react-router-dom";

import type { FormData } from "../../api/supabase/OnSignUpAddProfile";

// Components
import VerifyOtpModal from "../../components/Auth/VerifyOtpModal";

// API
import { PhoneAuth } from "../../api/supabase/PhoneAuth";

// Region Dropdown
import { regions } from "../../types/Regions";

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    region: "",
    phoneNumber: "",
  });

  const [showPinModal, setShowPinModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // For phone number, sanitize input to digits only
    const sanitizedValue =
      name === "phoneNumber" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await PhoneAuth(formData.phoneNumber);
      if (res?.success === false) {
        console.log("Error Sending Auth: ", res.message);
        return;
      }

      console.log("check sms for otp");
    } catch (error) {
      console.error("Failed Auth: ", error);
    }

    setShowPinModal(true);
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
          Gumawa ng Account
        </h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Pangalan
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="Juan Dela Cruz"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Edad
            </label>
            <input
              type="number"
              min="1"
              name="age"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="18"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Rehiyon
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
            >
              <option value="">Pumili ng Rehiyon</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Numero ng Telepono
            </label>
            <input
              type="tel"
              name="phoneNumber"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="+63"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn w-full mt-4">
            Mag-sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-dark-soil-brown font-body">
          May account na?{" "}
          <Link
            to="/login"
            className="text-malunggay-green font-semibold hover:underline"
          >
            Mag-login
          </Link>
        </p>
      </div>

      {/* PIN Modal */}
      <VerifyOtpModal
        showPinModal={showPinModal}
        setShowPinModal={setShowPinModal}
        formData={formData}
      />
    </div>
  );
};

export default Signup;
