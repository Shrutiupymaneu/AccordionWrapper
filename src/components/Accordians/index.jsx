import { useState } from "react";
import data from "./data.js";
import "./style.css";

export default function Accordions() {
  const [selected, setSelected] = useState(null); // For single selection mode
  const [enableMultiple, setEnableMultiple] = useState(false); // Toggle multiple selection
  const [multiple, setMultiple] = useState([]); // Track multiple selections

  // Handle single selection click
  function handleSingleClick(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  // Handle multiple selection click
  function handleMultipleClick(currentId) {
    const updated = [...multiple];
    const index = updated.indexOf(currentId);

    if (index === -1) {
      updated.push(currentId);
    } else {
      updated.splice(index, 1);
    }

    setMultiple(updated);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        {enableMultiple ? "Disable" : "Enable"} Multi Selection
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={() =>
                  enableMultiple
                    ? handleMultipleClick(item.id)
                    : handleSingleClick(item.id)
                }
                className="title"
              >
                <h2>{item.question}</h2>
                <span>
                  {enableMultiple
                    ? multiple.includes(item.id)
                      ? "−"
                      : "+"
                    : selected === item.id
                    ? "−"
                    : "+"}
                </span>
              </div>

              {(enableMultiple
                ? multiple.includes(item.id)
                : selected === item.id) && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
