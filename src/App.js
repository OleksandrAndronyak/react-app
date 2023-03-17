import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, addInterest, charge } from './balanceSlice';
import "./App.css";

function App() {
  //! Use React state to manage the input amount
  const [amount, setAmount] = React.useState(0);

  //! Use useSelector to read the current balance state from the Redux store
  const balance = useSelector((state) => state.counter.value);

  //! Use useDispatch to dispatch actions to the Redux store
  const dispatch = useDispatch();

  //! Define event handlers for the buttons that dispatch actions to the store
  const handleDeposit = (event) => {
    event.preventDefault();
    dispatch(deposit(Number(amount)));
    setAmount(0);
  };

  const handleWithdraw = (event) => {
    event.preventDefault();
    dispatch(withdraw(Number(amount)));
    setAmount(0);
  };

  const handleAddInterest = (event) => {
    event.preventDefault();
    dispatch(addInterest());
  };

  const handleCharge = (event) => {
    event.preventDefault();
    dispatch(charge());
  };

  //! Render the UI with the current balance and input box and buttons for manipulating the balance
  return (
    <div className='App'>
      <h1>Balance Slice</h1>
      <h2>
        <strong>Balance:</strong> {balance}</h2>
      
      <input 
        className='input'
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <div className='buttons'>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={handleAddInterest}>Add Interest</button>
        <button onClick={handleCharge}>Charge</button>
      </div>
    </div>
  );
}

export default App;