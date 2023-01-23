import React from "react"
import { useForm } from "react-hook-form"
import "./form.scss"
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="firstname">firstName</label>
      <br />
      <input
        id="firstname"
        type="text"
        {...register("firstName", { required: true })}
      />{" "}
      <br />
      {errors.firstName && <p>First name is required.</p>}
      <label htmlFor="lastname">lastname</label> <br />
      <input
        id="lastname"
        type="text"
        {...register("lastName", { required: true })}
      />{" "}
      <br />
      {errors.lastName && <p>Last name is required.</p>}
      <label htmlFor="age">Age</label> <br />
      <input
        id="age"
        type="number"
        {...register("age", { required: true }, { pattern: /\d+/ })}
      />{" "}
      <br />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  )
}

export default Form
