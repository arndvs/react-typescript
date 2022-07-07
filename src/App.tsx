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
import PizzaCalculator from './components/pizzaCalculator/PizzaCalculator';

function App() {
  return (
    <div className="App">
      <div>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">1. Name Tag</h1>
                <NameTag />
                <div className="mt-8"><a className="text-blue-500 bold" href="https://stevekinney.github.io/react-and-typescript/commonly-used-props">Commonly-Used Props</a></div>
            </div>
            <div>

                </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">2. TypeScript Children</h1>
                <div className="w-1/2 mx-auto">
                    <TypeScriptChildren />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">3. Toggle - useState Hook</h1>
                <div className="w-1/2 mx-auto">
                    <StateToggle />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">3. Character Cards</h1>
                <div className="w-1/2 mx-auto">
                    <CharacterCard />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">4. Counter - useEffect</h1>
                <div className="w-1/2 mx-auto">
                    <CounterUseEffect />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">5. Incident Report - Class Example</h1>
                <div className="w-1/2 mx-auto">
                    <IncidentReportClass />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">6. Incident Report - Hooks Example</h1>
                <div className="w-1/2 mx-auto">
                    <IncidentReportHooks />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">7. Dog Facts</h1>
                <div className="w-1/2 mx-auto">
                    <DogFacts />
                </div>
            </div>
            <hr></hr>
            <div className="my-12">
                <h1 className="my-8 text-3xl font-bold ">8. Pizza Calculator</h1>
                <div className="w-1/2 mx-auto">
                    <PizzaCalculator />
                </div>
            </div>
            <hr></hr>
      </div>
    </div>
  );
}

export default App;
