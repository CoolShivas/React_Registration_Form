import "./Card.css"

const Card = (props) => {

    const newClasses = "card_format " + props.className;

    return <div className={newClasses}> {props.children} </div>
}

export default Card;