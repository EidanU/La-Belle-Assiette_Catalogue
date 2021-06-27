const FoodCard = ({ food }) => {
  console.log(food._id);
  return (
    <div>
      <p>{food.name}</p>
      <p>{food.quantity}</p>
      <button>modifier</button>
      <button>delete</button>
    </div>
  );
};
export default FoodCard;
