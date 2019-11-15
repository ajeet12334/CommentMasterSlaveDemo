import React, {useReducer} from 'react';
import CommentNavigator from './navigator/CommentNavigator'
import StatusBarComponent from './components/StatusBarComponent'
import commentReducers from './store/reducers/commentReducers'

export const RootContext = React.createContext();

const App = () => {

  const [state, dispatch] = useReducer(commentReducers, {
      isLoading: false,
      hasError: false,
      comments: [],
  });

  return (
    <RootContext.Provider value={{state,dispatch}}>
      <StatusBarComponent />
      <CommentNavigator />
    </RootContext.Provider>
  );
};

export default App;
