import { useGlobalContext } from "../Context/context";
const Modal = () => {
  const { resetGame, modal, questions, correct } = useGlobalContext();
  return (
    <div className={`${modal ? "modal-container isOpen" : "modal-container"}`}>
      <div className="modal-content">
        <h2>congrats</h2>
        <p>You answered {((correct / questions.length) * 100).toFixed(0)} %</p>
        <button className="close-btn" onClick={resetGame}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
