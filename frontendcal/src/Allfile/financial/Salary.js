import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./allfile.css"
const Salary = () => {
  const [showResults, setShowResults] = useState(false); 
  const [grossSalary, setGrossSalary] = useState('');
  const [basicSalary, setBasicSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [otherAllowances, setOtherAllowances] = useState(0);
  const [pf, setPf] = useState(0);
  const [esi, setEsi] = useState(0);
  const [professionTax, setProfessionTax] = useState(0);
  const [tds, setTds] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [salaryType, setSalaryType] = useState('yearly');
  

  const handleCalculate = (e) => {
    e.preventDefault(); 

    
    const gross = parseFloat(grossSalary);
    let BasicSalary = 0;
    let Hra = 0;
    let OtherAllowances = 0;

    if (salaryType === 'yearly') {
      BasicSalary = gross / 2; 
      Hra = BasicSalary * 0.3;
      OtherAllowances = BasicSalary * 0.1;
    } else {
      BasicSalary = gross/2;
      Hra = BasicSalary * 0.3;
      OtherAllowances = BasicSalary * 0.1;
    }

    const Pf = BasicSalary * 0.12;
    const Esi = BasicSalary * 0.03;
    const ProfessionTax = 200;
    const Tds = (BasicSalary + Hra + OtherAllowances) * 0.1;
    const NetAmount = gross - (Pf + Esi + ProfessionTax + Tds);

    setBasicSalary(BasicSalary.toFixed(2));
    setHra(Hra.toFixed(2));
    setOtherAllowances(OtherAllowances.toFixed(2));
    setPf(Pf.toFixed(2));
    setEsi(Esi.toFixed(2));
    setProfessionTax(ProfessionTax.toFixed(2));
    setTds(Tds.toFixed(2));
    setNetAmount(NetAmount.toFixed(2));

    setShowResults(true); 
  };

  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}
  return (
    <div style={{ backgroundColor: 'whitesmoke', height: '646px' }}>
      <nav className='SI-nav'>
        <p style={{margin:'0 0 0 450px'}}>Salary Calculator</p>
        <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
      </nav>
      <div>
        <Form className={`salary ${showResults ? 'expanded' : ''}`} onSubmit={handleCalculate}>
          <FormField>
            <label>Gross Salary</label>
            <div style={{ display: "flex", gap: '10px' }}>
              <input placeholder='Gross Salary' 
              value={grossSalary}
              onChange={(e)=>setGrossSalary(e.target.value)}
              />
              <select style={{ width: '150px'}}
              value={salaryType}
              onChange={(e) => setSalaryType(e.target.value)}
              >
                <option value="yearly">Year</option>
                <option value="monthly">Month</option>
              </select>
            </div>
          </FormField>
          <Button type='submit' style={{ marginLeft: "130px" }}>Salary Calculate</Button>
          {showResults && (
            <div className='results'>
              <p>Basic Salary :- {basicSalary}</p>
              <div style={{ display: 'flex' }}>
                <div>
                  <h3>Allowances</h3>
                  <p>HRA :- {hra}</p>
                  <p>Other :- {otherAllowances}</p>
                  <h3>Deductions</h3>
                  <p>PF :- {pf}</p>
                  <p>ESI :- {esi}</p>
                  <p>Profession Tax :- {professionTax}</p>
                </div>
                <div style={{ marginLeft: '110px' }}>
                  <p>TDS :- {tds}</p>
                  <p>Net Amount :- {netAmount}</p>
                </div>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Salary;
