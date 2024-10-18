import React, { useState } from 'react';
import "./calculate.css"
import { useNavigate } from 'react-router-dom';

const Calculate = () => {
    const navigate = useNavigate();
    const unitNav = () => {
        navigate("/unit");
    };

    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div>
            <nav className="container">
                <h1 className="head">Calculator</h1>
                <ul className="p2">
                    <p className="p3" onClick={unitNav}>Unit Converter</p><img src="fouricon.png" className="icon1" onClick={unitNav} alt="Unit Converter" />
                </ul>
            </nav>
            <div className="cal-area">
                <div>
                    <div className="cal-box">
                        <input type="text" className="input" value={input} readOnly />
                        <div className="btns">
                            <button className="number-button" onClick={() => handleButtonClick('Math.PI')}>π</button>
                            <button className="number-button" onClick={() => handleButtonClick('(')}>(</button>
                            <button className="number-button" onClick={() => handleButtonClick(')')}>)</button>
                            <button className="number-button" onClick={handleClear}>AC</button>

                            <button className="number-button" onClick={() => handleButtonClick('%')}>%</button>
                            <button className="number-button" onClick={() => handleButtonClick('Math.log(')}>log</button>
                            <button className="number" onClick={() => handleButtonClick('7')}>7</button>
                            <button className="number" onClick={() => handleButtonClick('8')}>8</button>
                            <button className="number" onClick={() => handleButtonClick('9')}>9</button>

                            <button className="number-button" onClick={() => handleButtonClick('/')}>/</button>
                            <button className="number-button" onClick={() => handleButtonClick('Math.E')}>e</button>
                            <button className="number" onClick={() => handleButtonClick('4')}>4</button>
                            <button className="number" onClick={() => handleButtonClick('5')}>5</button>
                            <button className="number" onClick={() => handleButtonClick('6')}>6</button>

                            <button className="number-button" onClick={() => handleButtonClick('*')}>*</button>
                            <button className="number-button" onClick={() => handleButtonClick('Math.sqrt(')}>√</button>
                            <button className="number" onClick={() => handleButtonClick('1')}>1</button>
                            <button className="number" onClick={() => handleButtonClick('2')}>2</button>
                            <button className="number" onClick={() => handleButtonClick('3')}>3</button>

                            <button className="number-button" onClick={() => handleButtonClick('-')}>-</button>
                            <button className="number-button" onClick={() => handleButtonClick('Math.pow(')}>x<sup>y</sup></button>
                            <button className="number" onClick={() => handleButtonClick('0')}>0</button>
                            <button className="number" onClick={() => handleButtonClick('.')}>.</button>
                            <button className="number-btn1" onClick={handleCalculate}>=</button>
                            <button className="number-button" onClick={() => handleButtonClick('+')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculate;
