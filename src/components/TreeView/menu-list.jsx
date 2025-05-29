import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="treeContainer">
      {list.map((listItem, index) => (
        <MenuItem key={index} item={listItem} />
      ))}
    </ul>
  );
}
