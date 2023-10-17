import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import useItemHook from "../hooks/useItemHook";

const App = () => {
  const [
    items,
    handleAddItems,
    handleRemoveItem,
    handleCheckItem,
    handleClear,
  ] = useItemHook();

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onCheckItem={handleCheckItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
