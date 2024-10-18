import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Square = () => {
    const [base, setBase] = useState('');
    const [exponent, setExponent] = useState('');
    const [result, setResult] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        calculate();
        setShowResults(true);
    };

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const calculate = () => {
        const b = parseFloat(base);
        const exp = parseFloat(exponent);

        if (!isNaN(b) && !isNaN(exp)) {
            setResult(Math.pow(b, exp));
        } else {
            setResult('');
        }
    };

    return (
        <div className="square">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Square Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`square-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                        <FormField>
                            <label>Base</label>
                            <input placeholder='Base' value={base} onChange={(e) => setBase(e.target.value)} />
                        </FormField>
                        <FormField>
                            <label>Exponent/Power(2)</label>
                            <input placeholder='Exponent/Power(2)' value={exponent} onChange={(e) => setExponent(e.target.value)} />
                        </FormField>
                    <Button type='submit' style={{ marginLeft: '100px' }}>Square Calculate</Button>
                    {showResults && (
                        <div className="square-result">
                            <p>{base}^({exponent}) = {result.toFixed(2)}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Square;
