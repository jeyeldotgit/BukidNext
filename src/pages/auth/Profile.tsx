import { useState } from "react";
import supabase from "../../lib/supabaseClient";

import type { FormData } from "../../api/supabase/OnSignUpAddProfile";
import { regions } from "../../types/Regions";
import { useAuth } from "../../hooks/useAuth";

import OnSignUpAddProfile from "../../api/supabase/OnSignUpAddProfile";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const phoneNum = session?.user.phone;
  const userId = session?.user.id;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    region: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const sanitizedValue =
      name === "phoneNumber" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await OnSignUpAddProfile(formData, userId, phoneNum);
      if (res?.success === false) {
        console.log("Error Profile Completion: ", res.message);
        return;
      }

      console.log("Success: ", res?.message);
      await supabase.auth.updateUser({
        data: { profileCompleted: true },
      });
      navigate("/balita");
    } catch (err) {
      console.error("Error Completing Profile: ", err);
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-rice-husk-beige">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-dark-soil-brown mb-6 text-center font-headline">
          Kumpletuhin ang Profile
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-dark-soil-brown font-semibold">
              Pangalan
            </label>
            <input
              type="text"
              name="name"
              placeholder="Juan Dela Cruz"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-2 text-dark-soil-brown font-semibold">
              Edad
            </label>
            <input
              type="number"
              min="1"
              name="age"
              placeholder="18"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Region */}
          <div>
            <label className="block mb-2 text-dark-soil-brown font-semibold">
              Rehiyon
            </label>
            <select
              name="region"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              value={formData.region}
              onChange={handleChange}
              required
            >
              <option value="">Pumili ng Rehiyon</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number (read-only) */}
          <div>
            <label className="block mb-2 text-dark-soil-brown font-semibold">
              Numero ng Telepono
            </label>
            <input
              type="tel"
              name="phoneNumber"
              readOnly
              placeholder="+63"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed font-body"
              value={session?.user.phone}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full mt-4">
            Kumpletuhin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
