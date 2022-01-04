import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem } from "../datastructures/Menu";
type MenuItemProps = {};

function MenuItemPage(): JSX.Element {
  let params = useParams();

  const [dish, setDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    const getMenu = async () => {
      const data = await fetch(`http://localhost:3004/menu/${params.id}`);
      const res = await data.json();
      setDish(res);
    };
    getMenu();
  }, []);

  return (
    <div>
      <h2>{dish?.title}</h2>
      <p>{dish?.details}</p>
      <h4>Ingredients</h4>
      {dish?.ing.map((item, idx) => (
        <h5 key={idx}>{item}</h5>
      ))}
      <h4>Recipe</h4>
      {dish?.recipe.map((item, idx) => (
        <h5 key={idx}>{item}</h5>
      ))}
    </div>
  );
}

export default MenuItemPage;
