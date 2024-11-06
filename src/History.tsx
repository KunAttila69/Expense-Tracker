interface HistoryProps{
    itemName: string,
    value: number,
    isExpense: boolean
}

const History = ({itemName, value, isExpense}: HistoryProps) => {
  return (
    <div className={`history ${isExpense ? 'expense' : 'income'}`}>
        <p className='item'>{itemName}</p>
        <p className='value'>${value}</p>
        <p></p>
  </div>
  )
}

export default History