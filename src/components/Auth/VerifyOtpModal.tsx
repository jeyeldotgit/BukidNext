import type React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { verifyOTP } from "../../api/supabase/PhoneAuth";

type VerifyOtpModalProps = {
  phoneNumber: string;
  showPinModal: boolean;
  setShowPinModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const VerifyOtpModal = ({
  phoneNumber,
  showPinModal,
  setShowPinModal,
}: VerifyOtpModalProps) => {
  const navigate = useNavigate();

  const [pin, setPin] = useState("");

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await verifyOTP(phoneNumber, pin);

      if (res?.success === false) {
        console.log("Error: ", res.message);
        return;
      }

      console.log(res?.message);
      console.log(res?.isNewUser);

      if (res?.isNewUser) {
        navigate("/profile");
      } else {
        navigate("/balita"); // or wherever returning users should go
      }
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
