import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/UserRedux";

function UserCards({ id, name, username }) {
  const [newUsername, setNewUsername] = React.useState("");

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #222",
        margin: "4px",
        width: "40%",
      }}
    >
      <span>{name}</span>
      <span>{username}</span>

      <div style={{ margin: "4px" }}>
        <input
          type="text"
          placeholder="New Username"
          onChange={(event) => setNewUsername(event.target.value)}
        />
        <button
          onClick={() =>
            dispatch(updateUsername({ id: id, username: newUsername }))
          }
        >
          Change Username
        </button>
        <button onClick={()=> dispatch(deleteUser({id: id}))}>Delete User</button>
      </div>
    </div>
  );
}

export default UserCards;
