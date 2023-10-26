const Balance = ({ name, balance }) => {
  if (balance > 0) {
    return (
      <p className="green">
        {name} owes you ${balance}
      </p>
    );
  }

  if (balance < 0) {
    return (
      <p className="red">
        You owe {name} ${Math.abs(balance)}
      </p>
    );
  }

  return <p>You and {name} are even</p>;
};

export default Balance;
