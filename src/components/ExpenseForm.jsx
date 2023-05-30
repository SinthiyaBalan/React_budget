import React from 'react'


// expense form
function ExpenseForm({f}) {
  return (
    <form onSubmit={f}>
        <label>Expense amount :</label>
        <input type="number" id = "amount" name="expenseAmount" placeholder='Type amount here'/>
        <br />
        <br />
        <label>Description :</label>
        <input type="text" id = "des" name="des" placeholder='Type description'/>
        <br />
        <br />
        <button type="submit" className='btn red'>Pay</button>
        <br />
       
        

      </form>

  )
}

export default ExpenseForm