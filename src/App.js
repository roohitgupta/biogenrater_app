import React from "react";
import BioForm from "./components/BioForm";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="w-full">
        <h1 className="text-center rounded-md shadow-xl text-3xl text-white p-3 font-bold">
        Bio Generator
        </h1>
      </div>    
        <BioForm />
    </div>
  );
};

export default App;
