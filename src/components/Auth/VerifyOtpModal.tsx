import type React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { verifyOTP } from "../../api/supabase/PhoneAuth";

import { useAuth } from "../../hooks/useAuth";
import type { FormData } from "../../api/supabase/OnSignUpAddProfile";

type VerifyOtpModalProps = {
  showPinModal: boolean;
  setShowPinModal: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
};

const VerifyOtpModal = ({
  showPinModal,
  setShowPinModal,
  formData,
}: VerifyOtpModalProps) => {
  const { session } = useAuth();

  const userId = session?.user.id;

  const navigate = useNavigate();

  const [pin, setPin] = useState("");

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await verifyOTP(formData.phoneNumber, pin);

      if (res?.success === false) {
        console.log("Error: ", res.message);
        return;
      }

      console.log(res?.message);
      console.log(userId);

      navigate("/balita");
    } catch (error) {
      console.log("Error Verification: ", error);
      return;
    }

    setShowPinModal(false); // Close modal after submission
  };
  return (
    <div>
      {showPinModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-sm">
            <h3 className="text-xl font-semibold text-dark-soil-brown mb-4 text-center font-headline">
              Maglagay ng 6-digit PIN
            </h3>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="text"
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center tracking-widest text-lg font-bold focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
                placeholder="••••••"
                value={pin}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 6) setPin(value);
                }}
                required
              />
              <button type="submit" className="btn w-full">
                Kumpirmahin
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyOtpModal;
