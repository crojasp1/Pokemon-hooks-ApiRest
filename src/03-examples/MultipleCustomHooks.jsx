import {useCounter, useFetch} from "../hooks/";
import LoadingMessaga from "./LoadingMessaga";
import PokemonCard from "./PokemonCard";


const MultipleCustomHooks = () => {

  const {counter, increment, decrement} = useCounter(1);
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
  
  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />
      
      {isLoading ? <LoadingMessaga /> : <PokemonCard id={counter}  name={data.name} sprites={[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny ]}/>}


      <p>Counter: {counter}</p>
      <h2>{data?.name}</h2>
      

      <button className="btn btn-primary m-2 decrement-button " onClick={() => decrement()} disabled= {(counter <= 1)} >Anterior</button>

      <button className="btn btn-primary m-2 increment-button" onClick={() => increment() }>Siguiente</button>

      <button className="  m-2 decrement-button-2 " onClick={() => decrement()} disabled= {(counter <= 1)} >x</button>

      <button className="m-2 increment-button-2" onClick={() => increment() }>o</button>
    </>
    
  )
}

export default MultipleCustomHooks
