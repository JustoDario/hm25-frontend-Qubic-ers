import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Payment() {
  const [data, setData] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      setScanning(false);
      navigator.vibrate(200); // Vibra cuando detecta el QR
      Swal.fire({
        title: "¡Pago Detectado!",
        text: `Código: ${result.text}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const handleError = (error) => {
    console.error(error);
    Swal.fire({
      title: "Error",
      text: "No se pudo escanear el código QR",
      icon: "error",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      {/* Título con efecto flotante */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-2xl font-bold mb-4"
      >
        Scan your QR
      </motion.h1>

      {/* Cámara en pantalla completa */}
      <div className="absolute inset-0">
        <QrReader
          onResult={handleScan}
          onError={handleError}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Efecto de escaneo láser */}
      {scanning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 w-full h-1 bg-green-500 shadow-lg"
        />
      )}

      {/* Animación de pago aceptado */}
      {data && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-6 rounded-full shadow-lg"
        >
          <p className="text-lg font-bold">✅ Accepted Payment</p>
        </motion.div>
      )}
      <Link
        to={"/"}
        className="p-2 border rounded relative bg-red-300 hover:bg-red-500 flex items-center justify-center"
      >
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Payment;
