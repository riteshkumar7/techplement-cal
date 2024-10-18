import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import "./geometry.css"
import { useNavigate } from 'react-router-dom';

const RightAngledTriangle = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 

    const [showResults, setShowResults] = useState(false);
    const [hypotenuse, setHypotenuse] = useState('');
    const [perpendicular, setPerpendicular] = useState('');
    const [base, setBase] = useState('');
    const [perimeter,setPerimeter]=useState('');
    const [area,setArea]=useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {

        
        let resultPerpendicular = '';
        let resultBase = '';
        let resultHypotenuse = '';
        let resultPerimeter = '';
        let resultArea = '';

        const hypotenuseValue = parseFloat(hypotenuse);
        const baseValue = parseFloat(base);
        const perpendicularValue = parseFloat(perpendicular);

        if (selectedOption === 'Perpendicular') {
            resultPerpendicular = Math.sqrt(hypotenuseValue ** 2 - baseValue ** 2);
            setPerpendicular(resultPerpendicular);
        } else if (selectedOption === 'Base') {
            resultBase = Math.sqrt(hypotenuseValue ** 2 - perpendicularValue ** 2);
            setBase(resultBase);
        } else if (selectedOption === 'Hypotenuse') {
            resultHypotenuse = Math.sqrt(perpendicularValue ** 2 + baseValue ** 2);
            setHypotenuse(resultHypotenuse);
        } else if (selectedOption === 'Perimeter') {
            resultPerimeter = hypotenuseValue + baseValue + perpendicularValue;
            setPerimeter(resultPerimeter);
        } else if (selectedOption === 'Area') {
            resultArea = 0.5 * baseValue * perpendicularValue;
            setArea(resultArea);
        }

        setShowResults(true);
    }

    return (
        <div className="right">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Right Angled Triangle Calculate</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div style={{display:'flex'}}>
                <Form className={`right-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>Perpendicular</option>
                            <option>Base</option>
                            <option>Hypotenuse</option>
                            <option>Perimeter</option>
                            <option>Area</option>
                        </select>
                    </FormField>
                    {selectedOption !== 'Perpendicular' && (
                        <FormField>
                            <label>Perpendicular</label>
                            <input
                                placeholder='Perpendicular'
                                value={perpendicular}
                                onChange={(e) => setPerpendicular(e.target.value)}
                            />
                        </FormField>
                    )}
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
                    {selectedOption !== 'Hypotenuse' && (
                        <FormField>
                            <label>Hypotenuse</label>
                            <input
                                placeholder='Hypotenuse'
                                value={hypotenuse}
                                onChange={(e) => setHypotenuse(e.target.value)}
                            />
                        </FormField>
                    )}
                    <Button type='submit' style={{ marginLeft: '100px' }}>Calculate</Button>
                </Form>
                {showResults && (
                        <div className="right-result">
                            <p>Perpendicular side: {perpendicular}</p>
                            <p>Base side: {base}</p>
                            <p>Hypotenuse side: {hypotenuse}</p>
                            <p>Perimeter: {perimeter}</p>
                            <p>Area: {area}</p>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default RightAngledTriangle;
