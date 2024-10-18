import React,{useState} from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
const Investment=()=>{
    const [showResult, setShowResult] = useState(false);
    const [amount,setAmount] = useState();
    const [year,setYear] = useState();
    const [returnrate,setReturnrate] = useState();
    const [contribution,setContribution] = useState();
    const [target,setTarget] = useState();
    const [compound,setCompound] = useState();

    const Investment=()=>{
        const totalcontribute = amount * 12;
          setContribution(totalcontribute)  
        setShowResult(true);
    }
    return(
        <div style={{backgroundColor:'whitesmoke',height:'646px'}}>
            <nav className='SI-nav'>
                <p>Investment Calculator</p>
            </nav>
            <div style={{display:'flex'}}>
            <Form className='investment'>
    <FormField>
      <label>Starting amount</label>
      <input placeholder='Starting amount' 
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Investment Year</label>
      <input placeholder='Investment Year' 
        value={year}
        onChange={(e)=>setYear(e.target.value)}
      />
    </FormField>
    <FormField>
    <label>Return Rate %</label>
      <input placeholder='Return Rate %' 
        value={returnrate}
        onChange={(e)=>setReturnrate(e.target.value)}
      />
    </FormField>
    <FormField>
    <label>Additional Contribution</label>
      <input placeholder='Additional Contribution' 
      value={contribution}
      onChange={(e)=>setContribution(e.target.value)}
      />
    </FormField>
    <div style={{display:'flex',gap:'10px'}}>
    <FormField>
    <label>Target Amount</label>
    <input placeholder='Target Amount' style={{width:'210px'}}
     value={target}
     onChange={(e)=>setTarget(e.target.value)}
    />
    </FormField>
    <FormField>
    <label>Compound</label>
    <select style={{width:'215px'}}
     value={compound}
     onChange={(e)=>setCompound(e.target.value)}
    >
        <option value="annually">Annually</option>
        <option value="quarterly">Quarterly</option>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="daily">Daily</option>
    </select>
    </FormField>
    </div>
    <Button type='submit' onClick={Investment} style={{marginLeft:'120px'}}>Investment Calculate</Button>
  </Form>
  {showResult && (
  <div className='invest-result'>
        <p>Starting Amount:- {amount}</p>
        <p>Total Contribution:- {contribution}</p>
        <p>Total Interest:- </p>
        <p>You will need to contribute {2.35} at the end of each month to reach the target of {5000}</p>
        <p>You will need an annual return rate of {-44.120} percent to reach the target of {20000.00}</p>
        <p>You will need to invest {-35881.37} at the beginning to reach the target of {20000.00}</p>
        <p>You will need to invest {1.528} years to reach the target of {20000.00}</p>
    </div>
  )}
            </div>
        </div>
    )
}
export default Investment;