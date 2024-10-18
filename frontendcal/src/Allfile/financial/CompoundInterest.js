import React, { useState } from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./allfile.css"
const Compound=()=>{
const [showCIresult,setShowCIresult]=useState(false);
const [principal, setPrincipal] = useState('');
const [rate, setRate] = useState('');
const [time, setTime] = useState('');
const [compoundInterest, setCompoundInterest] = useState(0);
    
const navigate = useNavigate();

    const calculateCompound = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(time);

        const amount = p * Math.pow(1 + r, t); 
        const ci = amount - p;
        
        setCompoundInterest(ci);
        setShowCIresult(true);
    };
    const unitConversion=()=>{
      navigate("/unit");
  }
    return(
        <div style={{backgroundColor:'whitesmoke',height:'646px'}}>
             <nav className='SI-nav'>
                <p style={{margin:'0 0 0 450px'}}>Compound-Interest Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div style={{display:'flex'}}>
            <Form className='compound'>
    <FormField>
      <label>Principal</label>
      <input placeholder='Principal' 
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Rate %</label>
      <div style={{display:'flex'}}>
      <input placeholder='Rate %' style={{width:"300px"}}
       value={rate}
       onChange={(e) => setRate(e.target.value)}
      />
      <select style={{ width: "150px", marginLeft: '15px' }}>
        <option>Year</option>
        <option>Month</option>
      </select>
      </div>
    </FormField>
    <FormField>
      <label>Time</label>
      <div style={{display:'flex'}}>
      <input placeholder='Time' style={{width:"300px"}}
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <select style={{ width: "150px", marginLeft: '15px' }}>
        <option>Year</option>
        <option>Month</option>
      </select>
      </div>
    </FormField>
    <Button type='button' onClick={calculateCompound} style={{marginLeft:'120px'}}>CI Calculate</Button>
  </Form>
  {showCIresult && (
                    <div className='result'>
                        <nav className='nav-para'>
                            <p>Result</p>
                        </nav>
                        <p>Compound Interest:{compoundInterest.toFixed(2)}</p>
                    </div>
                )}
            </div>

        </div>
    )
}
export default Compound;