export default function UserInput({ userInput, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              onHandleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              onHandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) =>
              onHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => onHandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
