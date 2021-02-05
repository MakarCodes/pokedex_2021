export interface IState {
  description: string;
  isLoading: boolean;
  error: boolean;
}

export const initialState = {
  description: '',
  isLoading: false,
  error: false,
};

export enum ActionTypes {
  FETCHING_DESCRIPTION_START = 'FETCHING_DESCRIPTION_START',
  FETCHING_DESCRIPTION_SUCCESS = 'FETCHING_DESCRIPTION_SUCCESS',
  FETCHING_DESCRIPTION_FAIL = 'FETCHING_DESCRIPTION_FAIL',
}

export type Actions =
  | {
      type: 'FETCHING_DESCRIPTION_START';
    }
  | {
      type: 'FETCHING_DESCRIPTION_SUCCESS';
      payload: { description: string };
    }
  | {
      type: 'FETCHING_DESCRIPTION_FAIL';
    };

const descriptionReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCHING_DESCRIPTION_START:
      return { ...state, isLoading: true };
    case ActionTypes.FETCHING_DESCRIPTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        description: action.payload.description,
      };
    case ActionTypes.FETCHING_DESCRIPTION_FAIL:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export default descriptionReducer;
