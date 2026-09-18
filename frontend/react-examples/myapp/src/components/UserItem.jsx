import axios from "axios";
import { useState } from "react";

function UserItem() {
  let [id, setId] = useState(undefined);
  let [user, setUser] = useState(undefined);
  let [err, setErr] = useState(undefined);
  // here you may need to show user or error
  let handleUser = (event) => {
    let URL = ` http://localhost:8080/user/${id}`;
    axios
      .get(URL)
      .then((response) => {
        setUser(response.data);
        setErr(undefined);
      })
      .catch((error) => {
        setErr(error.response.data.message); //{message:"error message"}
        setUser(undefined);
      });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} /> <br />
      <button onClick={handleUser}>Search</button>
      <h3 className="text-success">{JSON.stringify(user)}</h3>
      <h3 className="text-danger">{err}</h3>
    </div>
  );
}
export default UserItem;
