import React from 'react';
import './App.css';
// import TimerContainer from "./useStateHook/TimerContainer";
import HookCounter from "./useEffectHook/HookCounter";
import DataFetching from "./dataFetch/DataFetching";
import DataFetchingById from "./dataFetch/DataFetchingById";
import ComponentB from "./useContextHook/ComponentB";
import ComponentA from "./useContextHook/ComponentA";

function App() {
  return (
    <div className="App">
        {/*<HookCounter/>*/}
      {/*<TimerContainer/>*/}
      {/*  <DataFetching/>*/}
      {/*  <DataFetchingById/>*/}
        <ComponentA/>
    </div>
  );
}

export default App;
