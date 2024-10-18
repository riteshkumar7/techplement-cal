import React,{useState} from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./allfile.css"
const Retirement=()=>{
    const [showResults, setShowResults] = useState(false);
    const [currentAge, setCurrentAge] = useState('');
  const [expectedRetirementAge, setExpectedRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [annualDeposit, setAnnualDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState('');
  const [requiredSavingPerYear, setRequiredSavingPerYear] = useState('');
  const [totalSaving, setTotalSaving] = useState('');
    

  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}
    const handleRetire=(e)=>{
      
      e.preventDefault();
      const yearsToRetirement = parseInt(expectedRetirementAge) - parseInt(currentAge);
      setYearsUntilRetirement(yearsToRetirement);
  
      const totalDeposit = parseFloat(currentSavings) + (parseFloat(annualDeposit) * yearsToRetirement);
      const annualInterest = parseFloat(interestRate) / 100;
      const totalSavings = totalDeposit * (1 + annualInterest * yearsToRetirement);
      setTotalSaving(totalSavings.toFixed(2));
  
      const requiredSavings = totalSavings / yearsToRetirement;
      setRequiredSavingPerYear(requiredSavings.toFixed(2));

        setShowResults(true);
    }

    return(
        <div style={{backgroundColor:'whitesmoke',height:'646px'}}>
             <nav className='SI-nav'>
                <p style={{margin:'0 0 0 450px'}}>Retirement Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
                </nav>
                <div>
                <Form className={`retirement ${showResults ? 'expanded' : ''}`}>
    <FormField>
      <label>Current Age</label>
      <input placeholder='Current Age' 
       value={currentAge}
       onChange={(e) => setCurrentAge(e.target.value)}
      />
    </FormField>
    <div style={{display:'flex', gap:'10px'}}>
    <FormField>
      <label>Expected Retirement Age</label>
      <input placeholder='Expected Retirement Age' style={{width:'225px'}}
       value={expectedRetirementAge}
       onChange={(e) => setExpectedRetirementAge(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Current Savings</label>
      <input placeholder='Current Savings' style={{width:'225px'}}
       value={currentSavings}
       onChange={(e) => setCurrentSavings(e.target.value)}
      />
    </FormField>
    </div>
    <div style={{display:'flex', gap:'10px'}}>
    <FormField>
      <label>Annual Deposit(Savings)</label>
      <input placeholder='Annual Deposit(Savings)' style={{width:'225px'}}
      value={annualDeposit}
      onChange={(e) => setAnnualDeposit(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Interest Rate(Deposite)</label>
      <input placeholder='Interest Rate(deposite)' style={{width:'225px'}}
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
      />
    </FormField>
    </div>
    <Button type='submit' onClick={handleRetire} style={{marginLeft:'130px'}}>Retirement Calculator</Button>
    {showResults && (
    <div className='retire-result'>
            <p>Years until retirement:- {yearsUntilRetirement}</p>
              <p>Required saving per year:- {requiredSavingPerYear}</p>
              <p>Total Saving:- {totalSaving}</p>
    </div>
     )}
  </Form>
                </div>
        </div>
    )
}
export default Retirement;