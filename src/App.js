import React from "react";
import BioForm from "./components/BioForm";
import ResultBox from "./components/ResultBox";

const App = () => {
  return (
    <div>
      <div className="w-full border-solid border-4 border-red-500">
        <h1 className="text-center text-xl p-3 font-bold">
          Boi Generator
        </h1>
      </div>

      <div className="flex">
        <BioForm />
        <ResultBox />
      </div>
    </div>
  );
};

export default App;
