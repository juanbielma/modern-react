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
        <div className={step >= 0 ? "active" : ""}>1</div>
        <div className={step >= 1 ? "active" : ""}>2</div>
        <div className={step >= 2 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>
        {messages[step]}
        <div className="buttons">
          <Button
            bgColor="#7950f2"
            textColor="#fff"
            onClick={() => alert(`Lear how to ${messages[step]}`)}
          >
            Learn how to
          </Button>
        </div>
      </StepMessage>

      <div className="buttons">
        <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
          <span>👈</span> Previous
        </Button>
        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  );
};

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step + 1}: </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
