import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getData, postData } from "../../services/services";

export default function AddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postData(data).then((res) => {});
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          placeholder="food"
        />
        {errors.name && <small>This field is required</small>}
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          className="form-control"
          type="number"
          {...register("quantity", { required: true })}
          placeholder="quantity"
        />
        {errors.quantity && <small>This field is required</small>}
      </div>
      <input type="submit" value="submit" />
    </form>
  );
}
