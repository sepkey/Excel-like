import "./project2.scss";
import { useGlobalContext } from "./Context/context";
import FormSetup from "./Form/FormSetup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Loading from "./Loading/Loading";
import Modal from "./Modal/Modal";

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    nextQuestion,
    checkAnswers,
    correct,
  } = useGlobalContext();

  if (waiting) return <FormSetup />;
  if (loading) return <Loading />;

  //Shuffle the answers not just plain pushing!
  const { question, correct_answer, incorrect_answers } = questions[index];
  let answers = [...incorrect_answers];
  let tempIndex = Math.floor(Math.random() * (answers.length + 1));

  if (tempIndex === answers.length) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct} / {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswers(correct_answer === answer)}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next questions <KeyboardDoubleArrowRightIcon />
        </button>
      </section>
    </main>
  );
};

export default App;
