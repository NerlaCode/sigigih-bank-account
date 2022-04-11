import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { deposit, withdraw } from "./account-slice";
import { deposit, withdraw } from "./account-actions";

function BankAccount() {
  const currentAmount = useSelector((state) => state.account.value);
  const dispatch = useDispatch();
  const [changeAmount, setChangeAmount] = useState(0);

  return (
    <div>
      <h1>Your bank account amount: {currentAmount}</h1>
      <input
        type="number"
        onChange={(e) => setChangeAmount(e.target.value)}
        value={changeAmount}
      />
      <button onClick={() => dispatch(deposit(parseInt(changeAmount, 10)))}>
        Deposit
      </button>
      <button onClick={() => dispatch(withdraw(parseInt(changeAmount, 10)))}>
        Withdraw
      </button>
    </div>
  );
}

export default BankAccount;
