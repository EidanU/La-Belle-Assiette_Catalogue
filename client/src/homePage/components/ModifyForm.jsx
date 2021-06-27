import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { modifyData, postData } from "../../services/services";

export default function ModifyForm({ food }) {
  const [name, setName] = useState(food.name);
  const [quantity, setQuantity] = useState(food.quantity);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleQuantity = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    modifyData({ id: food._id, update: { name: name, quantity: quantity } });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          value={name}
          onChange={(e) => handleName(e)}
        />
        {errors.name && <small>This field is required</small>}
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          className="form-control"
          type="number"
          {...register("quantity", { required: true })}
          value={quantity}
          onChange={(e) => handleQuantity(e)}
        />
        {errors.quantity && <small>This field is required</small>}
      </div>
      <input type="submit" value="Validate" />
    </form>
  );
}
