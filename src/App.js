import "./styles.css";
import data from "./data/data.json";
import FriendList from "./components/FriendList";
import { Calculator } from "./components/Calculator";
import AddFriend from "./components/AddFriend";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    img: "",
    balance: 0
  });
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [otherExpense, setOtherExpense] = useState(0);
  const [payer, setPayer] = useState("You");
  const [friends, setFriends] = useState([
    {
      id: "",
      name: "",
      img: "",
      balance: 0
    }
  ]);

  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    img: "",
    balance: 0
  });

  const [isOpen, setIsOpen] = useState(false);

  const [yourBalance, setYourBalance] = useState(200);

  // const [owe, setOwe] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("friends")) {
      setFriends(JSON.parse(localStorage.getItem("friends")));
    } else {
      setFriends(data);
    }
  }, []);

  useEffect(() => {
    setNewUser({
      id: friends.length > 0 ? friends[friends.length - 1].id + 1 : 0,
      name: "",
      img: "",
      balance: 0
    });
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  console.log(newUser);
  console.log(friends);

  return (
    <div className="App">
      <FriendList
        friends={friends}
        setFriends={setFriends}
        user={user}
        setUser={setUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setBill={setBill}
        setYourExpense={setYourExpense}
        setOtherExpense={setOtherExpense}
        setPayer={setPayer}
      />
      {user.id !== "" && (
        <Calculator
          className="calc"
          bill={bill}
          setBill={setBill}
          yourExpense={yourExpense}
          setYourExpense={setYourExpense}
          otherExpense={otherExpense}
          setOtherExpense={setOtherExpense}
          payer={payer}
          setPayer={setPayer}
          user={user}
          setUser={setUser}
          yourBalance={yourBalance}
          setYourBalance={setYourBalance}
          friends={friends}
          setFriends={setFriends}
        />
      )}
      {isOpen === true && (
        <AddFriend
          friends={friends}
          setFriends={setFriends}
          newUser={newUser}
          setNewUser={setNewUser}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
