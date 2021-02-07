import { Actions, ActionTypes } from '../reducer/descriptionReducer';

export const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  fetchDescriptionStart: () =>
    dispatch({ type: ActionTypes.FETCHING_DESCRIPTION_START }),
  fetchDescriptionSuccess: (description: string, pokemon: IPokemon) =>
    dispatch({
      type: ActionTypes.FETCHING_DESCRIPTION_SUCCESS,
      payload: { description, pokemon },
    }),
  fetchDescriptionFail: () =>
    dispatch({ type: ActionTypes.FETCHING_DESCRIPTION_FAIL }),
});
