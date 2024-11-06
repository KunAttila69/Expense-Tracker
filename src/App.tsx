import './App.css'
import History from './History'

function App() {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className='large-text'>Expense Tracker</h2>
        <div className='balance-container'>
          <h5>YOUR BALANCE</h5>
          <h2>$270.00</h2>
        </div>
        <div className='change-container'> 
          <div className='income-container'>
            <h5>INCOME</h5>
            <p>+300.00</p>
          </div>
          <div className='expense-container'>
            <h5>EXPENSE</h5>
            <p>-30.00</p>
          </div>
        </div>
        <div className='history-container'>
          <h4>History</h4>
          <div className='histories'>
            <History itemName='Flower' value={20} isExpense={true}/>
            <History itemName='Salary' value={300} isExpense={false}/>
            <History itemName='Salary' value={300} isExpense={false}/>
            <History itemName='Book' value={10} isExpense={true}/>
          </div>
        </div>
        <div className='new-container'>
          <h4>Add new Transaction</h4>
          <form className='new-form'>
            <label>Text</label>
            <input type="text" placeholder='Enter text...'/>
            <label>Amount</label>
            <input type="number" value={0}/>
            <button className='btn-add'>Add Transaction</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
