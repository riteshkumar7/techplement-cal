import React, { useState } from 'react';
import "./allfile.css";
import { FormField, Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const SimpleInterest = () => {

    const navigate = useNavigate();
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [totalAmount, setTotalAmount] = useState(null);
    const [result, setResult] = useState(null);
    const [rateUnit, setRateUnit] = useState('Per Year');
    const [timeUnit, setTimeUnit] = useState('Year');
    const calculateInterest = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate);
        const t = parseFloat(time);

        if (isNaN(p) || isNaN(r) || isNaN(t)) {
            alert('Please enter valid numbers for Principal, Rate, and Time.');
            return;
        }
        let adjustedRate = r;
        if (rateUnit === 'Per Month') {
            adjustedRate /= 12;
        }
    
        let adjustedTime = t;
        if (timeUnit === 'Month') {
            adjustedTime /= 12;
        }
        const simpleInterest = (p * adjustedRate * adjustedTime) / 100;
        setResult(simpleInterest);

        const total = p + simpleInterest;
        setTotalAmount(total);

        setShowResult(true);
    };

    const unitConversion=()=>{
        navigate("/unit");
    }

    return (
        <div style={{backgroundColor:'whitesmoke',height:'646px'}}>
            <nav className='SI-nav'>
                <p style={{margin:'0 0 0 450px'}}>Simple-Interest Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div className='SI'>
                <Form className='forms'>
                    <FormField>
                        <label>Principal</label>
                        <input
                            placeholder='Principal'
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Rate %</label>
                        <div style={{ display: "flex" }}>
                            <input
                                placeholder='Rate %'
                                style={{ width: "300px" }}
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                            />
                            <select style={{ width: "150px", marginLeft: '15px' }}
                            value={rateUnit}
                            onChange={(e) => setRateUnit(e.target.value)}
                            >
                                <option value="Per Year">Per Year</option>
                                <option value="Per Month">Per Month</option>
                            </select>
                        </div>
                    </FormField>
                    <FormField>
                        <label>Time</label>
                        <div style={{ display: "flex" }}>
                            <input
                                placeholder='Year/Month'
                                style={{ width: "300px" }}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <select style={{ width: "150px", marginLeft: '15px' }}
                              value={timeUnit}
                              onChange={(e) => setTimeUnit(e.target.value)}
                            >
                                <option value="Year">Year</option>
                                <option value="Month">Month</option>
                            </select>
                        </div>
                    </FormField>
                    <Button type='button' onClick={calculateInterest} style={{ marginLeft: '130px', marginTop: '25px' }}>SICalculate</Button>
                </Form>
                {showResult && (
                    <div className='result'>
                        <nav className='nav-para'>
                            <p>Result</p>
                        </nav>
                        <div className='showResult'>{result !== null && `Simpl-Interest:${principal} * ${rate} * ${time} / ${100} =${result.toFixed(2)}`}</div>
                        <div className='showResult'>{totalAmount !== null && `Total Amount:${principal} + ${result.toFixed(2)} = ${totalAmount.toFixed(2)}`}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleInterest;
