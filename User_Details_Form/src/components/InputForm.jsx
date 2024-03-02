import Button from "../UI/Button";
import classes from "./InputForm.module.css";
import Card from "../UI/Card";
import { useState } from "react";
// import styles from "./InputForm.module.css";


const InputForm = ({ handleOnAddDetailsOnBtnABC }) => {

    const [valUser, setUser] = useState('');
    const [valNumber, setNumber] = useState('');

    const handleOnChangeUserName = (event) => {
        console.log(event.target.value);
        setUser(event.target.value);
    }

    const handleOnChangeNumber = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('submitted')
        if (valUser.trim().length === 0 && valNumber.trim().length === 0) {
            return;
        }
        handleOnAddDetailsOnBtnABC(valUser, valNumber);
        setUser('');
        setNumber('');

    }

    return <Card classNameModCss={`${classes.input} ${classes.button}`}>
        <form onSubmit={handleOnSubmit}>
            <div className="main_div">
                <div>
                    <label htmlFor="username"> Username </label>
                </div>

                <div>
                    <input type="text" id="username"
                        onChange={handleOnChangeUserName}
                        value={valUser}
                    />
                </div>

                <div>
                    <label htmlFor="age"> Age (Years) </label>
                </div>

                <div>
                    <input type="number" id="age" onChange={handleOnChangeNumber} value={valNumber} />
                </div>

                <div>
                    {/* <button type="submit"> Add Details </button> */}

                    <Button type="submit"> Add Details </Button>
                </div>
            </div>

        </form>
    </Card>
}

export default InputForm;