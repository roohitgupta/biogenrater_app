import React from "react";
import BioForm from "./components/BioForm";

const App = () => {
  return (
    <div>
      <div className="w-full bg-gray-300">
        <h1 className="text-center text-2xl underline p-3 font-bold">
        Bio Generator
        </h1>
      </div>

     
        <BioForm />
 
    </div>
  );
};

export default App;
