import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const GPA = () => {
    const [showResults, setShowResults] = useState(false);
    const [classes, setClasses] = useState('');
    const [numInputs, setNumInputs] = useState(6);
    const [results,setResults]=useState(null);

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    const grouping = (e, { value }) => {
        setClasses(value);
        switch (value) {
            case 'tenth':
                setNumInputs(6); 
                break;
            case 'twelveth':
                setNumInputs(5); 
                break;
            case 'graduation':
                setNumInputs(3); 
                break;
            case 'Post graduation':
                setNumInputs(2); 
                break;
            default:
                setNumInputs(6); 
        }
    };


    const handleSubmit = (e) => {
        const form = e.target;
        const formData = new FormData(form);
        let totalCredits = 0;
        let weightedSum = 0;

        for (let i = 0; i < numInputs; i++) {
            const course = formData.get(`course${i}`);
            const credits = parseInt(formData.get(`credits${i}`));
            const grade = formData.get(`grade${i}`);

            if (!isNaN(credits) && credits > 0) {
                totalCredits += credits;
                weightedSum += credits * getGradePoint(grade);
            }
        }

        const gpa = totalCredits === 0 ? 0 : weightedSum / totalCredits;
        setResults({ gpa: gpa.toFixed(2), totalCredits });
        setShowResults(true);
    };
    
    const getGradePoint = (grade) => {
        switch (grade) {
            case 'A+':
                return 4.0;
            case 'A':
                return 4.0;
            case 'A-':
                return 3.7;
            case 'B+':
                return 3.3;
            case 'B':
                return 3.0;
            case 'B-':
                return 2.7;
            case 'C+':
                return 2.3;
            case 'C':
                return 2.0;
            case 'C-':
                return 1.7;
            case 'D+':
                return 1.3;
            case 'D':
                return 1.0;
            case 'F':
                return 0.0;
            default:
                return 0.0;
        }
    };
    const renderInputs = () => {
        const inputs = [];
        inputs.push(
            <div key="labels" style={{ display: 'flex', gap: '10px' }}>
                <div style={{ width: '200px' }}>
                    <label>Course</label>
                </div>
                <div style={{ width: '150px' }}>
                    <label>Credits</label>
                </div>
                <div style={{ width: '150px' }}>
                    <label>Grade</label>
                </div>
            </div>
        );
        for (let i = 0; i < numInputs; i++) {
            inputs.push(
                <div key={i} style={{ display: 'flex', gap: '10px' }}>
                    <FormField style={{ width: '200px' }}>
                        <input type="text" name={`course${i}`} placeholder={`Course ${i + 1}`} />
                    </FormField>
                    <FormField style={{ width: '150px' }}>
                        <input type="text" name={`credits${i}`} placeholder="Number" />
                    </FormField>
                    <FormField style={{ width: '150px' }}>
                        <select name={`grade${i}`}>
                            <option>A+</option>
                            <option>A</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>B-</option>
                            <option>C+</option>
                            <option>C</option>
                            <option>C-</option>
                            <option>D+</option>
                            <option>D</option>
                            <option>D-</option>
                            <option>F</option>
                            <option>P</option>
                            <option>NP</option>
                        </select>
                    </FormField>
                </div>
            );
        }
        return inputs;
    };


    return (
        <div className='gpa'>
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>GPA Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div style={{ display: 'flex' }}>
                <Form className="gpa-form" onSubmit={handleSubmit}>
                    <FormGroup inline >
                        <label style={{ fontSize: '16px' }}>Category</label>
                        <FormRadio
                            label='10th'
                            value='tenth'
                            checked={classes === 'tenth'}
                            onChange={grouping}
                        />
                        <FormRadio
                            label='12th'
                            value='twelveth'
                            checked={classes === 'twelveth'}
                            onChange={grouping}
                        />
                        <FormRadio
                            label='Graduation'
                            value='graduation'
                            checked={classes === 'graduation'}
                            onChange={grouping}
                        />
                        <FormRadio
                            label='Post Graduation'
                            value='Post graduation'
                            checked={classes === 'Post graduation'}
                            onChange={grouping}
                        />
                    </FormGroup>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {renderInputs()}
                    </div>
                    <Button type="submit" style={{ marginLeft:'150px' }}>GPA Calculate</Button>
                </Form>
                {showResults && (
                    <div className="gpa-result">
                        <p>Total Credits:-{results.totalCredits}</p>
                        <p>Over all GPA:- {results.gpa}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GPA;
