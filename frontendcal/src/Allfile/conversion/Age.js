import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const Age = () => {
    const [showResults, setShowResults] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [ageResult, setAgeResult] = useState(null);

    const handleSubmit = () => {
        const birth = new Date(birthDate);
        const current = new Date(currentDate);

        const diff = current - birth;
        const ageDate = new Date(diff);
        const years = Math.abs(ageDate.getUTCFullYear() - 1970);
        const months = Math.abs(ageDate.getUTCMonth());
        const days = Math.abs(ageDate.getUTCDate() - 1);

        setAgeResult({ years, months, days });
        setShowResults(true);
    };

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className="age">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Age Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`age-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Date of Birth</label>
                        <input
                            placeholder='Date of Birth'
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Age at the Date of</label>
                        <input
                            placeholder='Age at the Date of'
                            type="date"
                            value={currentDate}
                            onChange={(e) => setCurrentDate(e.target.value)}
                        />
                    </FormField>
                    <Button type='submit' style={{ marginLeft: '110px' }}>Age Calculate</Button>
                    {showResults && ageResult && (
                        <div className="age-result">
                            <p>{ageResult.years} Years {ageResult.months} Months {ageResult.days} Days</p>
                            <p>or {ageResult.months} Months {ageResult.days} Days</p>
                            <p>or {Math.floor(ageResult.days / 7)} Weeks {ageResult.days % 7} Days</p>
                            <p>or {ageResult.days} Days</p>
                            <p>or {ageResult.days * 24} Hours</p>
                            <p>or {ageResult.days * 24 * 60} Minutes</p>
                            <p>or {ageResult.days * 24 * 60 * 60} Seconds</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Age;
