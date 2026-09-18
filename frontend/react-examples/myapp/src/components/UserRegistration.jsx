import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
  // create states for name & phone
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");
  // programmatic navigation - if you register we need to navigate to user list
  let nav = useNavigate();
  let handleClick = (event) => {
    event.preventDefault(); // prevents reloading
    let URL = "http://localhost:8080/user";
    // in JS {name, phone} becomes {"name":name, "phone":phone}
    axios
      .post(URL, { name, phone })
      .then((response) => {
        setMessage(response.data);
        nav("/list"); // use /list so that its not part /regsiter
      })
      .catch((err) => alert("Error occured"));
  };
  return (
    <div className="container-fluid">
      <h1>User Registration Form</h1>
      <h3 className="text-success">{JSON.stringify(message)}</h3>
      <form onSubmit={handleClick}>
        <div>
          <label>Enter name</label>
          <input
            type="text"
            name="user"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Enter phone</label>
          <input
            type="number"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
export default UserRegistration;
