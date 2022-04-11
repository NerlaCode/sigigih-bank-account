import { Provider } from "react-redux";
import store from "./store";
import BankAccount from "./bank-account";

export default function App() {
  return (
    <Provider store={store}>
      <BankAccount />
    </Provider>
  );
}
