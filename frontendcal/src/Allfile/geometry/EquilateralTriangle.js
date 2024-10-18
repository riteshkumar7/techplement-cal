import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./geometry.css";
import { useNavigate } from 'react-router-dom';

const EquilateralTriangle = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [side, setSide] = useState('');
    const [perimeter, setPerimeter] = useState('');
    const [area, setArea] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = () => {
        setShowResults(true);
        if (selectedOption === 'Perimeter') {
            setPerimeter(3 * parseFloat(side));
        } else if (selectedOption === 'Area') {
            setArea((Math.sqrt(3) / 4) * parseFloat(side) * parseFloat(side));
        } else if (selectedOption === 'Side') {
            const calculatedSide = Math.sqrt((4 * parseFloat(area)) / Math.sqrt(3));
            setSide(isNaN(calculatedSide) ? '' : calculatedSide);
        }
    }

    return (
        <div className="equilateral">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Equilateral Triangle Calculate</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`equilateral-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>Select Calculation</option>
                            <option>Perimeter</option>
                            <option>Area</option>
                            <option>Side</option>
                        </select>
                    </FormField>
                    {(selectedOption === 'Perimeter' || selectedOption === 'Area') && (
                        <FormField>
                            <label>Side</label>
                            <input
                                placeholder='Side'
                                value={side}
                                onChange={(e) => setSide(e.target.value)}
                            />
                        </FormField>
                    )}
                    {(selectedOption === 'Side') && (
                        <FormField>
                            <label>Area</label>
                            <input
                                placeholder='Area'
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </FormField>
                    )}
                    <Button type='submit' style={{ marginLeft: '100px' }}>Calculate</Button>
                    {showResults && (
                        <div className="equilateral-result">
                            {perimeter && <p>Perimeter: {perimeter.toFixed(2)}</p>}
        {typeof area === 'number' && !isNaN(area) && <p>Area: {area.toFixed(2)}</p>}
        {typeof side === 'number' && !isNaN(side) && <p>Side: {side.toFixed(2)}</p>}
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default EquilateralTriangle;
