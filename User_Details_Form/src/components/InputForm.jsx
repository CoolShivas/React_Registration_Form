import ErrorMsg from "../UI/ErrorMsg";
import Button from "../UI/Button";
import classes from "./InputForm.module.css";
import Card from "../UI/Card";
import { useState } from "react";
// import styles from "./InputForm.module.css";


const InputForm = ({ handleOnAddDetailsOnBtnABC }) => {

    const [valUser, setUser] = useState('');
    const [valNumber, setNumber] = useState('');

    const [error, setError] = useState();

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
        // if (valUser.trim().length === 0 || valNumber.trim().length === 0) {
        //     setFieldBlankColor(false);
        //     return;
        // }
        // if (+valNumber < 1) {
        //     setFieldBlankColor(false);
        //     return;
        // }

        if (valUser.trim().length === 0 || valNumber.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values).",
            })
            return;
        }
        if (+valNumber < 1) {
            setError({
                title: "Invalid number",
                message: "Please enter a valid age (>0)."
            })
            return;
        }
        handleOnAddDetailsOnBtnABC(valUser, valNumber);
        setUser('');
        setNumber('');

    }


    const errorHandlerBtn = () => {
        setError(null);
    }

    return <div>
        {error && <ErrorMsg
            titleABC={error.title}
            messageABC={error.message}
            errorHandlerBtnABC={errorHandlerBtn}
        ></ErrorMsg>}
        <Card className={`${classes.input} ${classes.button}`}>
            <form onSubmit={handleOnSubmit}>
                <div className="main_div">
                    <div>
                        <label htmlFor="username"
                        > Username </label>
                    </div>

                    <div>
                        <input type="text" id="username"
                            onChange={handleOnChangeUserName}
                            value={valUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="age"
                        > Age (Years) </label>
                    </div>

                    <div>
                        <input type="number" id="age" onChange={handleOnChangeNumber} value={valNumber}
                        />
                    </div>

                    <div>
                        {/* <button type="submit"> Add Details </button> */}

                        <Button type="submit"> Add Details </Button>
                    </div>
                </div>

            </form>
        </Card>
    </div>
}

export default InputForm;