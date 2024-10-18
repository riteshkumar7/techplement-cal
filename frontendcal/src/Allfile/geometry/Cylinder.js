import React, { useState } from 'react';
import { FormField, Button, Form, FormGroup, FormRadio } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Cylinder = () => {

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  } 
    const [cylinderType, setCylinderType] = useState('solid');
    const [radius, setRadius] = useState('');
    const [radiuss, setRadiuss] = useState('');
    const [height, setHeight] = useState('');
    const [volume, setVolume] = useState('');
    const [totalSurfaceArea, setTotalSurfaceArea] = useState('');
    const [lateralSurfaceArea, setLateralSurfaceArea] = useState('');
    const [baseArea, setBaseArea] = useState('');

    const handleSubmit = () => {
        calculate();
    };

    const calculate = () => {
        const r = parseFloat(radius);
        const h = parseFloat(height);
        const rs = parseFloat(radiuss);

        if (!isNaN(r) && !isNaN(h)) {
            if (cylinderType === 'solid') {
                const volumeResult = Math.PI * r * r * h;
                const totalSurfaceAreaResult = 2 * Math.PI * r * (r + h);
                const lateralSurfaceAreaResult = totalSurfaceAreaResult - 2 * Math.PI * r * r;
                const baseAreaResult = Math.PI * r * r;

                setVolume(volumeResult.toFixed(2));
                setTotalSurfaceArea(totalSurfaceAreaResult.toFixed(2));
                setLateralSurfaceArea(lateralSurfaceAreaResult.toFixed(2));
                setBaseArea(baseAreaResult.toFixed(2));

                
            } else if (cylinderType === 'hollow') {
                const volumeResult = Math.PI * h * ((r * r) - (rs * rs));
                const totalSurfaceAreaResult = (2 * Math.PI * h * (r + rs)) + (2 * Math.PI * (r*r - rs*rs));
                const lateralSurfaceAreaResult = (2 * Math.PI * r * h) - (2 * Math.PI * rs * h);
                const baseAreaResult = Math.PI * (r * r - rs * rs);

                setVolume(volumeResult.toFixed(2));
                setTotalSurfaceArea(totalSurfaceAreaResult.toFixed(2));
                setLateralSurfaceArea(lateralSurfaceAreaResult.toFixed(2));
                setBaseArea(baseAreaResult.toFixed(2));
            }
        }
    };

    return (
        <div className="cylinder">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Cylinder Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className="cylinder-form" onSubmit={handleSubmit}>
                    <FormGroup inline>
                        <label>Cylinder Type:</label>
                        <FormRadio
                            label='Solid Cylinder'
                            name='cylinderType'
                            value='solid'
                            checked={cylinderType === 'solid'}
                            onChange={() => setCylinderType('solid')}
                        />
                        <FormRadio
                            label='Hollow Cylinder'
                            name='cylinderType'
                            value='hollow'
                            checked={cylinderType === 'hollow'}
                            onChange={() => setCylinderType('hollow')}
                            style={{ marginLeft: '20px' }}
                        />
                    </FormGroup>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Radius(R)</label>
                            <input placeholder='Radius(R)' value={radius} onChange={(e) => setRadius(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Height</label>
                            <input placeholder='Height' value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                        </div>
                        {cylinderType === 'hollow' && (
                            <FormField>
                                <label>Inner Radius(r)</label>
                                <input placeholder='Inner Radius(r)' value={radiuss} onChange={(e) => setRadiuss(e.target.value)}/>
                            </FormField>
                        )}
                    <div style={{display:'flex',gap:'10px'}}>
                        <FormField>
                            <label>Volume</label>
                            <input placeholder='Volume' value={volume} readOnly style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Total Surface Area</label>
                            <input placeholder='Total Surface Area' value={totalSurfaceArea} readOnly style={{ width: '200px' }} />
                        </FormField>
                        </div>
                        <div style={{display:'flex',gap:'10px'}}>
                        <FormField>
                            <label>Lateral Surface Area</label>
                            <input placeholder='Lateral Surface Area' value={lateralSurfaceArea} readOnly style={{ width: '200px' }} />
                        </FormField>
                        {cylinderType === 'solid' && (
                            <FormField>
                                <label>Base Area</label>
                                <input placeholder='Base Area' value={baseArea} readOnly style={{ width: '200px' }} />
                            </FormField>
                        )}
                        </div>
                        <Button type='submit' style={{ margin:'10px 0 0 100px' }}>Calculate</Button>
                </Form>
            </div>
        </div>
    );
};

export default Cylinder;
