import classes from "./Card.module.css";
// import "./Card.css"

const Card = (props) => {

    // const newClasses = "card_format " + props.className;

    // return <div className={newClasses}> {props.children} </div>

    return <div className={`${classes.newCardModule} ${props.className}`}> {props.children} </div>

}

export default Card;