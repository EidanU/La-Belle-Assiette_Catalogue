import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { modifyData } from "../../services/services";

export default function ModifyForm({ food }) {
  const [name, setName] = useState(food.name);
  const [quantity, setQuantity] = useState(food.quantity);
  // Here are useForm functions that will be used inside our form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //To change the value of the state name I need to use function to pass the current value that I m writing to the state to et a new value of the state
  const handleQuantity = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  //When we submit the form, a put Request is done and I reload the page to display data changes
  const onSubmit = () => {
    modifyData({ id: food._id, update: { name: name, quantity: quantity } });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="col-form-label text-left">Name</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          value={name}
          onChange={(e) => handleName(e)}
        />
        {errors.name && <small>This field is required</small>}
      </div>
      <div className="form-group">
        <label className="col-form-label">Quantity</label>
        <input
          className="form-control"
          type="number"
          {...register("quantity", { required: true, min: 1 })}
          value={quantity}
          onChange={(e) => handleQuantity(e)}
        />
        {errors.quantity && errors.quantity.type === "required" && (
          <small>This field is required</small>
        )}
        {errors.quantity && errors.quantity.type === "min" && (
          <small>Cannot only be positive </small>
        )}
      </div>
      <input type="submit" value="Validate" className="btn btn-primary mt-2" />
    </form>
  );
}
