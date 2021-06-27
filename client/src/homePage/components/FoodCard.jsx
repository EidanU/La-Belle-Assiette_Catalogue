import { deleteData, modifyData } from "../../services/services";
import { useState } from "react";
import ModifyForm from "./ModifyForm";

// This file is just the card where food information will be display,
const FoodCard = ({ food }) => {
  const [modify, setModify] = useState(false);

  return (
    <>
      {modify ? (
        <ModifyForm food={food} />
      ) : (
        <div className=" d-inline-block card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{food.name}</h5>
            <p className="card-text">{food.quantity}</p>
            <button className="btn btn-primary" onClick={() => setModify(true)}>
              modifier
            </button>
            <button
              className="btn btn-primary"
              onClick={() => deleteData(food._id)}
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default FoodCard;
