import { Container } from 'react-bootstrap';
import './App.css'
import Quiz from './components/Quiz';
function App() {

  return (
    <>
      <Container className="text-center mt-4 ">
      <h1>Quiz App</h1>
      <Quiz/>
    </Container>
    </>
  )
}

export default App
