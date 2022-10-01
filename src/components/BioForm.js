import React, { useEffect, useState } from "react";

const BioForm = () => {
  const [name, setName] = useState("Rohit Gupta");
  const [gender, setGender] = useState("Male");
  const [location, setLocation] = useState("Delhi, NCR");
  const [islocation, setIslocation] = useState(false);
  const [school, setSchool] = useState("Delhi Public School");
  const [isschool, setIsschool] = useState(false);
  const [major, setMajor] = useState("Robotic Arm");
  const [occupation, setOccupation] = useState("Web Developer");
  const [isoccupation, setIsoccupation] = useState(false);
  const [religious, setReligious] = useState("");
  const [isreligious, setIsreligious] = useState(false);
  const [missionaries, setMissionaries] = useState("");
  const [ismissionaries, setIsmissionaries] = useState(false);

  let nameArr = [
    { name: "Rohit Gupta", gender: "Male" },
    { name: "Aman Sharma", gender: "Male" },
    { name: "Pragti Mishra", gender: "Female" },
    { name: "Ritu Dubye", gender: "Female" },
    { name: "Neha Verma", gender: "Female" },
  ];

  const handleName = () => {
    nameArr.map((e) => {
      const randomName =
        nameArr[Math.floor(Math.random() * nameArr.length)].name;
      return setName(randomName);
    });
  };

  let locationArr = [
    "Indore, Madhya Pradesh",
    "Bhopal, Madhya Pradesh",
    "Pune, Maharastra",
    "Mumbai, Maharastra",
    "Banglore, Karnataka",
  ];

  const handleLocation = () => {
    const randomLocation =
      locationArr[Math.floor(Math.random() * locationArr.length)];
    setLocation(randomLocation);
  };

  let schoolArr = [
    "G.D. Goeanka, Indore",
    "Delhi Public School, Bhopal",
    "Embreal Heights, Indore",
    "Little Angles, Gwalior",
  ];

  const handleSchool = () => {
    const randomSchool =
      schoolArr[Math.floor(Math.random() * schoolArr.length)];
    setSchool(randomSchool);
  };

  let majorArr = [
    "Graphic Design",
    "History",
    "Cybersecurity",
    "Chemistry",
    "Information Technology",
  ];

  const handleMajor = () => {
    const randomMajor =
      majorArr[Math.floor(Math.random() * majorArr.length)];
    setMajor(randomMajor);
  };

  let occupationArr = [
    "musician",
    "salesperson",
    "web developer",
    "pilot",
    "scooba diver",
  ];

  const handleOccupation = () => {
    const randomOccu =
      occupationArr[Math.floor(Math.random() * occupationArr.length)];
    setOccupation(randomOccu);
  };

  let religiousArr = [
    "in a family that always encouraged a belief in God, but never attended one church consistently",
    "believing in Christ because was taught to as grew up",
    "without any religion in the home, but is open to learning more about religion",
    "in a community where religion was very polarized, and struggles with wanting to be a part of religion after having bad experiences from adolescence",
  ];

  const handleRelegious = () => {
    const randomRele =
      religiousArr[Math.floor(Math.random() * religiousArr.length)];
    setReligious(randomRele);
  };

  let missArr = [
    "wants to know if God really does exist and how that affects ",
    "recieved a priesthood blessing from a friend and now wants to learn more",
    "often worries that God is disappointed in for not following him better and wants to know how to change",
    "has recently lost a loved one, and is looking for ways to find peace during this difficult time",
    "met the missionaries while they were out knocking doors, and was curious about their message. is a little hesitant to meet with them, but is willing to give it a chance",
  ];

  const handleMissionaries = () => {
    const randomMiss = missArr[Math.floor(Math.random() * missArr.length)];
    setMissionaries(randomMiss);
  };

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start ">
      <div className="w-2/3 h-full m-3  lg:w-1/3">
        <h1 className="text-xl text-center font-bold underline">Bio Form</h1>
        {/* first line of form =================*/}
        <div className="flex justify-between items-center text-sm bg-gray-200 my-3 w-full h-30  p-3">
          <div className="flex">
            <label htmlFor="">Name</label>
            <input
              className="p-1.5 mx-2 rounded-md shadow-sm"
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex">
            <label htmlFor="">Gender</label>
            <select
              className="w-full mx-2 p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={(e) => handleName()}
            >
              Random Name
            </button>
          </div>
        </div>
        {/* second line of form ===========*/}
        <div className="flex justify-between items-center text-sm bg-gray-200 my-3 w-full h-30 p-3">
          <div className="form-check">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e) =>
                  islocation ? setIslocation(false) : setIslocation(true)
                }
              />
              <span className="ml-2 text-gray-700">Location</span>
            </label>
            <input
              className="p-1.5 mx-2 border rounded-md shadow-sm"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) =>
                islocation ? setLocation(e.target.value) : setLocation(null)
              }
            />
          </div>
          <div className="h-full">
            <button
              onClick={(e) => handleLocation()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Random Location
            </button>
          </div>
        </div>
        {/* third line of form ============ */}
        <div className="flex flex-col bg-gray-200 text-sm my-3 w-full h-30 p-3">
          <div className="flex justify-between items-center mb-2">
            <div className="form-check">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e)=> isschool ? setIsschool(false) : setIsschool(true)}
                />
                <span className="ml-2 text-gray-700">School</span>
              </label>
              <input
                className="p-1.5 mx-2 border rounded-md shadow-sm"
                type="text"
                placeholder="School"
                value={school}
                onChange={(e) => isschool ? setSchool(e.target.value) : setSchool(null)}
              />
            </div>
            <div className="h-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={(e) => handleSchool()}
              >
                Random School
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <label htmlFor="">Major</label>
              <input
                className="p-1.5 mx-2 rounded-md shadow-sm"
                type="text"
                placeholder="Major"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 rounded"
                onClick={(e) => handleMajor()}
              >
                Random Major
              </button>
            </div>
          </div>
        </div>
        {/* fourth line of form */}
        <div className="flex justify-between items-center mb-2 bg-gray-200 text-sm my-3 w-full h-30 p-3">
          <div className="form-check">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e)=> isoccupation ? setIsoccupation(false) : setIsoccupation(true)}
              />
              <span className="ml-2 text-gray-700">Occupation</span>
            </label>
            <input
              className="p-1.5 mx-2 border rounded-md shadow-sm"
              type="text"
              placeholder="Occupation"
              value={occupation}
              onChange={(e) => isoccupation ? setOccupation(e.target.value) : setOccupation(null)}
            />
          </div>
          <div className="h-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={(e) => handleOccupation()}
            >
              Random Occupation
            </button>
          </div>
        </div>
        {/* fifth line of form */}
        <div className="flex justify-between flex-col  mb-2 bg-gray-200 text-sm my-3 w-full h-30 p-3">
          <div className="form-check">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e)=> isreligious ? setIsreligious(false) : setIsreligious(true)}
              />
              <span className="ml-2 text-gray-700">Religious Background</span>
            </label>
            <div>
              <textarea
                className="p-1.5 w-full text-base mx-2 border rounded-md shadow-sm"
                rows="4"
                type="text"
                placeholder="Religious Background"
                value={religious}
                onChange={(e) => isreligious ? setReligious(e.target.value) : setReligious(null)}
              ></textarea>
            </div>
          </div>
          <div className="h-full">
            <button
              onClick={(e) => handleRelegious()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Random Religious
            </button>
          </div>
        </div>
        {/* sixth line of form */}
        <div className="flex justify-between flex-col  mb-2 bg-gray-200 text-sm my-3 w-full h-30 p-3">
          <div className="form-check">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e)=> ismissionaries ? setIsmissionaries(false) : setIsmissionaries(true)}
              />
              <span className="ml-2 text-gray-700">
                Reason for meeting with missionaries
              </span>
            </label>
            <div>
              <textarea
                className="p-1.5 w-full text-base mx-2 border rounded-md shadow-sm"
                rows="4"
                type="text"
                placeholder="Reason for meeting with missionaries"
                value={missionaries}
                onChange={(e) => ismissionaries ? setMissionaries(e.target.value) : setMissionaries(null)}
              ></textarea>
            </div>
          </div>
          <div className="h-full">
            <button
              className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded"
              onClick={(e) => handleMissionaries()}
            >
              Restoration
            </button>
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded"
              onClick={(e) => handleMissionaries()}
            >
              Plan of Salvation
            </button>
            <button
              className="bg-purple-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded"
              onClick={(e) => handleMissionaries()}
            >
              Gospel of Christ
            </button>
            <button
              className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded"
              onClick={(e) => handleMissionaries()}
            >
              Law of Chastity
            </button>
          </div>
        </div>
      </div>
      {/* Result box */}
      <div className="w-2/5 h-64 m-3 lg:mt-14 lg:ml-5 border-solid border-4 border-sky-500 lg:w-1/5">
        <h1 className="text-xl text-center font-bold underline">Result Box</h1>
        <h3 className="p-4">
          My name is {name}, and I'm {gender},
          {islocation ? ` my location is ${location},` : ""} {isschool ? `my school was
          ${school},` : ""} my major project was {major}, {isoccupation ? `right now my occupation is ${occupation},` : ""} {isreligious ? `I respect every god ${religious},` : ""}
          {ismissionaries ? `my missionaries is ${missionaries}.` : ""}
        </h3>
      </div>
    </div>
  );
};

export default BioForm;
