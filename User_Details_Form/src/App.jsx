import { useState } from "react";
import Card from "./UI/Card";
import InputForm from "./components/InputForm";
import ListOfUsers from "./components/ListOfUsers";

function App() {

  const detailsOfUsers = [
    { name: "sam", age: 25 },
    { name: "john", age: 15 },
    { name: "methew", age: 35 },
  ];

  const [valDetails, setDetails] = useState(detailsOfUsers);

  const handleOnAddDetailsOnBtn = (name, age) => {
    console.log(`Details are ${name} and ${age}`);
    const dataFill = [...valDetails, {
      name: name,
      age: age,
    }]
    setDetails(dataFill);
  }

  return <Card>
    <InputForm
      handleOnAddDetailsOnBtnABC={handleOnAddDetailsOnBtn}
    ></InputForm>

    <ListOfUsers
      // detailsOfUsersABC={detailsOfUsers}
      detailsOfUsersABC={valDetails}
    ></ListOfUsers>

  </Card>
}

export default App;