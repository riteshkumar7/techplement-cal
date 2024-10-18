import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./healthfit.css"

const BMI = () => {
  const [showResults, setShowResults] = useState(false);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  const GenderChange = (e, { value }) => {
    setGender(value);
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      return bmi.toFixed(2);
    }
    return '';
  };
  const BMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal';
    } else {
      return 'Overweight';
    }
  };

  const handleSubmit = () => {
    const calculatedBMI = calculateBMI();
    setShowResults(true);
  };
  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}

  return (
    <div className="bmi">
      <nav className="healthfit-nav">
        <p style={{margin:'0 0 0 450px'}}>BMI Calculator</p>
        <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
      </nav>
      <div>
        <Form className={`bmi-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
          <FormField>
            <label>Age</label>
            <input
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Height</label>
            <input
              placeholder='Height(Cm)'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Weight</label>
            <input
              placeholder='Weight(Kg)'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormField>
          <FormGroup inline>
            <label style={{ fontSize: '16px' }}>Gender</label>
            <FormRadio
              label='Male'
              value='male'
              checked={gender === 'male'}
              onChange={GenderChange}
              style={{ fontSize: '16px' }}
            />
            <FormRadio
              label='Female'
              value='female'
              checked={gender === 'female'}
              onChange={GenderChange}
              style={{ fontSize: '16px' }}
            />
          </FormGroup>
          <Button type='submit' style={{ marginLeft: '80px', border: '1px solid black' }}>
            BMI Calculate
          </Button>
          {showResults && (
            <div className="bmi-result">
              <p>BMI : {calculateBMI()} Kg/m<sup>2</sup></p>
              <p>Category: {BMICategory(parseFloat(calculateBMI()))}</p>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default BMI;
