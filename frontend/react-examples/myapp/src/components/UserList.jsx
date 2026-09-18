import axios from "axios";
import { useEffect, useState } from "react";

function UserList() {
  let [users, setUsers] = useState([]);
  // it is a hook function which automatically invokes callback when
  // the component is loaded or when the state is changed
  // useEffect can also be used for input validation
  // useEffect(callbackFn, [dependency])
  useEffect(() => {
    console.log("useEffect called");
    let URL = "http://localhost:8080/user";
    axios.get(URL).then((response) => setUsers(response.data));
  }, []); // [users]

  let handleClick = (event) => {
    let URL = "http://localhost:8080/user";
    axios.get(URL).then((response) => setUsers(response.data));
  };
  return (
    <div>
      <h2>Users List:</h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Fetch Users
      </button>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}
export default UserList;
