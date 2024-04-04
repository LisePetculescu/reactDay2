import React from "react";
import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import ContextDemoApp from "./exercises/ContextDemo";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
// import FetchDemo1 from "./exercises/FetchDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="props"></PropsDemo> : null}
            {selectedView == "userTable" ? <ListDemo title="UserTable"></ListDemo> : null}
            {selectedView == "imgButton" ? <EventDemo title="imgButton"></EventDemo> : null}
            {selectedView == "userForm" ? <FormUncontrolled title="userForm"></FormUncontrolled> : null}
            {selectedView == "contextDemo" ? <ContextDemoApp title="contextDemo"></ContextDemoApp> : null}
            {selectedView == "stateDemo1" ? <StateDemo1 title="stateDemo1"></StateDemo1> : null}
            {selectedView == "stateDemo2" ? <StateDemo2 title="stateDemo2"></StateDemo2> : null}
            {selectedView == "stateDemo3" ? <StateDemo3 title="stateDemo3"></StateDemo3> : null}
            {selectedView == "useEffect" ? <UseEffectDemo title="stateDemo3"></UseEffectDemo> : null}
            {/* {selectedView == "fetchDemo" ? <FetchDemo1 title="fetchDemo"></FetchDemo1> : null} */}

            {/* *Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  // const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("userTable")}>
        User Table
      </button>
      <button className="btn-w100" onClick={() => handleSelected("imgButton")}>
        Image Button
      </button>
      <button className="btn-w100" onClick={() => handleSelected("userForm")}>
        User Form
      </button>
      <button className="btn-w100" onClick={() => handleSelected("contextDemo")}>
        Context Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo1")}>
        State demo 1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo2")}>
        State demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo3")}>
        State demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useEffect")}>
        UseEffect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetchDemo")}>
        Fetch Demo
      </button>
    </>
  );
};

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
