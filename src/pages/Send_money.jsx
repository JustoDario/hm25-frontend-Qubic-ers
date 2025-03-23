import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SendMoney() {
  const [qrData, setQrData] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    wallet: "",
  });
  const [showQR, setShowQR] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      const parsedData = JSON.parse(data); // Suponiendo que el QR tenga JSON válido
      setFormData(parsedData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <motion.div
        className="w-72 h-72 bg-gray-900 text-white rounded-xl flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isFormComplete && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QRCodeSVG value={JSON.stringify(formData)} size={270} />
          </motion.div>
        )}
      </motion.div>

      <form className="flex flex-col gap-4 w-72">
        <input
          className="p-2 border rounded placeholder:text-slate-800"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="p-2 border rounded placeholder:text-slate-800"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          className="p-2 border rounded placeholder:text-slate-800"
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          placeholder="Wallet adress"
        />
        <Link to={'/'} className="p-2 border rounded bg-red-300 hover:bg-red-500 flex items-center justify-center">
          <button>
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}
