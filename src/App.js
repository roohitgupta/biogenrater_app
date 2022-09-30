import React from "react";
import BioForm from "./components/BioForm";

const App = () => {
  return (
    <div>
      <div className="w-full border-solid border-4 border-red-500">
        <h1 className="text-center text-xl p-3 font-bold">
          Boi Generator
        </h1>
      </div>

     
        <BioForm />
 
    </div>
  );
};

export default App;
