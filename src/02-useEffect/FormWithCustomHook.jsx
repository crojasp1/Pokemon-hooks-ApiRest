import { useState } from "react";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: '',
  });

  const {username, email, password} = formState;



  return (
    <>
     <h1> Formulario con custom Hook </h1> 

     <hr />
     <label>Username</label>
     <input 
      type = "text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange = {onInputChange}
     />

     <label>email</label>
     <input 
      type = "email"
      className="form-control mt-2"
      placeholder="camiropri@gmail.com"
      name="email"
      value={email}
      onChange = {onInputChange}
     />     

     <label>Password</label>
    <input 
      type = "password"
      className="form-control mt-2"
      placeholder="Contraseña"
      name="password"
      value={password}
      onChange = {onInputChange}
     />   
     <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button> 


    </>
  );
};

export default FormWithCustomHook;


