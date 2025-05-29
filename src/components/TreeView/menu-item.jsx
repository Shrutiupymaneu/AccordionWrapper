import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  function toggleChildren() {
    setShowChildren(!showChildren);
  }

  return (
    <li>
      <div className="menuItem" onClick={item.children ? toggleChildren : undefined}>
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span>{showChildren ? <FaMinus color="#fff" /> : <FaPlus color="#fff" />}</span>
        )}
      </div>

      {item.children && item.children.length > 0 && showChildren && (
        <ul className="childList">
          <MenuList list={item.children} />
        </ul>
      )}
    </li>
  );
}
