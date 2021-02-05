import { Actions, ActionTypes } from '../reducer/descriptionReducer';

export const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  fetchDescriptionStart: () =>
    dispatch({ type: ActionTypes.FETCHING_DESCRIPTION_START }),
  fetchDescriptionSuccess: (description: string) =>
    dispatch({
      type: ActionTypes.FETCHING_DESCRIPTION_SUCCESS,
      payload: { description },
    }),
  fetchDescriptionFail: () =>
    dispatch({ type: ActionTypes.FETCHING_DESCRIPTION_FAIL }),
});
