import { useState } from "react";
import { AddFriend, FriendList, SplitForm } from "./components";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedId, setSelectedId] = useState(null);

  const selectedFriend = friends.find((f) => f.id === selectedId);

  function handleSelect(id) {
    if (friends.some((f) => f.id === id)) {
      setSelectedId(id);
    }
  }

  function handleSplitBills(id, balance) {
    setFriends((prev) =>
      prev.map((friend) => {
        if (friend.id === id) {
          return { ...friend, balance };
        }
        return friend;
      })
    );
  }

  function handleAddFriend(friend) {
    if (friend) {
      setFriends((prev) => [...prev, friend]);
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
        <AddFriend onAddFriend={handleAddFriend} />
      </div>
      {selectedFriend ? (
        <SplitForm
          id={selectedFriend.id}
          name={selectedFriend.name}
          balance={selectedFriend.balance}
          onSplit={handleSplitBills}
        />
      ) : null}
    </div>
  );
};

export default App;
