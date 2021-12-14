import React from 'react';
import './App.css';
// import TimerContainer from "./useStateHook/TimerContainer";
// import HookCounter from "./useEffectHook/HookCounter";
// import DataFetching from "./dataFetch_useEffect/DataFetching";
// import DataFetchingById from "./dataFetch_useEffect/DataFetchingById";
// import ComponentB from "./useContextHook/ComponentB";
// import ComponentA from "./useContextHook/ComponentA";
// import SimpleCounter from "./useReducerHook/SimpleCounter";
// import ObjectCounter from "./useReducerHook/ObjectCounter";
import ParentCounterComponent from "./counter_useReducer_useState/ParentCounterComponent";

function App() {
  return (
    <div className="App">
        {/*<HookCounter/>*/}
      {/*<TimerContainer/>*/}
      {/*  <DataFetching/>*/}
      {/*  <DataFetchingById/>*/}
      {/*  <ComponentA/>*/}
      {/*  <SimpleCounter/>*/}
      {/*  <ObjectCounter/>*/}
        <ParentCounterComponent/>
    </div>
  );
}

export default App;
