import { RECEIVE_ALL_POKEMON,RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newstate = merge({},state);
      newstate.entities = action.pokemon;
      return newstate;
    case RECEIVE_ONE_POKEMON:
      newstate = merge({},state);
      const cur_poke = action.pokemon.poke.id;
      // newstate.current_poke = action.pokemon.poke.id;
      newstate.current_pokemon = action.pokemon.poke;
      // newstate.entities.cur_poke = action.pokemon.poke;
      console.log(newstate.current_poke);
      return newstate;
    default:
      return state;
  }
};

export default pokemonReducer;
