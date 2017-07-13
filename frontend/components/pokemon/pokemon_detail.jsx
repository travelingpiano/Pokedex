import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }
  componentWillReceiveProps(newProps){
    console.log(this.props.pokemon.id);
    console.log(newProps.match.params.pokemonId);
    if(this.props.pokemon.id != newProps.match.params.pokemonId){
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    console.log(this.props);
    let movesArr = [];
    if (this.props.pokemon.moves) {
      movesArr = this.props.pokemon.moves.map((move, idx)=>
      <li key={idx}>{move}</li>
    );
    }
    return (
      <div className="pokemon-detail">
        <h1>{this.props.pokemon.name}</h1>
        <p>Attack: {this.props.pokemon.attack}</p>
        <p>Defense: {this.props.pokemon.defense}</p>
        <img src={`${this.props.pokemon.image_url}`} />
        <ul>
          Moves: {movesArr}
        </ul>

      </div>
    );
  }
}

export default PokemonDetail;
