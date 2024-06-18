import React, { useState } from "react";
import "../Wallet/Wallet.css";

export default function Wallet() {
    const [wallet, setWallet] = useState(5000);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [income, setIncome] = useState('');

    function handleAddIncomeClick() {
        setIsModalOpen(true);
    }

    function handleModalClose() {
        setIsModalOpen(false);
        setIncome(''); 
    }

    function handleIncomeChange(e) {
        setIncome(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const incomeValue = parseInt(income, 10);
        if (!isNaN(incomeValue)) {
            setWallet(wallet + incomeValue);
        }
        handleModalClose();
    }

    return (
        <div className="wallet">
            <h1>Wallet Balance: <span>₹{wallet}</span></h1>
            <button onClick={handleAddIncomeClick}>+Add income</button>
            {isModalOpen && (
                <div className="Modal">
                <div className="modalBody">
                    <div className="modalHead"><h3>Add Balance</h3></div>
                    <form className="modalForm expensesForm" onSubmit={handleFormSubmit}>
                        <div className="balanceFormInputDiv">
                            <input 
                                className="formInput" 
                                placeholder="Income Amount" 
                                type="number" 
                                name="income" 
                                required 
                                value={income}
                                onChange={handleIncomeChange}
                            />
                        </div>
                        <div className="formButtons">
                            <button className="backgroundOrange" type="submit">Add Balance</button>
                            <button className="backgroundWhite" type="button" onClick={handleModalClose}>Cancel</button>
                        </div>
                    </form>
                </div>
                </div>
            )}
        </div>
       );
}
