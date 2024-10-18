import React,{useState} from 'react'
import { FormField, Button, Form ,FormGroup ,FormRadio} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./healthfit.css"
const BMR=()=>{
    const [showResults, setShowResults] = useState(false);
  const [Age, setAge] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [Gender, setGender] = useState('');

  const handleGender = (e, { value }) => {
    setGender(value);
  };
  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}
  const calculateBMR = () => {
    let bmr = 0;
    const ageNum = parseFloat(Age);
    const heightNum = parseFloat(Height);
    const weightNum = parseFloat(Weight);

    if (Gender === 'male') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else if (Gender === 'female') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    return bmr.toFixed(2);
  };
   

  const handleSubmit = (e) => {
    const calculatedBMR = calculateBMR();
    setShowResults(true);
  };
    return(
        <div className="bmr">
            <nav className="healthfit-nav">
                <p style={{margin:'0 0 0 450px'}}>BMR Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
            <Form className={`bmr-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
          <FormField>
            <label>Age</label>
            <input
              placeholder='Age'
              value={Age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Height</label>
            <input
              placeholder='Height(Cm)'
              value={Height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Weight</label>
            <input
              placeholder='Weight(Kg)'
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormField>
          <FormGroup inline>
            <label style={{ fontSize: '16px' }}>Gender</label>
            <FormRadio
              label='Male'
              value='male'
              checked={Gender === 'male'}
              onChange={handleGender}
              style={{ fontSize: '16px' }}
            />
            <FormRadio
              label='Female'
              value='female'
              checked={Gender === 'female'}
              onChange={handleGender}
              style={{ fontSize: '16px' }}
            />
          </FormGroup>
          <Button type='submit' style={{ marginLeft: '80px', border: '1px solid black' }}>
            BMR Calculate
          </Button>
          {showResults && (
            <div className="bmr-result">
              <p>BMR : {calculateBMR()} Calories/day</p>
            </div>
          )}
        </Form>
            </div>
        </div>
    )
}
export default BMR;