import { useSelector } from "react-redux";
import UserCards from "./components/UserCards";
import AddNewUser from "./components/AddNewUser";

function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AddNewUser/>
      {userList.map((user, key) => {
        return (
          <UserCards
            key={key}
            id={user.id}
            name={user.name}
            username={user.username}
          />
        );
      })}
    </div>
  );
}

export default App;
