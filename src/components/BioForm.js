import React from "react";

const BioForm = () => {
  return (
    <div className="flex flex-col items-center border-solid border-4 border-pink-500 lg:flex-row justify-center">
      <div className="w-2/3 h-96 m-3 border-solid border-4 border-sky-500 lg:w-1/2">
        <h1 className="text-xl text-center font-bold underline">Bio Form</h1>

        <div className="flex justify-between items-center bg-gray-200 my-3 w-full h-30 border-solid border-2 border-red-300 p-3">
          <div className="w-1/4 h-full flex">
            <label htmlFor="">Name</label>
            <input
              className="p-1.5 mx-2 border rounded-md shadow-sm"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="w-1/4 h-full flex">
            <label htmlFor="">Gender</label>
            <select className="w-full mx-2 p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="w-1/4 h-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Random Name
            </button>
          </div>
        </div>

        <div className="flex justify-between bg-gray-200 my-3 w-full h-30 border-solid border-2 border-red-300 p-3">
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Location
            </label>
            <input
              className="p-1.5 mx-2 border rounded-md shadow-sm"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="w-1/4 h-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Random Location
            </button>
          </div>
        </div>
      </div>


      <div className='w-1/2 h-64 m-3 border-solid border-4 border-sky-500 lg:w-1/3'>
      <h1 className='text-xl text-center font-bold underline'>Result Box</h1>
    </div>

    </div>
  );
};

export default BioForm;
