import Expenses from './components/Expenses/Expenses'
import "./App.css";
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [{
  id: 'e1',
  date: new Date(2022, 8, 1),
  title: 'Car Insurance',
  amount: 294.12,
},
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}
      ></Expenses>
    </div>
  );
}

export default App;
