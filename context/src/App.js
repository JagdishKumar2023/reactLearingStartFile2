import "./App.css";
import Counter from "./components/Counter";
import { UserForm } from "./components/UserForm";
import { CounterProvider } from "./useContext/CounterProvider";
import { UserProvider } from "./useContext/UserProvider";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <UserProvider>
          <Counter />
          <UserForm />
        </UserProvider>
      </CounterProvider>
    </div>
  );
}

export default App;
