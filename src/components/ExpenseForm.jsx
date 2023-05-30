import React from 'react'

// expense form
function ExpenseForm({totalExpense,f}) {
  return (
    <form className='formWrapper' onSubmit={f}>
        <h3 className='expenseTotal'>Expense : {totalExpense}</h3>
        <label>Expense amount :
        <input type="number" id = "amount" name="expenseAmount" placeholder='Type amount here'/></label>
       
        <label>Description :
        <input type="text" id = "des" name="des" placeholder='Type description'/></label>
        
        <button type="submit" className='btn red'>Pay</button>
    </form>

  )
}

export default ExpenseForm