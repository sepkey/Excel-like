import { useGlobalContext } from "../Context/context";
const FormSetup = () => {
  const { handleChange, handleSubmit, error, inputObject } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              id="amount"
              name="amount"
              type="number"
              className="form-input"
              min={1}
              max={50}
              onChange={handleChange}
              value={inputObject.amount}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              onChange={handleChange}
              value={inputObject.category}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              onChange={handleChange}
              value={inputObject.difficulty}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          {error && (
            <p className="error">Can't generate questions , pls try again.</p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default FormSetup;
