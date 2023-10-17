const Item = ({
  id,
  description,
  quantity,
  packed,
  onRemoveItem,
  onCheckItem,
}) => {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onCheckItem(id)} />
      <span style={!packed ? {} : { textDecoration: "line-through" }}>
        {`${quantity} ${description}`}
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
};

export default Item;
