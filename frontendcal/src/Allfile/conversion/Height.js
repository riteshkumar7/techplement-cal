import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const Height = () => {
    const [showResults, setShowResults] = useState(false);
    const [gender, setGender] = useState('');
    const [expectedHeight, setExpectedHeight] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const childHeight = parseInt(e.target.elements.childHeight.value);
        const motherHeight = parseInt(e.target.elements.motherHeight.value);
        const fatherHeight = parseInt(e.target.elements.fatherHeight.value);
        const genderFactor = gender === 'male' ? 1 : 0;

        const midParentalHeight = ((motherHeight + fatherHeight) / 2) + genderFactor * 6.5;
        const expectedAdultHeight = (midParentalHeight + childHeight) / 2;

        setExpectedHeight(expectedAdultHeight.toFixed(2));
        setShowResults(true);
    };

    const GenderChange = (e, { value }) => {
        setGender(value);
    };

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className="height">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Height Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`height-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Child Age</label>
                        <input name="childAge" placeholder='Child Age' type="number" />
                    </FormField>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Child Height</label>
                            <input name="childHeight" placeholder='Child Height(CM)' style={{ width: '200px' }} type="number" />
                        </FormField>
                        <FormField>
                            <label>Child Weight</label>
                            <input name="childWeight" placeholder='Child Weight(Kg)' style={{ width: '200px' }} type="number" />
                        </FormField>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Mother Height</label>
                            <input name="motherHeight" placeholder='Mother Height(CM)' style={{ width: '200px' }} type="number" />
                        </FormField>
                        <FormField>
                            <label>Father Height</label>
                            <input name="fatherHeight" placeholder='Father Height(CM)' style={{ width: '200px' }} type="number" />
                        </FormField>
                    </div>
                    <FormGroup inline>
                        <label style={{ fontSize: '16px' }}>Gender</label>
                        <FormRadio
                            label='Male'
                            value='male'
                            checked={gender === 'male'}
                            onChange={GenderChange}
                        />
                        <FormRadio
                            label='Female'
                            value='female'
                            checked={gender === 'female'}
                            onChange={GenderChange}
                        />
                    </FormGroup>

                    <Button type='submit' style={{ marginLeft: '105px' }}>Height Calculate</Button>
                    {showResults && (
                        <div className="height-result">
                            <p>Expected adult height: {expectedHeight} centimeters </p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default Height;
