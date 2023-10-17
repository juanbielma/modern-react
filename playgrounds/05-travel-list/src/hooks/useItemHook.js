import { useState } from "react";

const useItemHook = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((prev) => {
      return [...prev, item];
    });
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleCheckItem = (id) => {
    setItems((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          return { ...i, packed: !i.packed };
        }

        return i;
      });
    });
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return [
    items,
    handleAddItems,
    handleRemoveItem,
    handleCheckItem,
    handleClear,
  ];
};

export default useItemHook;
