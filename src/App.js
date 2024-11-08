import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import './App.css';
import { useState } from 'react';

function App() {

  const [transactions, setTransaction] = useState([]);

  // Calculate Total Expense
  const totalExpense = transactions.reduce((total, transaction) => total + transaction.amount, 0)

  // Add transaction
  const addTransaction = (transaction) => {
    setTransaction([...transactions, transaction]);
  }

  // delete function
  const deleteTransaction = (id) => {
    setTransaction(transactions.filter((item) => item.id !== id));
  }

  console.log(transactions);

  return (
    <div className="App">
      <div className="main_container">
        <h1>Expense Tracker App</h1>
        <AddTransaction addTransaction={addTransaction} />
        <h3 className='total_expense'>Total Expense: ${totalExpense.toFixed(2)}</h3>
        <TransactionList transaction={transactions} deleteTransaction={deleteTransaction} />
      </div>
    </div>
  );
}

export default App;
