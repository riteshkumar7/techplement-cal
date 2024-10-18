import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./algebra.css"
import { useNavigate } from 'react-router-dom';

const Impulse=()=>{


    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [force, setForce] = useState('');
    const [forceUnits, setForceUnits] = useState('dyn');
    const [time, setTime] = useState('');
    const [timeUnits, setTimeUnits] = useState('sec');
    const [impulseUnits, setImpulseUnits] = useState('dyn-sec');
    const [impulseResult, setImpulseResult] = useState(null);

    const handleSubmit = () => {

        let forceValue = parseFloat(force);
        let timeValue = parseFloat(time);

        switch (forceUnits) {
            case 'dyn':
                break;
            case 'kgf':
                forceValue *= 9.80665;
                break;
            case 'N':
                break;
            case 'kN':
                forceValue *= 1000; 
                break;
            case 'kip':
                forceValue *= 4448.22162;
                break;
                case 'ozf':
                    forceValue *= 0.27801385;
                    break;
                    case 'pdl':
                        forceValue *= 0.138255;
                        break;
            default:
                break;
        }

        switch (timeUnits) {
            case 'sec':
                break;
            case 'min':
                timeValue *= 60;
                break;
            case 'hr':
                timeValue *= 3600;
                break;
            default:
                break;
        }

        let impulseValue = forceValue * timeValue;
        setImpulseResult(impulseValue);
        setShowResults(true);
    };


    return(
        <div className="impulse">
        <nav className="math-nav">
            <p style={{margin:'0 0 0 450px'}}>Impulse Calculator</p>
            <button className='nav-button' style={{margin:'20px 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
        </nav>
        <div>
        <Form className={`impulse-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
            
        <div style={{display:'flex',gap:'10px'}}>
                    <FormField>
                        <label>Force(f)</label>
                        <input
                            placeholder="Force(f)"
                            style={{width:'265px'}}
                            value={force}
                            onChange={(e) => setForce(e.target.value)}
                        />
                    </FormField>
                    <FormField style={{marginTop:'25px'}}>
                        <select value={forceUnits} onChange={(e) => setForceUnits(e.target.value)}>
                            <option>dyn</option>
                            <option>kgf</option>
                            <option>N</option>
                            <option>kN</option>
                            <option>kip</option>
                            <option>ibf</option>
                            <option>ozf</option>
                            <option>pdl</option>
                        </select>
                    </FormField>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                    <FormField>
                        <label>Time(t)</label>
                        <input
                            placeholder="Time(t)"
                            style={{width:'265px'}}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </FormField>
                    <FormField style={{marginTop:'25px'}}>
                        <select value={timeUnits} onChange={(e) => setTimeUnits(e.target.value)}>
                            <option>sec</option>
                            <option>min</option>
                            <option>hr</option>
                        </select>
                    </FormField>
                    </div>
                    <FormField>
                    <label>Impulse Units</label>
                        <select  value={impulseUnits} onChange={(e) => setImpulseUnits(e.target.value)}>
                            <option>dyn-sec</option>
                            <option>dyn-min</option>
                            <option>dyn-hr</option>
                            <option>N-sec</option>
                            <option>N-min</option>
                            <option>N-hr</option>
                            <option>mN-sec</option>
                            <option>mN-min</option>
                            <option>kN-sec</option>
                            <option>kN-min</option>
                        </select>
                    </FormField>
                    <Button type="submit" style={{ border: '1px dotted black', marginLeft: '80px' }}>
                        Impulse Calculate
                    </Button>
                    {showResults && (
                        <div className="impulse-result">
                             <p>Impulse: {impulseResult} {impulseUnits}</p>
                        </div>
                    )}
                </Form>
        </div>
    </div>
    )
}
export default Impulse;