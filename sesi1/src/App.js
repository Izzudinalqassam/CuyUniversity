import "./App.css";
import Introduction from "./components/introduction";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <Profile />
      <Introduction name="Izzudin alqassam" />
      <Introduction name="Junaidi Karo" />
    </>
  );
}

export default App;
