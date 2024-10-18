import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Sphere = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [Dradius, setRadius] = useState('');
    const [diameter, setDiameter] = useState('');
    const [Surfaceradius, setSurface] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [inputType, setInputType] = useState('radius');

    const handleSubmit = () => {
        calculate();
        setShowResults(true);
    };

    const calculate = () => {
        if (inputType === 'radius') {
            const d = parseFloat(diameter);
            if (!isNaN(d)) {
                setRadius((d / 2).toFixed(2));
            }
        } else if (inputType === 'diameter') {
            const r = parseFloat(Dradius);
            if (!isNaN(r)) {
                setDiameter((2 * r).toFixed(2));
            }
        } else if (inputType === 'surface') {
            const r = parseFloat(Surfaceradius);
            if (!isNaN(r)) {
                setSurface((4 * Math.PI * r * r).toFixed(2)); 
            }
        }
    };
   
    return (
        <div className="sphere">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Sphere Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`sphere-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormGroup inline>
                        <label>Input Type:</label>
                        <FormRadio
                            label='Radius'
                            name='inputType'
                            value='radius'
                            checked={inputType === 'radius'}
                            onChange={() => setInputType('radius')}
                        />
                        <FormRadio
                            label='Diameter'
                            name='inputType'
                            value='diameter'
                            checked={inputType === 'diameter'}
                            onChange={() => setInputType('diameter')}
                            style={{ marginLeft: '20px' }}
                        />
                        <FormRadio
                            label='Surface Area'
                            name='inputType'
                            value='surface'
                            checked={inputType === 'surface'}
                            onChange={() => setInputType('surface')}
                            style={{ marginLeft: '20px' }}
                        />
                    </FormGroup>
                    {inputType === 'radius' && (
                        <FormField>
                            <label>Diameter (D)</label>
                            <input placeholder='Diameter' value={diameter} onChange={(e) => setDiameter(e.target.value)} />
                        </FormField>
                    )}
                    {inputType === 'diameter' && (
                        <FormField>
                            <label>Radius (R)</label>
                            <input placeholder='Radius' value={Dradius} onChange={(e) => setRadius(e.target.value)} />
                        </FormField>
                    )}
                    {inputType === 'surface' && (
                        <FormField>
                            <label>Radius (R)</label>
                            <input placeholder='Radius' value={Surfaceradius} onChange={(e) => setSurface(e.target.value)} />
                        </FormField>
                    )}
                    <Button type='submit' style={{ marginLeft: '100px' }}>Calculate</Button>
                    {showResults && (
                        <div className="sphere-result">
                            {inputType === 'radius' && (
                                <p>Radius (R): {Dradius}</p>
                            )}
                            {inputType === 'diameter' && (
                                <p>Diameter (D): {diameter}</p>
                            )}
                            {inputType === 'surface' && (
                                <p>Surface Area (S): {Surfaceradius}</p>
                            )}
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Sphere;
