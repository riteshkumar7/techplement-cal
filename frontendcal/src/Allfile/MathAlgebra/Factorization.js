import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './algebra.css';
import { useNavigate } from 'react-router-dom';

const Factorization = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [factorization, setFactorisation] = useState('');
    const [factors, setFactors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (factorization.trim() === '') {
            alert('Please enter a number for factorization.');
            return;
        }

        const numberToFactorize = parseInt(factorization);
        if (isNaN(numberToFactorize) || numberToFactorize <= 0) {
            alert('Please enter a valid positive number for factorization.');
            return;
        }

        const calculatedFactors = calculateFactors(numberToFactorize);
        setFactors(calculatedFactors);
        setShowResults(true);
    };

    const calculateFactors = (number) => {
        const factorsArr = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                factorsArr.push(i);
            }
        }
        return factorsArr;
    };

    return (
        <div className="factorization">
            <nav className="math-nav">
                <p style={{margin:'0 0 0 450px'}}>Factorization Calculator</p>
                <button className='nav-button' style={{margin:'20px 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`factorization-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Factorisation Number</label>
                        <input
                            placeholder="Factorisation Number"
                            value={factorization}
                            onChange={(e) => setFactorisation(e.target.value)}
                        />
                    </FormField>
                    <Button type="submit" style={{ border: '1px dotted black', marginLeft: '80px' }}>
                        Factorize
                    </Button>
                    {showResults && (
                        <div className="factorization-result">
                            <p>Factors of {factorization}: {factors.join(', ')}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Factorization;
