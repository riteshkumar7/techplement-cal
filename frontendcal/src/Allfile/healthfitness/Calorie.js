import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./healthfit.css"

const Calorie = () => {
  const [showResults, setShowResults] = useState(false);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const GenderChange = (e, { value }) => {
    setGender(value);
  };

  const handleActivityChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const handleSubmit = () => {
    const BMR = calculateBMR();
    const caloriesNeeded = calculateCaloriesNeeded(BMR);
    setShowResults(true);
  };

  const calculateBMR = () => {
    let BMR = 0;
    if (gender === 'male') {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    return BMR.toFixed(2);
  };

  const calculateCaloriesNeeded = (BMR) => {
    let caloriesNeeded = 0;
    switch (activityLevel) {
      case 'sedentary':
        caloriesNeeded = BMR * 1.2;
        break;
      case 'light':
        caloriesNeeded = BMR * 1.375;
        break;
      case 'moderate':
        caloriesNeeded = BMR * 1.55;
        break;
      case 'active':
        caloriesNeeded = BMR * 1.725;
        break;
      case 'veryActive':
        caloriesNeeded = BMR * 1.9;
        break;
      default:
        break;
    }
    return caloriesNeeded.toFixed(2); // Round to 2 decimal places
  };
  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}
  return (
    <div className="calorie">
      <nav className="healthfit-nav">
        <p style={{margin:'0 0 0 450px'}}>Calorie Calculator</p>
        <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
      </nav>
      <div>
        <Form className={`calorie-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
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
          <FormField>
            <label>Activity</label>
            <select value={activityLevel} onChange={handleActivityChange}>
              <option value="sedentary">Sedentary: little or no exercise</option>
              <option value="light">Light: exercise 1-3 times/week</option>
              <option value="moderate">Moderate: exercise 4-5 times/week</option>
              <option value="active">Active: daily exercise or intense exercise 3-4 times/week</option>
              <option value="veryActive">Very Active: intense exercise 6-7 times/week</option>
              <option value="extraActive">Extra Active: very intense exercise daily, or physical job</option>
            </select>
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
          <Button type='submit' style={{ marginLeft: '120px', border: '1px solid black' }}>
            Calorie Calculate
          </Button>
          {showResults && (
            <div className="calorie-result">
              <p>BMR: {calculateBMR()}</p>
              <p>Calories Needed: {calculateCaloriesNeeded(parseFloat(calculateBMR()))}</p>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Calorie;
