import "./Die.css"

const Die = (props) => {
    // props
    // value /value
    // isHeld /valie
    // holdDice /function

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFF"
    }
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <h2 className="die-face--num">{props.value}</h2>
        </div>
    );
}

export default Die;