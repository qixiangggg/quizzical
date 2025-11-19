import { useEffect,useState } from "react"
import { Quiz } from "./Quiz"
import { v4 as uuidv4 } from "uuid"
import Background from "./Background"
import blueBubble from "../assets/blue-bubble.png"
import yellowBubble from "../assets/yellow-bubble.png"

export default function Quizpage(){
    const [quizData, setQuizData] = useState([])
    useEffect(() => {
        async function getData(){
            const response = await fetch("https://opentdb.com/api.php?amount=5")
            const data = await response.json()
            setQuizData(data.results)
        }
        getData()
    },[])
    console.log(quizData)
    const quizElements = quizData.map((quiz,index) => <Quiz quiz={quiz} key={uuidv4()} index={index}/>)
    return(
        <>
            <Background img={yellowBubble} class="top-bubble"/>
            <main className="quizpage">
                {quizElements}
                <button type="submit" className="check-answers-btn">Check answers</button>
            </main>
            <Background img={blueBubble} class="bottom-bubble"/>
        </>
    )
}