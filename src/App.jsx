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
      
      setBalance(rAmount);
      settransactionArray(i => [...i , ` +  ${receive} € form ${description}`  ]);
      setIncome(i => {
        return i = i + receive;
      })
      
    }
    e.target.ReceiveAmount.value ="";
    e.target.des.value = "";
  } 

  // function for calculating expenses 
  function paymentHandler(e){
    e.preventDefault();
    let expen = Number(e.target.expenseAmount.value);
    let description = e.target.des.value ;
    let eAmount = balance - expen;
    
    if(expen && description){
      setBalance(eAmount);
      settransactionArray(i => [...i , ` -  ${expen} € for ${description}`  ])
      setExpense(i => {
        return i = i + expen;
      })
    }
    e.target.expenseAmount.value = "";
    e.target.des.value = "";
  }

  return (
   
  <div className='budget'>
    <div className='balance'>
      <p>Balance</p>
          <div className='bCircle'>
          <h2 className='bAmount'>{balance} €</h2>
          </div>
    </div>

    <div className='formsCointainer'>

      <ReceiveFrom totalIncome= {income}  f={receiveHandler} />
      <ExpenseForm totalExpense= {expense}f={paymentHandler} />
    </div>
       
    {/* updating transaction information */}
      <ul>Your Transaction Details : 
          {transactionArray.map( (i,j) => <li key={j}>{i}</li>)}
      </ul>

  </div>
   
  )
}

export default App
