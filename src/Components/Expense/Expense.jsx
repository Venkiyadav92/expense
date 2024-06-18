import React, { useState } from "react";
import "../Expense/Expense.css";

export default function Expense() {
    const [expense, setExpense] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        date: 'dd/mm/yy'
    });

    function handleClick() {
        setIsModalOpen(true);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newExpense = parseFloat(formData.price);
        setExpense(expense + newExpense);
        setIsModalOpen(false);
        setFormData({
            name: '',
            price: '',
            category: '',
            date: 'dd/mm/yy'
        });
    }

    function handleCancel() {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div className="expense">
                <h1>Expenses: <span>₹{expense}</span></h1>
                <button onClick={handleClick}>+Add expense</button>
            </div>

            {isModalOpen && (
                <div className="Modal">
                    <div className="modalBody_expense">
                        <div className="modalHead_expense">Add Expenses</div>
                        <form className="modalForm_expensesForm" onSubmit={handleSubmit}>
                            <div className="formInputsDiv_expense">
                                <input
                                    required
                                    className="formInput top"
                                    placeholder="Title"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    required
                                    className="formInput top"
                                    placeholder="Price"
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                                <select
                                    required
                                    className="formInput"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >
                                    <option>Select Category</option>
                                    <option value="food">Food</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="travel">Travel</option>
                                </select>
                                <input style={{
                                    marginBottom:"80px"
                                }}
                                    required
                                    className="formInput"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formButtons_expense">
                                <button className=" backgroundOrange_expense" type="submit">Add Expense</button>
                                <button type="button" className=" backgroundWhite_expense" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}