import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getData } from "../services/services";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    getData().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...register("exampleRequired", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
