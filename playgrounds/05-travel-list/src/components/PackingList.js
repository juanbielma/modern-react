import { useState } from "react";
import Item from "./Item";
import Actions from "./Actions";

const PackingList = ({ items, onRemoveItem, onCheckItem, onClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onRemoveItem={onRemoveItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      <Actions sortBy={sortBy} setSortBy={setSortBy} onClear={onClear} />
    </div>
  );
};

export default PackingList;
