import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
  <li key={pokemon.id}>
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}
      <br></br>
      <img src={`${pokemon.image_url}`} />
    </Link>
  </li>
);

export default PokemonIndexItem;
