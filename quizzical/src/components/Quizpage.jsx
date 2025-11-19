import { useEffect,useState } from "react"
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
    return(
        <h1>test</h1>
    )
}