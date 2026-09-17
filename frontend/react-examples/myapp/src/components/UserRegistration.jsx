import { useState } from "react";

function UserRegistration() {
  // create states for name & phone
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let handleClick = (event) => {
    event.preventDefault(); // prevents reloading
    alert(`Name=${name}, Phone=${phone} must be sent to backend`);
  };

  return (
    <div className="container-fluid">
      <h1>User Registration Form</h1>
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
