import Button from "./Button";

export default function Friend({
  friends,
  setFriends,
  friend,
  user,
  setUser,
  isOpen,
  setIsOpen,
  setBill,
  setYourExpense,
  setOtherExpense,
  setPayer
}) {
  const handleDelete = () => {
    const newFriends = friends.filter((frnd) => {
      return frnd.id !== friend.id;
    });

    setFriends(newFriends);
    if (user.id === friend.id) {
      setUser({
        id: "",
        name: "",
        img: "",
        balance: 0
      });
    }
  };

  // console.log(user);
  // console.log(friend);
  // console.log(friend.id);

  const handleClick = () => {
    setUser((prevUser) =>
      prevUser.id === friend.id
        ? {
            id: "",
            name: "",
            img: "",
            balance: 0
          }
        : friend
    );
    if (isOpen) {
      setIsOpen(false);
    }
    setPayer(user.name);
    // setBill(0);
    // setYourExpense(0);
    // setOtherExpense(0);
  };

  return (
    <li className={`friend ${user.id === friend.id ? "selected" : ""}`}>
      <section className="left">
        <img src={friend.img} alt={friend.name} />
      </section>
      <section className="right">
        <div className="name">{friend.name}</div>
        <div
          className={`text ${
            friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
          }`}
        >
          {friend.balance > 0 && (
            <>{`You owes ${friend.name} ${friend.balance}`}</>
          )}
          {friend.balance < 0 && (
            <>{`${friend.name} owes You ${Math.abs(friend.balance)}`}</>
          )}
          {friend.balance === 0 && <>{`You both are even`}</>}
        </div>
      </section>
      <div className="last">
        <Button handleClick={handleClick} className="btn btnnn">
          {user.id === friend.id ? "Close" : "Select"}
        </Button>
        <button onClick={handleDelete} className="close">
          X
        </button>
      </div>
    </li>
  );
}
