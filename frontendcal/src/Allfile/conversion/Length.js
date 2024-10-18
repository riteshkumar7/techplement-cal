import React, { useState } from 'react';
import { FormField, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const Length = () => {
    const [showResults, setShowResults] = useState(false);
    const [length1, setLength1] = useState('');
    const [unit1, setUnit1] = useState('meter');
    const [length2, setLength2] = useState('');
    const [unit2, setUnit2] = useState('meter');

    const units = ['meter', 'centimeter', 'millimeter', 'inch', 'foot', 'yard', 'mile', 'kilogram', 'liter'];

    const unitToMeter = {
        meter: 1,
        centimeter: 0.01,
        millimeter: 0.001,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144, 
        mile: 1609.34, 
        kilogram: 1000, 
        liter: 1000, 
    };

    const handleUnitChange = (unit, value, setter) => {
        const valueInMeters = parseFloat(value) * unitToMeter[unit];
        setter(value);
        const convertedValue = (valueInMeters / unitToMeter[unit2]).toFixed(2);
        setLength2(convertedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    };

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className="length">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Length Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`length-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <FormField>
                                <select
                                    value={unit1}
                                    onChange={(e) => {
                                        setUnit1(e.target.value);
                                        handleUnitChange(e.target.value, length1, setLength1);
                                    }}
                                >
                                    {units.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </FormField>
                            <FormField>
                                <input
                                    placeholder="Length"
                                    style={{ width: '225px' }}
                                    value={length1}
                                    onChange={(e) => handleUnitChange(unit1, e.target.value, setLength1)}
                                />
                            </FormField>
                        </div>
                        <div>
                            <FormField>
                                <select
                                    value={unit2}
                                    onChange={(e) => {
                                        setUnit2(e.target.value);
                                        const convertedValue = (parseFloat(length1) * unitToMeter[unit1] / unitToMeter[unit2]).toFixed(2);
                                        setLength2(convertedValue);
                                    }}
                                >
                                    {units.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </FormField>
                            <FormField>
                                <input
                                    placeholder="Converted Length"
                                    style={{ width: '225px' }}
                                    value={length2}
                                    readOnly
                                />
                            </FormField>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Length;
