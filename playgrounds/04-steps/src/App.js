import { useState } from "react";
import useStep from "./stepHook";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, handlePrevious, handleNext] = useStep();

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && <Steps {...{ step, handlePrevious, handleNext }} />}
    </>
  );
};

const Steps = ({ step, handlePrevious, handleNext }) => {
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 0 && "active"}>1</div>
        <div className={step >= 1 && "active"}>2</div>
        <div className={step >= 2 && "active"}>3</div>
      </div>

      <p className="message">
        Step {step + 1}: {messages[step]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
