import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./healthfit.css"


const IdealWeight = () => {
  const [showResults, setShowResults] = useState(false);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [idealWeightResults, setIdealWeightResults] = useState({
    robinson: '',
    miller: '',
    devine: '',
    hamwi: '',
    healthyBMI: '',
  });

  const GenderChange = (e, { value }) => {
    setGender(value);
  };

  const handleSubmit = () => {
    calculateIdealWeights();
    setShowResults(true);
  };

  const calculateIdealWeights = () => {
    const heightInMeters = height / 100;
    const baseWeight = gender === 'male' ? 52 : 49;

    const robinson = (baseWeight + 1.9 * ((heightInMeters - 1.52) / 0.0254)).toFixed(2);
    const miller = (baseWeight + 1.41 * ((heightInMeters - 1.52) / 0.0254)).toFixed(2);
    const devine = (baseWeight + 0.91 * ((heightInMeters - 1.524) / 0.0254)).toFixed(2);
    const hamwi = (48 + 2.7 * ((heightInMeters - 1.524) / 0.0254)).toFixed(2);

    const healthyBMIRange = `${(18.5 * (heightInMeters * heightInMeters)).toFixed(2)} - ${(24.9 * (heightInMeters * heightInMeters)).toFixed(2)}`;

    setIdealWeightResults({
      robinson,
      miller,
      devine,
      hamwi,
      healthyBMI: healthyBMIRange,
    });
  };
  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}

  return (
    <div className="ideal">
      <nav className="healthfit-nav">
        <p style={{margin:'0 0 0 450px'}}>Ideal Weight Calculator</p>
        <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
      </nav>
      <div>
        <Form className={`ideal-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
          <FormField>
            <label>Age</label>
            <input
              type="number"
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Height</label>
            <input
              type="number"
              placeholder='Height(Cm)'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
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
          <Button type='submit' style={{ marginLeft: '100px', border: '1px solid black' }}>
            Calculate Ideal Weight
          </Button>
          {showResults && (
            <div className="ideal-result">
              <table border="0">
                <thead>
                  <tr>
                    <th>Formula</th>
                    <th>Ideal Weight (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Robinson (1983)</td>
                    <td>{idealWeightResults.robinson}</td>
                  </tr>
                  <tr>
                    <td>Miller (1983)</td>
                    <td>{idealWeightResults.miller}</td>
                  </tr>
                  <tr>
                    <td>Devine (1974)</td>
                    <td>{idealWeightResults.devine}</td>
                  </tr>
                  <tr>
                    <td>Hamwi (1964)</td>
                    <td>{idealWeightResults.hamwi}</td>
                  </tr>
                  <tr>
                    <td>Healthy BMI Range</td>
                    <td>{idealWeightResults.healthyBMI}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default IdealWeight;
