// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Alert, Container, Table } from 'react-bootstrap';
import { answerQuestion, setTimer, reset } from '../redux/QuizReducer';

const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, score, timer } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      dispatch(answerQuestion(''));
    }

  }, [timer,dispatch]);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(answer));
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <Container className="text-center mt-4 ">
        <Alert variant="success">
          <h1>Quiz Over</h1>
          <p>Your Score: {score}</p>
          <Button variant="primary" onClick={() => dispatch(reset())}>
            Play Again
          </Button>
        </Alert>
      </Container>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <Container className="text-center mt-4">
    <Alert variant='info'>
    <h2 className="mb-4">{question.question}</h2>
    <Table bordered hover className="mx-auto" style={{ maxWidth: '500px' }}>
      <tbody>
        {question.options.map((option) => (
          <tr key={option}>
            <td>
              <Button variant="outline-success" className="w-100" onClick={() => handleAnswer(option)}>
                {option}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div className="mt-3">
      <h5 className='text-danger'>Time Left: {timer}s</h5>
    </div>
    </Alert>
  </Container>
  );
};

export default Quiz;
