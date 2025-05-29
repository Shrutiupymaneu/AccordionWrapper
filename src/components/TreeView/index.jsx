import MenuList from './menu-list';
import './style.css';

export default function TreeView({ menus = [] }) {
  return (
    <div className="menuListcontainer">
      <MenuList list={menus} />
    </div>
  );
}
