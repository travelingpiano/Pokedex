import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state);
};

export const selectOnePokemon = (state) => {
  const current_poke = parseInt(state.current_poke);
  state = values(state.entities);
  return state[current_poke-1];
};
