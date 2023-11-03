import { useState } from "react";
import OpenButton from "../OpenButton/OpenButton";

function ListBox({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <OpenButton isOpen={isOpen} onOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}

export default ListBox;
