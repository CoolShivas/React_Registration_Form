import { useState } from "react";
import styles from "./InputForm.module.css";

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
        handleOnAddDetailsOnBtnABC(valUser, valNumber);
        setUser('');
        setNumber('');

    }

    return <form onSubmit={handleOnSubmit}>
        <div className={styles.main_div}>
            <div>
                <label htmlFor="username"> Username </label>
            </div>

            <div>
                <input type="text" id="username" onChange={handleOnChangeUserName} value={valUser} />
            </div>

            <div>
                <label htmlFor="age"> Age </label>
            </div>

            <div>
                <input type="number" id="age" onChange={handleOnChangeNumber} value={valNumber} />
            </div>

            <div>
                <button type="submit"> Add Details </button>
            </div>
        </div>

    </form>
}

export default InputForm;