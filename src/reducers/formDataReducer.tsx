interface IState {
  data: IDataFromForm;
}

export const initialState: IState = {
  data: {
    name: '',
    lastName: '',
    username: '',
    email: '',
    pesel: 111111111,
    zipCode: '',
    city: '',
    birthDate: '',
  },
};

export enum ActionTypes {
  SET_DATA = 'SET_DATA',
}

export type Actions = {
  type: 'SET_DATA';
  payload: {
    data: IDataFromForm;
  };
};

const setDataFromForm = (state: IState, action: Actions) => {
  const { data } = action.payload;
  return {
    data,
  };
};

const filterReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return setDataFromForm(state, action);
    default:
      return state;
  }
};

export default filterReducer;
