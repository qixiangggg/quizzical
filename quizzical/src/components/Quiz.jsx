import { decode } from "html-entities"
import Option from "./Option"
import { v4 as uuidv4 } from "uuid"
import { clsx } from "clsx"
export function Quiz(props){
    const options = [...props.quiz.incorrect_answers]
    const randomIndex = Math.ceil(Math.random() * options.length)
    options.splice(randomIndex, 0, props.quiz.correct_answer)
    
    const optionElements = options.map(option => {
        const selectedAnswer = props.selectedAnswer
        return (<Option 
            key={uuidv4()} 
            index={props.index} 
            answer={decode(option)} 
            class={clsx({
                "correct": selectedAnswer && option === props.quiz.correct_answer,
                "wrong": selectedAnswer === option && option !== props.quiz.correct_answer
            })}
            disabled={selectedAnswer ? true : false}
            />)
    }
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