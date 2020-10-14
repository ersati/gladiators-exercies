
import React, { useState } from 'react';



function App() {

  const useSetState = (initialState = {}) => {
    const [state, regularSetState] = useState(initialState);
  
    const setState = newState => {
      regularSetState(prevState => ({
        ...prevState,
        ...newState
      }));
    };
  
    return [state, setState];
  };
  return useSetState

}



  




export default App;
