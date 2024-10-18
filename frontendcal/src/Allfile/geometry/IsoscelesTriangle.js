import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./geometry.css";
import { useNavigate } from 'react-router-dom';

const IsoscelesTriangle = () => {
    const [showResults, setShowResults] = useState(false);
    const [base, setBase] = useState('');
    const [side, setSide] = useState('');
    const [height, setHeight] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [perimeter, setPerimeter] = useState('');
    const [area, setArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let resultArea = '';
        let resultPerimeter = '';
        let resultHeight = '';
        let resultBase = '';
        let resultSide = '';

        const baseValue = parseFloat(base);
        const sideValue = parseFloat(side);
        const heightValue = parseFloat(height);

        if (selectedOption === 'Area') {
            resultArea = 0.5 * baseValue * heightValue;
            setArea(resultArea);
            setPerimeter(''); 
        } else if (selectedOption === 'Perimeter') {
            resultPerimeter = baseValue + 2 * sideValue;
            setPerimeter(resultPerimeter);
            setArea(''); 
        } else if (selectedOption === 'Height') {
            resultHeight = 2 * Math.sqrt(sideValue**2 - (baseValue/2)**2);
            setHeight(resultHeight);
            setBase('');
            setSide('');
        } else if (selectedOption === 'Base') {
            resultBase = Math.sqrt(4 * sideValue**2 - heightValue**2);
            setBase(resultBase);
            setHeight('');
            setSide('');
        } else if (selectedOption === 'Side') {
            resultSide = Math.sqrt((heightValue**2) + (baseValue**2 / 4));
            setSide(resultSide);
            setHeight('');
            setBase('');
        }

        setShowResults(true);
    }

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 

    return (
        <div className="isoscele">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Isosceles Triangle Calculate</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div style={{ display: 'flex' }}>
                <Form className={`isoscele-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>Base</option>
                            <option>Side</option>
                            <option>Height</option>
                            <option>Area</option>
                            <option>Perimeter</option>
                        </select>
                    </FormField>
                    {selectedOption !== 'Base' && (
                        <FormField>
                            <label>Base</label>
                            <input
                                placeholder='Base'
                                value={base}
                                onChange={(e) => setBase(e.target.value)}
                            />
                        </FormField>
                    )}
                    {selectedOption !== 'Side' && (
                        <FormField>
                            <label>Side</label>
                            <input
                                placeholder='Side'
                                value={side}
                                onChange={(e) => setSide(e.target.value)}
                            />
                        </FormField>
                    )}
                    {selectedOption !== 'Height' && (
                        <FormField>
                            <label>Height</label>
                            <input
                                placeholder='Height'
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </FormField>
                    )}
                    <Button type='submit' style={{ marginLeft: '100px' }}>Calculate</Button>
                </Form>
                {showResults && (
                    <div className="isoscele-result">
                        {area && <p>Area: {area}</p>}
                        {perimeter && <p>Perimeter: {perimeter}</p>}
                        {height && <p>Height: {height.toFixed(2)}</p>}
                        {side && <p>Side: {side.toFixed(2)}</p>}
                        {base && <p>Base: {base.toFixed(2)}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default IsoscelesTriangle;
