import React from 'react';
import './App.css';
import NameTag from "./components/NameTag"
import TypeScriptChildren from './components/TypeScriptChildren';

function App() {
  return (
    <div className="App">
      <div>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">1. Name Tag</h1>
                <NameTag />
                <div className="mt-8"><a className="bold text-blue-500" href="https://stevekinney.github.io/react-and-typescript/commonly-used-props">Commonly-Used Props</a></div>
            </div>
            <div>

                </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">2. TypeScript Children</h1>
                <div className="mx-auto w-1/2">
                    <TypeScriptChildren />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">3. </h1>
                <div className="mx-auto w-1/2">

                </div>
            </div>
            <hr></hr>
      </div>
    </div>
  );
}

export default App;
