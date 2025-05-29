import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleClickRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleClickRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  // Optional auto-generate on type change
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleClickRandomRgbColor();
    } else {
      handleClickRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Button Container */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button style={buttonStyle} onClick={() => setTypeOfColor("hex")}>
          Create HEX Color
        </button>
        <button style={buttonStyle} onClick={() => setTypeOfColor("rgb")}>
          Create RGB Color
        </button>
        <button
          style={buttonStyle}
          onClick={
            typeOfColor === "hex"
              ? handleClickRandomHexColor
              : handleClickRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      {/* Color Display */}
      <div
        style={{
          marginTop: "150px",
          textAlign: "center",
          color: "#fff",
          textShadow: "1px 1px 5px #000",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

// Button styling
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#ffffffcc",
  color: "#333",
  fontWeight: "bold",
  boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
  transition: "background-color 0.3s ease",
};
