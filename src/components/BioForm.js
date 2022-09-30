import React, { useEffect, useState } from "react";

const BioForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [location, setLocation] = useState("");
  const [islocation, setIslocation] = useState(false);
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [occupation, setOccupation] = useState("Web Developer");
  const [religious, setReligious] = useState("");
  const [missionaries, setMissionaries] = useState("");

  useEffect(() => {
    console.log(name) ;
  }, [name]);

  let nameArr = [
    { name: "Rohit Gupta", gender: "Male" },
    { name: "Aman Sharma", gender: "Male" },
    { name: "Pragti Mishra", gender: "Female" },
    { name: "Ritu Dubye", gender: "Female" },
    { name: "Neha Verma", gender: "Female" },
  ];

  const handleName = ()=> {
      nameArr.map((e)=>{
        const randomName = nameArr[Math.floor(Math.random() * nameArr.length)].name;
        return setName(randomName);
      })
  };


  let locationArr = [
    { locationName: "Indore, Madhya Pradesh"},
    { locationName: "Bhopal, Madhya Pradesh"},
    { locationName: "Pune, Maharastra"},
    { locationName: "Mumbai, Maharastra"},
    { locationName: "Banglore, Karnataka"},
  ];

  const handleLocation = ()=> {
    locationArr.map((e)=>{
      const randomLocation = locationArr[Math.floor(Math.random() * locationArr.length)].locationName;
      return setLocation(randomLocation);
    })
};

  let schoolArr = [
    { schoolName: "G.D. Goeanka, Indore"},
    { schoolName: "Delhi Public School, Bhopal"},
    { schoolName: "Embreal Heights, Indore"},
    { schoolName: "Little Angles, Gwalior"},
  ];

    const handleSchool = ()=> {
      schoolArr.map((e)=> {
        const randomSchool = schoolArr[Math.floor(Math.random() * schoolArr.length)].schoolName;
        return setSchool(randomSchool);
      })
    };

  let majorArr = [
    { majorName: "Graphic Design" },
    { majorName: "History" },
    { majorName: "Cybersecurity" },
    { majorName: "Chemistry" },
    { majorName: "Information Technology" },
  ];

    const handleMajor = ()=> {
      majorArr.map((e)=> {
        const randomMajor = majorArr[Math.floor(Math.random() * majorArr.length)].majorName
        return setMajor(randomMajor);
      })
    };

    let occupationArr = [
      { occName: "musician" },
      { occName: "salesperson" },
      { occName: "web developer" },
      { occName: "pilot" },
      { occName: "scooba diver" },
    ];

      const handleOccupation = ()=> {
        occupationArr.map((e)=> {
          const randomOccu = occupationArr[Math.floor(Math.random() * occupationArr.length)].occName;
          return setOccupation(randomOccu);
        })
      }



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
              onChange={(e) => setGender(e.target.value)
              }
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={(e)=> handleName()}
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
                islocation ? setLocation(e.target.value) : setLocation("null")
              }
            />
          </div>
          <div className="h-full">
            <button onClick={(e)=> handleLocation()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
                />
                <span className="ml-2 text-gray-700">School</span>
              </label>
              <input
                className="p-1.5 mx-2 border rounded-md shadow-sm"
                type="text"
                placeholder="School"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className="h-full">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={(e)=> handleSchool()}>
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
              <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 rounded" onClick={(e)=> handleMajor()}>
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
              />
              <span className="ml-2 text-gray-700">Occupation</span>
            </label>
            <input
              className="p-1.5 mx-2 border rounded-md shadow-sm"
              type="text"
              placeholder="Occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="h-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={(e)=> handleOccupation()}>
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
              />
              <span className="ml-2 text-gray-700">Religious Background</span>
            </label>
            <div>
              <textarea
                className="p-1.5 w-full text-base mx-2 border rounded-md shadow-sm"
                rows="4"
                type="text"
                placeholder="Religious Background"
                onChange={(e) => setReligious(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="h-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Random Occupation
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
                onChange={(e) => setMissionaries(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="h-full">
            <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded">
              Restoration
            </button>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded">
              Plan of Salvation
            </button>
            <button className="bg-purple-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded">
              Gospel of Christ
            </button>
            <button className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded">
              Law of Chastity
            </button>
          </div>
        </div>
      </div>
      {/* Result box */}
      <div className="w-2/5 h-64 m-3 lg:mt-14 lg:ml-5 border-solid border-4 border-sky-500 lg:w-1/5">
        <h1 className="text-xl text-center font-bold underline">Result Box</h1>
        <h3 className="p-4">
          My name is {name}, and I'm {gender}, my location is {location}, my
          school was {school}, in school my major project was {major}, right now
          my occupation is {occupation},{" "}
          {religious.length > 0 ? religious : "I respect every god"},{" "}
          {missionaries.length > 0 ? missionaries : "we are not alone"}
        </h3>
      </div>
    </div>
  );
};

export default BioForm;
