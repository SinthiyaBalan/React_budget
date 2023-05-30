import React from 'react'


// income form
function ReceiveFrom({f}) {
  return (
    <form onSubmit={f}>
        <label>Receive amount :</label>
        <input type="number" id = "amount" name="ReceiveAmount" placeholder='Type amount here'/>
        <br />
        <br />
        <label>Description :</label>
        <input type="text" id = "des" name="des" placeholder='Type description'/>
        <br />
        <br />
        <button type="submit" className='btn green'>Receive</button>
       
        </form>
  )
}

export default ReceiveFrom