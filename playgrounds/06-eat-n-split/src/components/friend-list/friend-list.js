import Friend from "../friend/friend";

const FriendList = ({ friends, selectedId, onSelect }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedId={selectedId}
          key={friend.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default FriendList;
