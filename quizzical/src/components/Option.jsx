export default function Option(props){
    const id = `question${props.index}-${props.answer}`
    return (
        <div className="option">
            <input type="radio" name={`question${props.index}`} className={`option ${props.class}`} id={id} value={props.answer} disabled={props.disabled} required/>
            <label htmlFor={id}>{props.answer}</label>
        </div>
    )
}