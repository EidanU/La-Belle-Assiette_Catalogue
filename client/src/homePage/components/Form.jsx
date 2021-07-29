import React from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../services/services";

export default function AddForm() {
  // Here are useForm functions that will be used inside our form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //When we submit the form, a post Request is done and I reload the page to display new data
  const onSubmit = (data) => {
    postData(data)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group ">
        <label className="col-form-label">Ingredient</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          placeholder="Tomatoes"
        />
        {errors.name && <small>This field is required</small>}
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          className="form-control"
          type="number"
          {...register("quantity", { required: true, min: 1 })}
          placeholder="1"
        />
        {errors.quantity && errors.quantity.type === "required" && (
          <small>This field is required</small>
        )}
        {errors.quantity && errors.quantity.type === "min" && (
          <small>Cannot only be positive </small>
        )}
      </div>
      <input type="submit" value="submit" className="btn btn-primary mt-2" />
    </form>
  );
}
