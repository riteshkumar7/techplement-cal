import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Rectangle = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState('');
    const [perimeter, setPerimeter] = useState('');
    const [diagonal, setDiagonal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);

        const lengthValue = parseFloat(length);
        const widthValue = parseFloat(width);

        if (selectedOption === 'Area') {
            const resultArea = lengthValue * widthValue;
            setArea(resultArea);
            setPerimeter('');
            setDiagonal('');
        } else if (selectedOption === 'Perimeter') {
            const resultPerimeter = 2 * (lengthValue + widthValue);
            setPerimeter(resultPerimeter);
            setArea('');
            setDiagonal('');
        } else if (selectedOption === 'Diagonal') {
            const resultDiagonal = Math.sqrt(lengthValue * lengthValue + widthValue * widthValue);
            setDiagonal(resultDiagonal);
            setArea('');
            setPerimeter('');
        }
    };

    return (
        <div className="rectangle">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Rectangle Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`rectangle-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>Area</option>
                            <option>Perimeter</option>
                            <option>Diagonal</option>
                        </select>
                    </FormField>
                    <FormField>
                        <label>Length</label>
                        <input
                            placeholder="Length"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Width</label>
                        <input
                            placeholder="Width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </FormField>
                    <Button type="submit" style={{ marginLeft: '100px' }}>
                        Calculate Rectangle
                    </Button>
                    {showResults && (
                        <div className="rectangle-result">
                            {area && <p>Area: {area.toFixed(2)}</p>}
                            {perimeter && <p>Perimeter: {perimeter.toFixed(2)}</p>}
                            {diagonal && <p>Diagonal: {diagonal.toFixed(2)}</p>}
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Rectangle;
