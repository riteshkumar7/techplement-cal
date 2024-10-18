import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./algebra.css"
import { useNavigate } from 'react-router-dom';

const Inequality = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = () => {
        setShowResults(true);

        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);

        if (!isNaN(num1) && !isNaN(num2)) {
            if (num1 === num2) {
                setResult('Equal');
            } else {
                setResult('Unequal');
            }
        } else {
            setResult('Invalid input');
        }
    }

    return (
        <div className="inequality">
            <nav className="math-nav">
                <p style={{margin:'0 0 0 450px'}}>Inequality Calculator</p>
                <button className='nav-button' style={{margin:'20px 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`inequality-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Value 1</label>
                        <input
                            type="number"
                            placeholder="Value 1"
                            value={value1}
                            onChange={(e) => setValue1(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Value 2</label>
                        <input
                            type="number"
                            placeholder="Value 2"
                            value={value2}
                            onChange={(e) => setValue2(e.target.value)}
                        />
                    </FormField>
                    <Button type="submit" style={{ border: '1px dotted black', marginLeft: '80px' }}>
                        Inequality Calculate
                    </Button>
                    {showResults && (
                        <div className="inequality-result">
                            <p>Result: {result}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default Inequality;
