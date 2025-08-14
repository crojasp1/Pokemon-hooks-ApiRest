import { useEffect, useState } from "react";
import pokedex from "../assets/images/pokedex-3.jpeg";


const PokemonCard = ({ id, name, sprites = []}) => {

  const[index, setIndex] =useState(0);

  useEffect(() => {
     if (sprites.length === 0) return; 

    const timer = setTimeout(() => {
      if (index < sprites.length - 1) {
        setIndex(index + 1); 
      } else {
        setIndex(0); 
      }
    }, 2000);

    return () => clearTimeout(timer); 
  }, [index, sprites]);

  return (
    <section style={{ height: 200}}>
      <h2 className="text-capitalize">#-{id} {name}</h2>

      <img src={pokedex} alt="pokedex" className="pokedex" />

      {/**imagenes */}
  

    <div className="poke-card">
            {sprites.length > 0 && (
              <img
                className="poke-image"
                src={sprites[index]}
                alt={name}

                />
            )}
    </div>
        <img src={sprites.front_default} />
    </section>
  )
};

export default PokemonCard;


