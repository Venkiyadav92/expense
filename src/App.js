import React from 'react';
import './App.css';
import Wallet from './Components/Wallet/Wallet';
import Expense from './Components/Expense/Expense';
// import PieChart from './Components/PieChart/Piechart'; 




function App() {
  return (
    <div className="App">
      <Wallet />
      <Expense />
      {/* <PieChart /> */}
      
     
    </div>
  );
}

export default App;
