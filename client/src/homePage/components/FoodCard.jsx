import { deleteData } from "../../services/services";
import { useState } from "react";
import ModifyForm from "./ModifyForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

// This is the card where food informations will be displayed,
// The card can display food informations or a form to change those informations, If modify===true the form displays
const FoodCard = ({ food }) => {
  const [modify, setModify] = useState(false);

  // When we click on delete, a delete Request is done and I reload the page to display data changes
  function handleDelete() {
    deleteData(food._id);
    window.location.reload();
  }
  return (
    <>
      <div className="shadow d-inline-block border-0 card rounded m-3">
        <div className="card-body text-light rounded">
          {modify ? (
            <ModifyForm food={food} />
          ) : (
            <>
              <h4 className="card-title ">{food.name}</h4>
              <p className="card-text">quantity : {food.quantity}</p>
              <button
                className="btn btn-secondary m-2 w-10"
                onClick={() => setModify(true)}
              >
                <FiEdit2 />
              </button>
              <button className="btn btn-danger m-2" onClick={handleDelete}>
                <RiDeleteBin6Line />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default FoodCard;
