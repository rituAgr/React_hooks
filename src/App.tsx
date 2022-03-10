import React from 'react';
import './App.css';
import DataFetch_useState from "./dataFetch_useReducer_vs_useState/DataFetch_useState";
import DataFetch_useReducer from "./dataFetch_useReducer_vs_useState/DataFetch_useReducer";
import DocTitle1 from "./customHooks/useDocumentTitleHook/DocTitle1";
import DocTitle2 from "./customHooks/useDocumentTitleHook/DocTitle2";
import ComponentA from "./useContextHook/ComponentA";
// import TimerContainer from "./useStateHook/TimerContainer";
// import HookCounter from "./useEffectHook/HookCounter";
// import DataFetching from "./dataFetch_useEffect/DataFetching";
// import DataFetchingById from "./dataFetch_useEffect/DataFetchingById";
// import ComponentB from "./useContextHook/ComponentB";
// import ComponentA from "./useContextHook/ComponentA";
// import SimpleCounter from "./useReducerHook/SimpleCounter";
// import ObjectCounter from "./useReducerHook/ObjectCounter";
// import ParentCounterComponent from "./counter_useReducer_useState/ParentCounterComponent";

function App() {
  return (
    <div className="App">
        {/*<HookCounter/>*/}
      {/*<TimerContainer/>*/}
      {/*  <DataFetching/>*/}
      {/*  <DataFetchingById/>*/}
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <ComponentA/>
      {/*  <SimpleCounter/>*/}
      {/*  <ObjectCounter/>*/}
      {/*  <ParentCounterComponent/>*/}
      {/*  <DataFetch_useState/>*/}
      {/*  <DataFetch_useReducer/>*/}
        <DocTitle1/>
        <DocTitle2/>
    </div>
  );
}

export default App;
