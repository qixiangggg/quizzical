import { useEffect,useState } from "react"
import { Quiz } from "./Quiz"
import { v4 as uuidv4 } from "uuid"
import Background from "./Background"
import blueBubble from "../assets/blue-bubble.png"
import yellowBubble from "../assets/yellow-bubble.png"

export default function Quizpage(){
    const [quizData, setQuizData] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [correctCount, setCorrectCount] = useState(0)
    useEffect(() => {
        getData()
    },[])

    async function getData(){
        const response = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await response.json()
        setQuizData(data.results)
    }

    function handleSubmit(formData){
        const data = Object.fromEntries(formData)
        const ret = []
        let count = 0
        for(let i = 0; i < 5; i++){
            const selectedOption = data[`question${i}`]
            console.log(selectedOption)
            console.log(quizData[i].correct_answer)
            if(quizData[i].correct_answer === selectedOption){
                count++;
            }
            ret.push(selectedOption)
        }
        setSelectedAnswer(ret)
        setCorrectCount(count)
    }

    async function newGame(){
        await getData()
        setSelectedAnswer([])
        setCorrectCount(0)
    }

    const quizElements = quizData.map((quiz,index) => <Quiz quiz={quiz} key={uuidv4()} index={index} selectedAnswer={selectedAnswer.length > 0 ? selectedAnswer[index]: null}/>)
    return(
        <>
            <Background img={yellowBubble} class="top-bubble"/>
            <main className="quizpage">
                <form action={handleSubmit}>
                    {quizElements}
                    {selectedAnswer.length === 0 && quizData.length > 0 && (<button type="submit" className="check-answers-btn">Check answers</button>)}
                </form>
                {selectedAnswer.length > 0 && (
                    <footer>
                        <h2>You score {correctCount}/{selectedAnswer.length} correct answers</h2>
                        <button onClick={newGame} className="new-game-btn">Play again</button>
                    </footer>
                    )}
            </main>
            <Background img={blueBubble} class={`bottom-bubble ${quizData.length > 0 ? "relative" : ""}`}/>
        </>
    )
}