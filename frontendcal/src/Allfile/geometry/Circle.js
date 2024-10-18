import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Circle = () => {

    
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [radius, setRadius] = useState('');
    const [diameter, setDiameter] = useState('');
    const [circumference, setCircumference] = useState('');
    const [area, setArea] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        calculate();
        setShowResults(true);
    };

    const calculate = () => {
        let r = parseFloat(radius);
        let d = parseFloat(diameter);

        if (!isNaN(r) && isNaN(d)) {
            setDiameter(2 * r);
            setCircumference(2 * Math.PI * r);
            setArea(Math.PI * r * r);
        } else if (!isNaN(d) && isNaN(r)) {
            setRadius(d / 2);
            setCircumference(Math.PI * d);
            setArea(Math.PI * (d / 2) * (d / 2));
        }
    };

    return (
        <div className="circle">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Circle Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`circle-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Radius (R)</label>
                            <input placeholder='Radius' value={radius} onChange={(e) => setRadius(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Diameter (D)</label>
                            <input placeholder='Diameter' value={diameter} onChange={(e) => setDiameter(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Circumference (C)</label>
                            <input placeholder='Circumference' value={circumference} readOnly style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Area (A)</label>
                            <input placeholder='Area' value={area} readOnly style={{ width: '200px' }} />
                        </FormField>
                    </div>
                    <Button type='submit' style={{ marginLeft: '100px' }}> Circle Calculate</Button>
                    {showResults && (
                        <div className="circle-result">
                            <div style={{display:'flex',gap:'40px'}}>
                                <p>Radius (R): {radius}</p>
                                <p>Diameter (D): {diameter}</p>
                            </div>
                            <p>Circumference (C): {circumference.toFixed(2)}</p>
                            <p>Area (A): {area.toFixed(2)}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Circle;
