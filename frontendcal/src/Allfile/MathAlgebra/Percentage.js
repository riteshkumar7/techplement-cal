import React,{useState} from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import "./algebra.css"
import { useNavigate } from 'react-router-dom';

const Percentage=()=>{
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 

    const [showResults, setShowResults] = useState(false);
    const [percentage, setPercentage] = useState('');
    const [value, setValue] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit=()=>{
        if (!isNaN(parseFloat(percentage)) && !isNaN(parseFloat(value))) {
            const percentageValue = parseFloat(percentage);
            const valueValue = parseFloat(value);
            const calculatedResult = (percentageValue / 100) * valueValue;
            setResult(calculatedResult);
            setShowResults(true);
        } else {
            alert('Please enter valid numbers for Percentage and Value.');
        }
    }

    return(
        <div className="percentage">
            <nav className="math-nav">
                <p style={{margin:'0 0 0 450px'}}>Percentage Calculator</p>
                <button className='nav-button' style={{margin:'20px 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
            <Form className={`percentage-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                <div style={{display:'flex',gap:'15px'}}>
    <FormField>
      <label>Percentage %</label>
      <input placeholder='Percentage %' 
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
    </FormField>
    <p style={{fontSize:'18px',marginTop:'30px'}}>Of</p>
    <FormField>
      <label>Value</label>
      <input placeholder='Value' 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormField>
    </div>
    <Button type='submit' style={{border:'1px dotted black',marginLeft:'80px'}}>Percentage Calculate</Button>
    {showResults && (
                        <div className="percentage-result">
                            <p>Result: {result}</p>
                        </div>
                    )}
  </Form>
            </div>
        </div>
    )
}
export default Percentage;