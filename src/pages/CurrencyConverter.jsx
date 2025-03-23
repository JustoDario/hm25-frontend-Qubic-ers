import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
  FaBitcoin,
  FaEthereum,
} from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { useQubicConnect } from "../contexts/QubicConnectContext";

function CurrencyConverter() {
  const exchangeRates = {
    USD: {
      EUR: 0.92,
      GBP: 0.78,
      JPY: 131.22,
      BTC: 0.000018,
      ETH: 0.00028,
      USDT: 1,
    },
    EUR: {
      USD: 1.09,
      GBP: 0.85,
      JPY: 142.5,
      BTC: 0.00002,
      ETH: 0.0003,
      USDT: 1.1,
    },
    GBP: {
      USD: 1.28,
      EUR: 1.17,
      JPY: 165.3,
      BTC: 0.000023,
      ETH: 0.00033,
      USDT: 1.25,
    },
    JPY: {
      USD: 0.0076,
      EUR: 0.007,
      GBP: 0.006,
      BTC: 0.00000015,
      ETH: 0.0000024,
      USDT: 0.0078,
    },
    BTC: {
      USD: 54000,
      EUR: 49600,
      GBP: 42800,
      JPY: 7200000,
      ETH: 15.2,
      USDT: 54000,
    },
    ETH: {
      USD: 3500,
      EUR: 3200,
      GBP: 2750,
      JPY: 460000,
      BTC: 0.065,
      USDT: 3500,
    },
    USDT: {
      USD: 1,
      EUR: 0.91,
      GBP: 0.8,
      JPY: 130,
      BTC: 0.0000185,
      ETH: 0.00029,
    },
  };

  const currencyIcons = {
    USD: <FaDollarSign className="text-green-500" />,
    EUR: <FaEuroSign className="text-blue-500" />,
    GBP: <FaPoundSign className="text-purple-500" />,
    JPY: <FaYenSign className="text-red-500" />,
    BTC: <FaBitcoin className="text-yellow-500" />,
    ETH: <FaEthereum className="text-indigo-500" />,
    USDT: <SiTether className="text-green-400" />,
  };

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(
    (amount * exchangeRates["USD"]["EUR"]).toFixed(6)
  );
  const { connected, toggleConnectModal } = useQubicConnect();

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
    } else {
      setConvertedAmount(
        (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(6)
      );
    }
  };

  if (!connected) {
    return (
      <div className="w-full mt-20 flex flex-col items-center">
        <div className="w-1/2 flex flex-col items-center border border-solid border-cyan-100 rounded-xl py-12">
          <h2 className="text-2xl text-center text-white mb-6 mt-12">
            Welcome to HM25 - Hackathon Madrid 2025 Demo DApp
          </h2>
          <p className="text-gray-300 mb-4 mt-4 ml-6 mr-4">
            You are not connected to a wallet. Please connect to proceed.
          </p>
          <button
            className="bg-primary-40 p-3 text-black rounded"
            onClick={toggleConnectModal}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12">
      <motion.div
        className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white max-w-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          💰 Conversor de Divisas y Cripto
        </motion.h2>

        <motion.input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded mb-2 text-lg w-32 text-center"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.div className="flex gap-2 mb-2 items-center">
          <motion.select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-2 border rounded bg-gray-100 flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </motion.select>

          <motion.span className="text-xl" animate={{ rotate: 360 }}>
            🔁
          </motion.span>

          <motion.select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-2 border rounded bg-gray-100 flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </motion.select>
        </motion.div>

        <motion.button
          onClick={handleConvert}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition flex items-center"
          whileTap={{ scale: 0.9 }}
        >
          Convertir
        </motion.button>

        <motion.div
          className="flex items-center gap-2 text-lg font-medium mt-4"
          animate={{ scale: [1, 1.2, 1] }}
        >
          {currencyIcons[fromCurrency]}
          {amount} {fromCurrency} =
          <span className="text-green-500 font-bold">{convertedAmount}</span>
          {currencyIcons[toCurrency]}
          {toCurrency}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CurrencyConverter;
