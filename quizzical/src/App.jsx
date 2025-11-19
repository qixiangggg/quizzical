import { useState } from 'react'
import Homepage from './components/Homepage'
import Quizpage from './components/Quizpage'
function App() {
  const [showQuizPage, setShowQuizPage] = useState(false)

  return (
    <>
      {!showQuizPage && <Homepage handleClick={() => setShowQuizPage(true)}/>}
      {showQuizPage && <Quizpage/>}
    </>
  )
}

export default App
