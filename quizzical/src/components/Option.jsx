export default function Option(props){
    const id = `question${props.index}-${props.answer}`
    return (
        <div className="option">
            <input type="radio" name={`question${props.index}`} className="option" id={id}/>
            <label htmlFor={id}>{props.answer}</label>
        </div>
    )
}