import React, { useState } from 'react';
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [showResults, setShowResults] = useState(false);
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
    const [excludeBrackets, setExcludeBrackets] = useState(true);
    const [noRepeatedChars, setNoRepeatedChars] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const charSet = generateCharacterSet();
        let password = generateRandomPassword(charSet);

        if (noRepeatedChars) {
            password = removeRepeatedChars(password);
        }

        setGeneratedPassword(password);
        setShowResults(true);
    };

    const generateCharacterSet = () => {
        let charSet = '';
        if (includeLowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUpperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charSet += '0123456789';
        if (includeSymbols) charSet += '!@#$%^&*()-_=+[{]}|;:,.<>?/';

        if (excludeAmbiguous) charSet = charSet.replace(/[il1Lo0O`~"']/g, '');
        if (excludeBrackets) charSet = charSet.replace(/[()[\]{}]/g, '');

        return charSet;
    };

    const generateRandomPassword = (charSet) => {
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        return password;
    };

    const removeRepeatedChars = (str) => {
        return str
            .split('')
            .filter((char, index, self) => self.indexOf(char) === index)
            .join('');
    };

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className="password">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Password Generate</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`password-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Password Length</label>
                        <input
                            type="number"
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                            min="1"
                        />
                    </FormField>
                    <FormField>
                        <Checkbox
                            label='Include Lower Case(a-z)'
                            checked={includeLowerCase}
                            onChange={() => setIncludeLowerCase(!includeLowerCase)}
                        /><br />
                       <Checkbox
                            label='Include Upper Case(A-Z)'
                            checked={includeUpperCase}
                            onChange={() => setIncludeUpperCase(!includeUpperCase)}
                        /><br/>
                        <Checkbox
                        label='Include Numbers(0-9)'
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                         <Checkbox
                        label='Include Symbols (!"#$%&()"*+,-./:;<=>?@[\]^_`{|}~)'
                        checked={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                         <Checkbox
                        label='Exclude Ambiguous Characters(ill1L|o0O`-_":;.,)' 
                        checked={excludeAmbiguous}
                        onChange={() => setExcludeAmbiguous(!excludeAmbiguous)}
                        />
                         <Checkbox
                        label='Exclude Brackets(<>()[]{})'
                        checked={excludeBrackets}
                        onChange={() => setExcludeBrackets(!excludeBrackets)}
                        /><br/>
                         <Checkbox
                        label='No Repeated Characters'
                        checked={noRepeatedChars}
                        onChange={() => setNoRepeatedChars(!noRepeatedChars)}
                        />
                    </FormField>
                    <Button type='submit' style={{ marginLeft: '100px' }}>Generate</Button>
                    {showResults && (
                        <div className="password-result">
                            <p>Generated Password: {generatedPassword}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Password;
