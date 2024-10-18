import React,{useState} from 'react'
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./healthfit.css"
const BodyFat=()=>{

    const [showResults, setShowResults] = useState(false);
    const [Age, setAge] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [Gender, setGender] = useState('');
    const [Neck,setNeck] = useState('');
    const [Waist,setWaist] = useState('');
    const [Hip,setHip] = useState('');
  
    const handleGender = (e, { value }) => {
      setGender(value);
      setHip('');
    };

    const handleSubmit = (e) => {
        const calculatedBodyFat = calculateBodyFat();
        setShowResults(true);
      };
      const calculateBodyFat = () => {
        let bodyFat = 0;
        const weightInKg = parseFloat(Weight);
        const heightInCm = parseFloat(Height);
        const neckInCm = parseFloat(Neck);  
        const waistInCm = parseFloat(Waist);
        const hipInCm = parseFloat(Hip);
        const ageValue = parseFloat(Age);
    
        if (Gender === 'male') {
            bodyFat = 86.010 * Math.log10(waistInCm - neckInCm) - 70.041 * Math.log10(heightInCm) + 36.76 - (ageValue * 0.19);
        } else if (Gender === 'female') {
            bodyFat = 163.205 * Math.log10(waistInCm + hipInCm - neckInCm) - 97.684 * Math.log10(heightInCm) - 78.387 + (ageValue * 0.19);
        }
    
        return bodyFat.toFixed(2);
      }

      const navigate = useNavigate();
      const unitConversion=()=>{
        navigate("/unit");
    }

    return(
        <div className="bmr">
            <nav className="healthfit-nav">
                <p style={{margin:'0 0 0 450px'}}>BodyFat Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
            <Form className={`bodyfat-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
          <FormField>
            <label>Age</label>
            <input
              placeholder='Age'
              value={Age}
              onChange={(e) => setAge(e.target.value)}
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
          <div style={{display:'flex',gap:'10px'}}>
          <FormField>
            <label>Height</label>
            <input
              placeholder='Height(Cm)'
              value={Height}
              onChange={(e) => setHeight(e.target.value)}
              style={{width:'225px'}}
            />
          </FormField>
          <FormField>
            <label>Neck</label>
            <input
              placeholder='Neck(Cm)'
              value={Neck}
              onChange={(e) => setNeck(e.target.value)}
              style={{width:'225px'}}
            />
          </FormField>
          </div>
          <div style={{display:'flex',gap:'10px'}}>
          <FormField>
            <label>Waist</label>
            <input
              placeholder='Waist(Cm)'
              value={Waist}
              onChange={(e) => setWaist(e.target.value)}
              style={{width:'225px'}}
            />
          </FormField>
          <FormField>
            <label>Hip</label>
            <input
              placeholder='Hip(Cm)'
              value={Hip}
              onChange={(e) => setHip(e.target.value)}
              style={{width:'225px'}}
              disabled={Gender !== 'female'} 
            />
          </FormField>
          </div>
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
          <Button type='submit' style={{ marginLeft: '130px', border: '1px solid black' }}>
          BodyFat Calculate
          </Button>
          {showResults && (
            <div className="bodyfat-result">
              <p>BodyFat : {calculateBodyFat()} %</p>
            </div>
          )}
        </Form>
            </div>
        </div>
    )
}
export default BodyFat;