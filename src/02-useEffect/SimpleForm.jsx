import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernanflo@gmail.com'
  });

  const{username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    //Para evitar declarar dos o mas eventos en nuestros imput utilizamos el name el cual sabra escoger 
    // cual elemento modificar
    setFormState({
      ...formState, 
      [name]: value  //Propiedades computadas de los objetos
    });
  };

  return (
    <>
     <h1> Formulario simple </h1> 

     <hr />

     <input 
      type = "text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange = {onInputChange}
     />

     <input 
      type = "email"
      className="form-control mt-2"
      placeholder="camiropri@gmail.com"
      name="email"
      value={email}
      onChange = {onInputChange}
     />     

     {(username === 'strider2') && <Message />}
    </>
  )
}

export default SimpleForm;


