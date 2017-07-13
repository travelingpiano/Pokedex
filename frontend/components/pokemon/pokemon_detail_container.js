import React from 'react';
import PokemonDetail from './pokemon_detail';
import {connect} from 'react-redux';
import {selectOnePokemon} from '../../reducers/selectors';
import {requestOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state,ownProps) => {
  const blank = {name: ""};
  return ({
    pokemon: state.pokemon.current_pokemon || blank
  });
};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: id=>dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail);
