import React from 'react';
import './App.css';
import NameTag from "./components/NameTag"
import StateToggle from "./components/StateToggle"
import CounterUseEffect from "./components/CounterUseEffect"
import TypeScriptChildren from './components/TypeScriptChildren';
import CharacterCard from './components/characterCard/CharacterCard';
import IncidentReportClass from "./components/IncidentReportClass"
import IncidentReportHooks from "./components/IncidentReportHooks"
import DogFacts from './components/dogFacts/DogFacts';

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
                <h1 className="text-3xl font-bold my-8 ">3. Toggle - useState Hook</h1>
                <div className="mx-auto w-1/2">
                    <StateToggle />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">3. Character Cards</h1>
                <div className="mx-auto w-1/2">
                    <CharacterCard />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">4. Counter - useEffect</h1>
                <div className="mx-auto w-1/2">
                    <CounterUseEffect />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">5. Incident Report - Class Example</h1>
                <div className="mx-auto w-1/2">
                    <IncidentReportClass />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">6. Incident Report - Hooks Example</h1>
                <div className="mx-auto w-1/2">
                    <IncidentReportHooks />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="text-3xl font-bold my-8 ">7. Dog Facts</h1>
                <div className="mx-auto w-1/2">
                    <DogFacts />
                </div>
            </div>
            <hr></hr>
      </div>
    </div>
  );
}

export default App;
