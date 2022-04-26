import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
        const url =`http://localhost:5000/service/`

        fetch (url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=> {
            console.log(result);
        })

  };

  return (
    <div className=" w-50 mx-auto">
      <h1 className=" text-center m-5">Please Add Your Service</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="mb-2" placeholder="Name" {...register("name", {required:true})} />
        <textarea className="mb-2" placeholder="Description" {...register("description",{required:true} )} />
        <input className="mb-2" placeholder="Price" {...register("price")} />
        <input className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />

        <input type="Submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
