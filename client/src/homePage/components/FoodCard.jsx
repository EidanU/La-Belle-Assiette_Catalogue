import { deleteData, modifyData } from "../../services/services";
import { useState } from "react";
import ModifyForm from "./ModifyCard";

// This file is just the card where food information will be display,
const FoodCard = ({ food }) => {
  const [modify, setModify] = useState(false);
  // function handleModification(id) {}

  return (
    <>
      {modify ? (
        <ModifyForm food={food} />
      ) : (
        <div>
          <p>{food.name}</p>
          <p>{food.quantity}</p>
          <button onClick={() => setModify(true)}>modifier</button>
          <button onClick={() => deleteData(food._id)}>delete</button>
        </div>
      )}
    </>
  );
};
export default FoodCard;
