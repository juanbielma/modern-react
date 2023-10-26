import { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
  const [showform, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    const friend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };

    onAddFriend(friend);
    resetForm();
  }

  function resetForm() {
    setImage("https://i.pravatar.cc/48");
    setName("");
    setShowForm(false);
  }

  return (
    <>
      {showform ? (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <label>👫 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>🌄 Image Url</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
      ) : (
        <button className="button" onClick={() => setShowForm(true)}>
          Add Friend
        </button>
      )}
    </>
  );
};
export default AddFriend;
