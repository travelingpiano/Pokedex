import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';

import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state.pokemon.entities),
  current_poke: state.pokemon.current_poke
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
