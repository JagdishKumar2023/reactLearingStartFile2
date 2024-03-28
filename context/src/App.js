// import { FormInput } from "./FormForContent/FormInput";
// import Counter from "./components/Counter";
// import { UserForm } from "./components/UserForm";
// import { CounterProvider } from "./useContext/CounterProvider";
// import { UserProvider } from "./useContext/UserProvider";
// import { FormInput } from "./FormForContent/FormInput";

import Form from "./components/Form";
import { UseContext } from "./useContext/UseContext";

function App() {
  return (
    <div className="App">
      <UseContext>
        <Form />
      </UseContext>

      {/* <FormInput /> */}
      {/* <CounterProvider>
        <UserProvider>
          <Counter />
          <UserForm />
        </UserProvider>
      </CounterProvider> */}
    </div>
  );
}

export default App;
