import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css"; // Ensure this file exists and is correctly linked

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="qrContainer">
      <h1 className="qrTitle">QR Code Generator</h1>
      <div className="qrForm">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Your Value Here"
          className="qrInput"
        />
        <button
          disabled={input.trim() === ""}
          onClick={handleGenerateQRCode}
          className="qrButton"
        >
          Generate
        </button>
      </div>

      {qrCode && (
        <div className="qrOutput">
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={400}
            bgColor="#ffffff"
          />
          <p className="qrValue">
            QR Code for: <strong>{qrCode}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
