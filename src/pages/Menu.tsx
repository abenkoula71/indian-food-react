import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../datastructures/Menu";

function Menu(): JSX.Element {
  const [menu, setMenu] = useState<[MenuItem] | []>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getMenu = async () => {
      const data = await fetch("http://localhost:3004/menu");
      const res = await data.json();
      setMenu(res);
    };
    getMenu();
  }, []);

  return (
    <div>
      {menu.map((menuItem) => (
        <p
          key={menuItem.id}
          onClick={() => {
            navigate(`/dish/${menuItem.id}`);
          }}
        >
          {menuItem.title}
        </p>
      ))}
    </div>
  );
}

export default Menu;
