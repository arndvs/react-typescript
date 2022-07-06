import * as React from 'react'
import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = React.useState(true);

  return (
    <article className="question">
      <div className="my-8">{question}</div>
      <p className="answer">
        <span className={`${isHidden ? 'blurred' : 'visible'}`}>{answer}</span>
      </p>
      <div>
        <button className="m-8" onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
      </div>
    </article>
  );
};

const UseStateToggle = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default UseStateToggle;
