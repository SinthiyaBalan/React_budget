import { useState } from 'react'
import ReceiveFrom from './components/ReceiveFrom';
import ExpenseForm from './components/ExpenseForm';


function App() {
  const [balance, setBalance] = useState(0);

  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);

  const [transactionArray, settransactionArray] = useState([])


  // function for calculating income 
   function receiveHandler(e){
    e.preventDefault();
    
    let description = e.target.des.value ;
    let receive = Number(e.target.ReceiveAmount.value)
    let rAmount = balance + receive;
    

    if(receive && description){
      
      setBalance(rAmount)

      settransactionArray(i => [...i , ` +  ${receive} € form ${description}`  ])
    }

    e.target.ReceiveAmount.value ="";
    e.target.des.value = "";
  } 


  // function for calculating expenses 
  function paymentHandler(e){
    e.preventDefault();
    
    let expen = e.target.expenseAmount.value;
    let description = e.target.des.value ;
    let eAmount = balance - e.target.expenseAmount.value;
    if(expen && description){

      setBalance(eAmount);
      settransactionArray(i => [...i , ` -  ${expen} € for ${description}`  ])
    }
   
    e.target.expenseAmount.value = "";
    e.target.des.value = "";
  }

  return (
    <>
    <div className='balance'>
      <p>Balance</p>
      <div className='bCircle'>
      <h2 className='bAmount'>{balance} €</h2>
      </div>
      
      </div>
    <div className='formCointainer'>

      <ReceiveFrom f={receiveHandler} />


      <ExpenseForm f={paymentHandler} />
      </div>
       
       {/* updating transaction information */}
       <ul>
       {transactionArray.map( (i,j) => <li key={j}>{i}</li>)}
       </ul>
    </>
  )
}

export default App
