import { createContext, useReducer } from 'react';
import descriptionReducer, {
  IState,
  initialState,
} from '../reducer/descriptionReducer';
import { actionsFactory } from './actionsFactory';

export interface IContext {
  state: IState;
  fetchActions: {
    fetchDescriptionStart: () => void;
    fetchDescriptionSuccess: (description: string) => void;
    fetchDescriptionFail: () => void;
  };
}

const initCtx: IContext = {
  state: initialState,
  fetchActions: {
    fetchDescriptionStart: () => {},
    fetchDescriptionSuccess: () => {},
    fetchDescriptionFail: () => {},
  },
};

export const descriptionCtx = createContext(initCtx);

const DescriptionContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(descriptionReducer, initialState);
  const actions = actionsFactory(dispatch);
  const {
    fetchDescriptionStart,
    fetchDescriptionSuccess,
    fetchDescriptionFail,
  } = actions;
  const fetchActions = {
    fetchDescriptionStart,
    fetchDescriptionSuccess,
    fetchDescriptionFail,
  };
  const providerValue = {
    state,
    fetchActions,
  };
  return (
    <descriptionCtx.Provider value={providerValue}>
      {children}
    </descriptionCtx.Provider>
  );
};

export default DescriptionContextProvider;
