import { useState } from "react";

const UserDetails = () => {
  const Details = [
    {
      id: "01",
      name: "hrithik",
      age: "23",
    },
    {
      id: "02",
      name: "mohan",
      age: "23",
    },
    {
      id: "03",
      name: "shyam",
      age: "23",
    },
  ];

  const [details, setDetails] = useState(Details);
  const removeDetails = () => {
    setDetails([]);
  };
  return (
    <>
      {details.map((detail) => (
        <h1>
          id : {detail.id} name: {detail.name} age:{detail.age}
        </h1>
      ))}

      <button className="btn" onClick={removeDetails}>
        Click to Remove Details
      </button>
    </>
  );
};
// console.log(UserDetails);

export default UserDetails;
