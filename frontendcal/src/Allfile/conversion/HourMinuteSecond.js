import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const HourMinuteSecond = () => {
    const [showResults, setShowResults] = useState(false);
    const [startTimeHour, setStartTimeHour] = useState('');
    const [startTimeMinute, setStartTimeMinute] = useState('');
    const [startTimeSecond, setStartTimeSecond] = useState('');
    const [startTimePeriod, setStartTimePeriod] = useState('AM');

    const [endTimeHour, setEndTimeHour] = useState('');
    const [endTimeMinute, setEndTimeMinute] = useState('');
    const [endTimeSecond, setEndTimeSecond] = useState('');
    const [endTimePeriod, setEndTimePeriod] = useState('AM');

    const [timeDifference, setTimeDifference] = useState({
        hours: '',
        minutes: '',
        seconds: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const startHour = parseInt(startTimeHour);
        const startMinute = parseInt(startTimeMinute);
        const startSecond = parseInt(startTimeSecond);

        const endHour = parseInt(endTimeHour);
        const endMinute = parseInt(endTimeMinute);
        const endSecond = parseInt(endTimeSecond);

        let totalStartSeconds = (startHour % 12) * 3600 + startMinute * 60 + startSecond;
        if (startTimePeriod === 'PM') totalStartSeconds += 12 * 3600; 

        let totalEndSeconds = (endHour % 12) * 3600 + endMinute * 60 + endSecond;
        if (endTimePeriod === 'PM') totalEndSeconds += 12 * 3600;

        let diffSeconds = Math.abs(totalEndSeconds - totalStartSeconds);

        const hours = Math.floor(diffSeconds / 3600);
        diffSeconds %= 3600;
        const minutes = Math.floor(diffSeconds / 60);
        const seconds = diffSeconds % 60;

        setTimeDifference({ hours, minutes, seconds });
        setShowResults(true);
    };
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className='HMS'>
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Hour-Minute-Second Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`HMS-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label style={{ marginTop: '25px' }}>Start Time</label>
                        </FormField>
                        <FormField>
                            <input placeholder='Hour' style={{ marginTop: '25px' }} value={startTimeHour} onChange={(e) => setStartTimeHour(e.target.value)} />
                        </FormField>
                        <FormField>
                            <input placeholder='Minute' style={{ marginTop: '25px' }} value={startTimeMinute} onChange={(e) => setStartTimeMinute(e.target.value)} />
                        </FormField>
                        <FormField>
                            <input placeholder='Second' style={{ marginTop: '25px' }} value={startTimeSecond} onChange={(e) => setStartTimeSecond(e.target.value)} />
                        </FormField>
                        <FormField>
                            <select style={{ width: '80px', marginTop: '25px' }} value={startTimePeriod} onChange={(e) => setStartTimePeriod(e.target.value)}>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </FormField>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>End Time</label>
                        </FormField>
                        <FormField>
                            <input placeholder='Hour' value={endTimeHour} onChange={(e) => setEndTimeHour(e.target.value)} />
                        </FormField>
                        <FormField>
                            <input placeholder='Minute' value={endTimeMinute} onChange={(e) => setEndTimeMinute(e.target.value)} />
                        </FormField>
                        <FormField>
                            <input placeholder='Second' value={endTimeSecond} onChange={(e) => setEndTimeSecond(e.target.value)} />
                        </FormField>
                        <FormField>
                            <select style={{ width: '80px' }} value={endTimePeriod} onChange={(e) => setEndTimePeriod(e.target.value)}>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </FormField>
                    </div>
                    <Button type='submit' style={{ marginLeft: '150px' }}>Time Calculate</Button>
                    {showResults && (
                        <div className="HMS-result">
                            <p>{timeDifference.hours} Hours {timeDifference.minutes} Minutes {timeDifference.seconds} Seconds</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default HourMinuteSecond;
