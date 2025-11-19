import Background from './Background'
import blueBubble from "../assets/blue-bubble.png"
import yellowBubble from "../assets/yellow-bubble.png"

export default function Homepage(props){
    return(
        <>
            <Background img={yellowBubble} class="top-bubble"/>
            <main className="homepage">
                <h1>Quizzical</h1>
                <p>Some description if needed</p>
                <button onClick={props.handleClick}>Start quiz</button>
            </main>
            <Background img={blueBubble} class="bottom-bubble"/>
        </>
    )
}