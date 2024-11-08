import { useState } from "react";

const AddTransaction = ({addTransaction}) => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    // Create Method for Form Submit
    const onSumbit = (e) => {
        e.preventDefault();

        if(description && amount) {
            addTransaction(
                {
                    id: Math.random(),
                    description,
                    amount: +amount,
                }
            );
            setDescription('');
            setAmount('');
        }
    }

  return (
    <>
        <div className="form_container">
            <h3>Add New Transaction</h3>
            <form onSubmit={onSumbit}>
                <div className="form_control">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter description...' />
                </div>
                <div className="form_control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    </>
  )
}

export default AddTransaction;
