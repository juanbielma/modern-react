const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some item to the packing list</em>
      </footer>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((i) => i.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You have everything ready to go ✈️`
          : `👝 You have ${totalItems} items on your list, and you already packed 
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
