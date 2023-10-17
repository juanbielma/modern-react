const Actions = ({ sortBy, setSortBy, onClear }) => {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed statrus</option>
      </select>
      <button onClick={onClear}>Clear List</button>
    </div>
  );
};

export default Actions;
