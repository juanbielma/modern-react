import { useState } from "react";

const useStepHook = () => {
  const [step, setStep] = useState(0);

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return [step, handlePrevious, handleNext];
};

export default useStepHook;
