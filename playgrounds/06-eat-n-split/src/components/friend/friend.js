import Balance from "./balance/balance";

const Friend = ({ friend, selectedId, onSelect }) => {
  const { id, name, image, balance } = friend;
  const isSelected = id === selectedId;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Balance name={name} balance={balance} />
      <button type="button" className="button" onClick={() => onSelect(id)}>
        Select
      </button>
    </li>
  );
};

export default Friend;
