import { Link, Route, Routes } from "react-router-dom";
import UserItem from "./UserItem";
import UserList from "./UserList";
import UserRegistration from "./UserRegistration";

function UserMarketPlace() {
  return (
    <div className="container-fluid">
      <h1 className="text-primary text-center">
        This is a User Marketplace component
      </h1>
      <div>
        <Link to="register">Registration</Link> &nbsp; /
        <Link to="list">User List</Link> &nbsp; /
        <Link to="search">User Search</Link> &nbsp;
      </div>
      <div>
        <Routes>
          <Route path="" element={<UserRegistration />} />
          <Route path="register" element={<UserRegistration />} />
          <Route path="list" element={<UserList />} />
          <Route path="search" element={<UserItem />} />
        </Routes>
      </div>
    </div>
  );
}
export default UserMarketPlace;
