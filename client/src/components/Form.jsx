import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getData, postData } from "../services/services";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postData(data).then((res) => {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="food" />
      {errors.name && <span>This field is required</span>}
      <input
        type="number"
        {...register("quantity", { required: true })}
        placeholder="quantity"
      />
      {errors.quantity && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
