function deposit(amount) {
  return {
    type: "deposit",
    payload: amount
  };
}

function withdraw(amount) {
  return {
    type: "withdraw",
    payload: amount
  };
}

export { deposit, withdraw };
