import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
function ReceiveMoney() {
  const [requests, setRequests] = useState([
    { id: 1, sender: "Dario Justo", amount: "0.5 ETH" },
    { id: 2, sender: "Rosi", amount: "1.2 ETH" },
    { id: 3, sender: "Eric", amount: "0.8 ETH" },
  ]);

  const handleAccept = (id) => {
    toast.success("Transacción aceptada. Procede con la firma en Qubic.");
    Swal.fire({
      title: "Transacción aceptada",
      text: "Has aceptado el envío de dinero.",
      icon: "success",
      confirmButtonText: "OK",
    });
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleReject = (id) => {
    toast.error("Transacción rechazada.");
    Swal.fire({
      title: "Transacción rechazada",
      text: "Has rechazado el envío de dinero.",
      icon: "error",
      confirmButtonText: "OK",
    });
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 gap-4">
      {requests.length > 0 ? (
        requests.map((request) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-1/2 bg-white shadow-lg p-4 rounded-lg border border-gray-300"
          >
            <h3 className="text-lg font-semibold">Payment Request</h3>
            <p className="text-sm text-gray-600">
              <strong>{request.sender}</strong> wants to send you {" "}
              <strong>{request.amount}</strong>. ¿Accept?
            </p>
            <div className="flex justify-end gap-4 mt-3">
              <button
                onClick={() => handleReject(request.id)}
                className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white"
              >
                Decline
              </button>
              <button
                onClick={() => handleAccept(request.id)}
                className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white"
              >
                Accept
              </button>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-gray-500">
          No tienes solicitudes de pago pendientes.
        </p>
      )}
    </div>
  );
}

export default ReceiveMoney;