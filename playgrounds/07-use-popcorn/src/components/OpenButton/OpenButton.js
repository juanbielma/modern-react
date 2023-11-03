function OpenButton({ isOpen, onOpen }) {
  return (
    <button className="btn-toggle" onClick={() => onOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

export default OpenButton;
