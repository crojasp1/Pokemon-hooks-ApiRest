import { useState } from "react";

const useForm = (initialForm) => {
 
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    //Para evitar declarar dos o mas eventos en nuestros imput utilizamos el name el cual sabra escoger 
    // cual elemento modificar
    console.log({name});
    setFormState({
      ...formState, 
      [name]: value  //Propiedades computadas de los objetos
    });
  };

    const onResetForm = () => {
    setFormState(initialForm)
  };


  return{
    formState,
    onInputChange,
    onResetForm, 
  }

}

export default useForm


