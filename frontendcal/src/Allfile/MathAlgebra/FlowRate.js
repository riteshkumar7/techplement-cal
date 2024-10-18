import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './algebra.css';
import { useNavigate } from 'react-router-dom';

const FlowRate = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [boreDiameter, setBoreDiameter] = useState('');
    const [length, setLength] = useState('');
    const [pressure, setPressure] = useState('');
    const [flowRateValue, setFlowRate] = useState(''); 

    const handleSubmit = () => {
        const boreDiameterValue = parseFloat(boreDiameter);
        const lengthValue = parseFloat(length);
        const pressureValue = parseFloat(pressure);
    
        console.log('Inputs:', boreDiameterValue, lengthValue, pressureValue);
    
        if (isNaN(boreDiameterValue) || isNaN(lengthValue) || isNaN(pressureValue)) {
            console.error('Invalid input values');
            return; 
        }
    
        const flowRateValue = (0.25 * Math.PI * (boreDiameter * boreDiameter) * pressureValue)/  (4 * lengthValue);
        console.log('Flow Rate Value:', flowRateValue);
    
        setFlowRate(flowRateValue);
        setShowResults(true);
    };
    
    
    return (
        <div className="flowrate">
            <nav className="math-nav">
                <p style={{margin:'0 0 0 450px'}}>Flowrate Calculator</p>
                <button className='nav-button' style={{margin:'20px 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`flowrate-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Bore Diameter (mm)</label>
                        <input
                            type="number"
                            placeholder="Bore Diameter (mm)"
                            value={boreDiameter}
                            onChange={(e) => setBoreDiameter(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Pressure (Bar)</label>
                        <input
                            type="number"
                            placeholder="Pressure (Bar)"
                            value={pressure}
                            onChange={(e) => setPressure(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Length (Metres)</label>
                        <input
                            type="number"
                            placeholder="Length (Metres)"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </FormField>
                    <Button type="submit" style={{ border: '1px dotted black', marginLeft: '80px' }}>
                        Flow Rate Calculate
                    </Button>
                    {showResults && (
                        <div className="flowrate-result">
                            <p>Flow Rate: {flowRateValue} m³/s</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default FlowRate;
