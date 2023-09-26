import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/UserRedux";

function AddNewUser() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addUser({
              id: userList[userList.length - 1].id + 1,
              name: name,
              username: username,
            })
          )
        }
      >
        Add User
      </button>
    </div>
  );
}

export default AddNewUser;
