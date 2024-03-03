import ErrorMsg from "../UI/ErrorMsg";
import Button from "../UI/Button";
import classes from "./InputForm.module.css";
import Card from "../UI/Card";
import { useState, useRef } from "react";
// import styles from "./InputForm.module.css";


const InputForm = ({ handleOnAddDetailsOnBtnABC }) => {

    const [error, setError] = useState();

    const userNameRef = useRef();
    const ageRef = useRef();
    const collegeNameRef = useRef();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const ageYear = ageRef.current.value;
        const collegeName = collegeNameRef.current.value;

        if (userName.trim().length === 0 || ageYear.trim().length === 0 || collegeName.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a full details.",
            })
            return;
        }
        if (+ageYear < 1) {
            setError({
                title: "Invalid number",
                message: "Please enter a valid age (>0)."
            })
            return;
        }
        handleOnAddDetailsOnBtnABC(userName, ageYear, collegeName);
        userNameRef.current.value = '';
        ageRef.current.value = '';
        collegeNameRef.current.value = '';

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
                            ref={userNameRef}
                        />
                    </div>

                    <div>
                        <label htmlFor="age"
                        > Age (Years) </label>
                    </div>

                    <div>
                        <input type="number" id="age"
                            ref={ageRef}
                        />
                    </div>

                    <div>
                        <label htmlFor="collegename"
                        > College Name </label>
                    </div>

                    <div>
                        <input type="text" id="collegename"
                            ref={collegeNameRef}
                        />
                    </div>

                    <div>
                        <Button type="submit"> Add Details </Button>
                    </div>
                </div>

            </form>
        </Card>
    </div>
}

export default InputForm;