import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const Date = () => {
    const [showResults, setShowResults] = useState(false);
    const [dateResult, setDateResult] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {

        const diffTime = new window.Date(endDate) - new window.Date(startDate);
        const diffDate = new window.Date(diffTime);

        const years = diffDate.getUTCFullYear() - 1970;
        const months = diffDate.getUTCMonth();
        const days = diffDate.getUTCDate() - 1;

        setDateResult({years,months, days});
        setShowResults(true);
    };
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }
    return (
        <div className="date">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Date Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`date-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Start Date</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </FormField>
                    <FormField>
                        <label>End Date</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </FormField>
                    <Button type="submit" style={{marginLeft:'100px'}}>Date Calpxculate</Button>
                    {showResults && dateResult && (
                        <div className="date-result">
                            <p>{dateResult.years} Years or {dateResult.months} Months</p>
                            <p>{dateResult.days} Days or {Math.floor(dateResult.days / 7)} Weeks</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Date;
