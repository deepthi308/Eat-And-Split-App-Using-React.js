import Button from "./Button";
import Friend from "./Friend";

export default function FriendList({
  friends,
  setFriends,
  user,
  setUser,
  isOpen,
  setIsOpen,
  setBill,
  setYourExpense,
  setOtherExpense,
  setPayer
}) {
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="friend-list">
      <div className="topp">
        <h1 className="name2">
          Eat & Split{" "}
          <span role="img" aria-label="emoji">
            💰
          </span>
        </h1>
        <p className="emoji">
          <span role="img" aria-label="emoji">
            🍚🍛🍵🍹🍴
          </span>
        </p>
      </div>
      <ul className="list">
        {friends.map((friend) => {
          return (
            <Friend
              friends={friends}
              setFriends={setFriends}
              friend={friend}
              user={user}
              setUser={setUser}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setBill={setBill}
              setYourExpense={setYourExpense}
              setOtherExpense={setOtherExpense}
              setPayer={setPayer}
            />
          );
        })}
      </ul>
      <Button handleClick={handleModalOpen}>Add friend</Button>
    </div>
  );
}
