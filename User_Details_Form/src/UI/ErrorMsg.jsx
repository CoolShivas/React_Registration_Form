import { createPortal } from 'react-dom'
import ReactDOM from "react-dom/client";
import React from "react";
import classes from "./ErrorMsg.module.css";
import Card from "./Card";
import Button from "./Button";


const Backdrop = ({ errorHandlerBtnABC }) => {
    return <div className={classes.backdrop} onClick={errorHandlerBtnABC}></div>
}

const ModalOverlay = ({ titleABC, messageABC, errorHandlerBtnABC }) => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {titleABC}
            </h2>
        </header>
        <main className={classes.content}>
            {messageABC}
        </main>
        <footer className={classes.actions}>
            <Button onClick={errorHandlerBtnABC}> Okay </Button>
        </footer>
    </Card>
}


const ErrorMsg = ({ titleABC, messageABC, errorHandlerBtnABC }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={errorHandlerBtnABC} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={titleABC}
                    message={messageABC}
                    onClick={errorHandlerBtnABC}
                />
            )}
        </React.Fragment>
    )
}

export default ErrorMsg;