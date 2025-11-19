import { decode } from "html-entities"
import Option from "./Option"
import { v4 as uuidv4 } from "uuid"
export function Quiz(props){
    const options = [...props.quiz.incorrect_answers, props.quiz.correct_answer]
    const optionElements = options.map(option => (<Option key={uuidv4()} index={props.index} answer={option}/>)
    )
    return(
        <section className="quiz">
            <h2>{decode(props.quiz.question)}</h2>
            <div className="options">
                {optionElements}
            </div>
            <hr/>
        </section>
    )
}