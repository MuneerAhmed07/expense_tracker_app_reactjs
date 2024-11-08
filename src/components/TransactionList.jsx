

const TransactionList = ({transaction, deleteTransaction}) => {
  return (
    <>
      <div className="transaction_container">
        <h3>Transaction History</h3>
        {
            transaction.length === 0 ? (
                <p className="not-found">History Not Found</p>
            ) : (
                <ul className="list">
                    {
                        transaction.map((transaction) => (
                            <li key={transaction.id} className="list-item">
                                {transaction.description} <span>{transaction.amount}</span>
                                <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
      </div>
    </>
  )
}

export default TransactionList;
