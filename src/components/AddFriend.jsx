import { useState } from "react";
import Button from "./Button";
// import UserInput from "./UserInput";

export default function AddFriend({
  friends,
  setFriends,
  newUser,
  setNewUser,
  setIsOpen
}) {
  const handleNameChange = (e) => {
    if (isErr) {
      setIsErr(false);
    }
    setNewUser({
      ...newUser,
      name: e.target.value
    });
  };

  const [isErr, setIsErr] = useState(false);

  const handleImgChange = (e) => {
    setNewUser({
      ...newUser,
      img: e.target.value
    });
  };

  const handleAddUser = () => {
    if (newUser.name === "") {
      setIsErr(true);
      return;
    }
    if (newUser.img === "") {
      setFriends([
        ...friends,
        {
          ...newUser,
          img:
            "https://th.bing.com/th?id=OIP.qj9398wz2bFSHN1iBRFo4QHaKZ&w=210&h=296&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        }
      ]);
    } else {
      setFriends([...friends, newUser]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="add-friend">
      <div className="top">
        <div className="form-group">
          <label id="name" type="text">
            Friend name
          </label>
          <input type="text" value={newUser.name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label id="img" type="text">
            Image URL
          </label>
          <input type="text" value={newUser.img} onChange={handleImgChange} />
        </div>
      </div>
      <div className="bottom">
        <Button className="btnn" handleClick={handleClose}>
          Close
        </Button>
        <Button className="btnn" handleClick={handleAddUser}>
          Add
        </Button>
      </div>
      {isErr && <p>Enter the user name</p>}
    </div>
  );
}
