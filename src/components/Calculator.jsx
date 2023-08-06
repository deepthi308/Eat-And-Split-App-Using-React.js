import Button from "./Button";
import UserInput from "./UserInput";

export function Calculator({
  bill,
  setBill,
  yourExpense,
  setYourExpense,
  otherExpense,
  setOtherExpense,
  payer,
  setPayer,
  user,
  setUser,
  yourBalance,
  setYourBalance,
  friends,
  setFriends
}) {
  const handleYExpChange = (e) => {
    // setYourExpense(e.target.value);
    const oExp = bill - Number(e.target.value);
    setOtherExpense(Number(oExp));
  };

  const handleOExpChange = (e) => {
    // setOtherExpense(e.target.value)
    const yExp = bill - Number(e.target.value);
    setYourExpense(Number(yExp));
  };

  const handleSplit = () => {
    let newFriends;
    if (payer === "You") {
      newFriends = friends.map((friend) => {
        if (friend.id === user.id) {
          return {
            ...friend,
            balance: friend.balance - Number(otherExpense)
          };
        }
        return friend;
      });
    } else if (payer === user.name) {
      newFriends = friends.map((friend) => {
        if (friend.id === user.id) {
          return {
            ...friend,
            balance: friend.balance + Number(yourExpense)
          };
        }
        return friend;
      });
    } else {
      newFriends = friends.map((friend) => {
        if (friend.id === user.id) {
          return {
            ...friend,
            balance: friend.balance + Number(yourExpense)
          };
        }
        return friend;
      });
    }

    setFriends(newFriends);
  };

  return (
    <div className="calculator">
      <div className="title">Split a Bill With {user.name}</div>
      <div className="content">
        <UserInput id={"bill"} type={"text"} value={bill} setValue={setBill}>
          Bill value
        </UserInput>
        <UserInput
          id={"yExpense"}
          type={"number"}
          value={yourExpense}
          setValue={setYourExpense}
          handleChange={handleYExpChange}
        >
          Your expense
        </UserInput>
        <UserInput
          id={"oExpense"}
          type={"number"}
          value={otherExpense}
          setValue={setOtherExpense}
          handleChange={handleOExpChange}
        >
          {user.name}'s Expense
        </UserInput>
        <div className="user-input">
          <label htmlFor={payer}>Who is paying the bill</label>
          <select
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            id="payer"
          >
            <option value="You">You</option>
            <option value={user.name}>{user.name}</option>
          </select>
        </div>
        <Button handleClick={handleSplit}>Split Bill</Button>
      </div>
    </div>
  );
}
