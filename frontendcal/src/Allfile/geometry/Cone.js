import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './geometry.css';
import { useNavigate } from 'react-router-dom';

const Cone = () => {
    const [height, setHeight] = useState('');
    const [diameter, setDiameter] = useState('');
    const [volume, setVolume] = useState('');
    const [area, setArea] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        calculate();
        setShowResults(true);
    };
    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    const calculate = () => {
        const h = parseFloat(height);
        const d = parseFloat(diameter);
        const r = d / 2;

        if (!isNaN(h) && !isNaN(d)) {
            const volumeResult = (1 / 3) * Math.PI * r * r * h;
            const slantHeight = Math.sqrt(r * r + h * h);
            const areaResult = Math.PI * r * (r + slantHeight);

            setVolume(volumeResult.toFixed(2));
            setArea(areaResult.toFixed(2));
        } else if (!isNaN(volume) && !isNaN(d)) {
            const rVolume = parseFloat(volume);
            const volumeResult = rVolume * (3 / Math.PI) / h;
            const slantHeight = Math.sqrt(r * r + h * h);
            const areaResult = Math.PI * r * (r + slantHeight);

            setHeight(volumeResult.toFixed(2));
            setArea(areaResult.toFixed(2));
        } else if (!isNaN(area) && !isNaN(d)) {
            const rArea = parseFloat(area);
            const l = Math.sqrt(h * h + r * r);
            const areaResult = rArea * 2 / (Math.PI * r);

            setHeight(l.toFixed(2));
            setVolume(areaResult.toFixed(2));
        }
    };

    return (
        <div className="cone">
            <nav className="geometry-nav">
                <p style={{margin:'0 0 0 450px'}}>Cone Calculator</p>
                <button className='nav-button' style={{margin:'0 0 0 350px'}} onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`cone-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Height</label>
                            <input placeholder='Height' value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Diameter (D)</label>
                            <input placeholder='Diameter' value={diameter} onChange={(e) => setDiameter(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Volume</label>
                            <input placeholder='Volume' value={volume} onChange={(e) => setVolume(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                        <FormField>
                            <label>Area (A)</label>
                            <input placeholder='Area' value={area} onChange={(e) => setArea(e.target.value)} style={{ width: '200px' }} />
                        </FormField>
                    </div>
                    <Button type='submit' style={{ marginLeft: '100px' }}>Cone Calculate</Button>
                    {showResults && (
                        <div className="cone-result">
                            <p>Height: {height}</p>
                            <p>Volume: {volume}</p>
                            <p>Surface Area: {area}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Cone;
