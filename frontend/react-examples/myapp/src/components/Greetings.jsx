function Greetings({ profile }) {
  let { name, age } = profile;
  return (
    <div>
      <h2>
        Hello {name}, your age is {age}
        <p></p>
        Welcome {profile.name}, age is {profile.age}
      </h2>
    </div>
  );
}
export default Greetings;
// JSX - Javascript XML - used to write HTML
// inside JS function
