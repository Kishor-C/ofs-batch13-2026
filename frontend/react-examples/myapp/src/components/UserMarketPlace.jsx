import UserRegistration from "./UserRegistration";

function UserMarketPlace() {
  let multipleUsers = ["Vishnu", "Kishor", "Siddharth", "Atharv"];
  let complexUsers = [
    { id: 11, name: "Vishnu", age: 10 },
    { id: 21, name: "Kishor", age: 40 },
    { id: 31, name: "Siddharth", age: 8 },
    { id: 41, name: "Atharv", age: 3 },
  ];
  return (
    <div>
      <h1 className="text-primary text-center">
        This is a User Marketplace component
      </h1>
      <UserRegistration />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {complexUsers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ol>
        {multipleUsers.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
export default UserMarketPlace;
