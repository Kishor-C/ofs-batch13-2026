function UserRegistration() {
  let handleClick = () => {
    alert("you clicked on button2");
  };
  return (
    <div className="container-fluid">
      <h1>User Registration Form</h1>
      <form>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => alert("you clicked on button1")}
        >
          Button1
        </button>
        <br /> <br />
        <button className="btn btn-lg btn-primary" onClick={handleClick}>
          Button2
        </button>
        <br />
      </form>
    </div>
  );
}
export default UserRegistration;
