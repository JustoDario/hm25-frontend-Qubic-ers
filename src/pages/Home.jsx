import React from "react";
import { useNavigate } from "react-router-dom";
import { useQubicConnect } from "../contexts/QubicConnectContext";
import { useHM25 } from "../contexts/HM25Context";

function Home() {
  const navigate = useNavigate();
  const { connected, toggleConnectModal } = useQubicConnect();
  const { state, balance } = useHM25();

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
    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 gap-6 my-auto px-12">
      {/* Send */}
      <div className="border rounded-lg overflow-hidden shadow">
        <button className="w-full h-full py-8 flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-100" onClick={() => navigate('/SendMoney')}>
          <span className="text-3xl">📤</span>
          <span className="text-lg font-medium">Send</span>
        </button>
      </div>

      {/* Receive */}
      <div className="border rounded-lg overflow-hidden shadow">
        <button className="w-full h-full py-8 flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-100" onClick={() => navigate('/ReceiveMoney')}>
          <span className="text-3xl">💰</span>
          <span className="text-lg font-medium">Receive</span>
        </button>
      </div>

      {/* Pay */}
      <div className="col-span-2 border rounded-lg overflow-hidden shadow">
        <button className="w-full h-full py-8 flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-100" onClick={() => navigate('/Payment')}>
          <span className="text-3xl">📲</span>
          <span className="text-lg font-medium">Pay</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
