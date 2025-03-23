import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import Card from "../components/qubic/ui/Card";
import { useQubicConnect } from "../contexts/QubicConnectContext";
import { useHM25 } from "../contexts/HM25Context";
import CardActivity from "../components/qubic/ui/Card_activity";

function QrCode(props) {
  const { connected, toggleConnectModal } = useQubicConnect();
  const myQrCode = props.name;
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
    <div className="flex flex-col gap-4 items-center">
      <section className="flex flex-col items-center justify-center gap-2 my-6">
        <h1>My QR code</h1>
        <QRCodeCanvas value={myQrCode} size={200} />
      </section>
      <h2 className="text-2xl">Activity Recently</h2>
      <section className="grid grid-cols-2 gap-4">
        <Card>
            <CardActivity title={"Get money"} concept={"buy water"} wallet={"0x1a22fs7u1acu763..."}/>
        </Card>
        <Card>
            <CardActivity title={"Send money"} concept={"Gift for mom"} wallet={"0x1a22fs7deiwyru112..."}/>
        </Card>
      </section>
    </div>
  );
}

export default QrCode;
