
import { useState } from "react";
// import Card from "./UI/Card";
import InputForm from "./components/InputForm";
import ListOfUsers from "./components/ListOfUsers";

function App() {

  const detailsOfUsers = [
    { name: "sam", age: 25, college: "Jiwaji University" },
    { name: "john", age: 15, college: "RGPV University" },
    { name: "methew", age: 35, college: "Sagar University" },
  ];

  const [valDetails, setDetails] = useState(detailsOfUsers);

  const handleOnAddDetailsOnBtn = (name, age, college) => {
    console.log(`Details are ${name} and ${age} and ${college}`);
    const dataFill = [...valDetails, {
      name: name,
      age: age,
      college: college,
    }]
    setDetails(dataFill);
  }

  return <>

    <InputForm
      handleOnAddDetailsOnBtnABC={handleOnAddDetailsOnBtn}
    ></InputForm>

    <ListOfUsers
      // detailsOfUsersABC={detailsOfUsers}
      detailsOfUsersABC={valDetails}
    ></ListOfUsers>

  </>
}

export default App;