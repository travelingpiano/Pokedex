import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonDetail from './pokemon_detail';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component{

  componentDidMount(){

    this.props.requestAllPokemon();
  }

  render(){
    return (
      <div>
        <nav>
          <ul>
            {this.props.pokemon.map((pokemon)=>
              (<PokemonIndexItem key={pokemon.id} pokemon={pokemon} />)
            )}
          </ul>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </nav>
      </div>

    );
  }
}

export default PokemonIndex;
