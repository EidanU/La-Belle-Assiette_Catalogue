import { deleteData, modifyData } from "../services/services";

// This file is just the card where food information will be display,
const FoodCard = ({ food }) => {
  return (
    <div>
      <p>{food.name}</p>
      <p>{food.quantity}</p>
      <button onClick={() => modifyData(food._id)}>modifier</button>
      <button onClick={() => deleteData(food._id)}>delete</button>
    </div>
  );
};
export default FoodCard;
