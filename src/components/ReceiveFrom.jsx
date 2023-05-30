import React from 'react'

// income form
function ReceiveFrom({totalIncome,f}) {
  return (
    <form className='formWrapper' onSubmit={f}>
        <h3 className='incomeTotal'>Income : {totalIncome}</h3>
        <label>Receive amount :
        <input type="number" id = "amount" name="ReceiveAmount" placeholder='Type amount here'/></label>
    
        <label>Description :
        <input type="text" id = "des" name="des" placeholder='Type description'/></label>
       
        <button type="submit" className='btn green'>Receive</button>
        </form>
  )
}

export default ReceiveFrom