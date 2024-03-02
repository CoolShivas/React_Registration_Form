import classes from "./ErrorMsg.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorMsg = ({ titleABC, messageABC, errorHandlerBtnABC }) => {
    return <div className={classes.backdrop} >
        <Card className={classes.modal}>
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
    </div>
}

export default ErrorMsg;