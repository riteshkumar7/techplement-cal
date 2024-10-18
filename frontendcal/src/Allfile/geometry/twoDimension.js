import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./geometry.css";
import { useNavigate } from 'react-router-dom';

const TwoDimension = () => {

    
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 

    const [showResults, setShowResults] = useState(false);
    const [x1, setX1] = useState('');
    const [y1, setY1] = useState('');
    const [x2, setX2] = useState('');
    const [y2, setY2] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = () => {
        const distanceValue = calculateDistance();
        setDistance(distanceValue);
        setShowResults(true);
    };

    const calculateDistance = () => {
        const dx = parseFloat(x2) - parseFloat(x1);
        const dy = parseFloat(y2) - parseFloat(y1);
        return Math.sqrt(dx * dx + dy * dy).toFixed(2);
    };

    return (
        <div className="twoD">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>2-Dimension Calculate</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`twoD-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                <div style={{display:'flex',gap:'10px'}}>
                    <FormField style={{margin:'20px 20px 0 0'}}>
                        <lebel>First Point</lebel>
                    </FormField>
                    <FormField>
                        <label>X<sub>1</sub></label>
                        <input placeholder='X1' type="number"
                        value={x1}
                        onChange={(e) => setX1(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Y<sub>1</sub></label>
                        <input placeholder='Y1' type="number"
                        value={y1}
                        onChange={(e) => setY1(e.target.value)}
                        />
                    </FormField>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                    <FormField style={{margin:'20px 20px 0 0'}}>
                        <lebel>Second Point</lebel>
                    </FormField>
                    <FormField>
                        <label>X<sub>2</sub></label>
                        <input placeholder='X2' type="number"
                        value={x2}
                        onChange={(e) => setX2(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <label>Y<sub>2</sub></label>
                        <input placeholder='Y2' type="number" 
                        value={y2}
                        onChange={(e) => setY2(e.target.value)}
                        />
                    </FormField>
                    </div>
                    <Button type='submit' style={{ marginLeft: '100px' }}>2D-Calculate</Button>
                    {showResults && (
                        <div className="twoD-result">
                            <p>Distance:{distance} </p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default TwoDimension;
