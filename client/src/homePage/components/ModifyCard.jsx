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
      <input
        {...register("name", { required: true })}
        value={name}
        onChange={(e) => handleName(e)}
      />
      {errors.name && <span>This field is required</span>}
      <input
        type="number"
        {...register("quantity", { required: true })}
        value={quantity}
        onChange={(e) => handleQuantity(e)}
      />
      {errors.quantity && <span>This field is required</span>}
      <input type="submit" value="Validate" />
    </form>
  );
}
