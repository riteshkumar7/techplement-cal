import "./unit.css"
import {useNavigate} from "react-router-dom"
const Unit=()=>{
    const nevigate=useNavigate();
    const handleAllUnit=(unitItem)=>{
        nevigate(`/${unitItem}`);
    }

    const handleOption=(e)=>{
        const selectoption = e.target.value;
        handleAllUnit(selectoption);
    }

    const home=()=>{
          nevigate("/home");
    }

    return(
        <div>
            <nav className="containers">
                <h1 className="heads">Calculator-Unit Converter</h1>
                <button onClick={home} className="home-button">Home</button>
                </nav>
                <div className="select-unit">
                    <table border={0} className="unit-table">
                        <tr>
                            <td className="U-td">
                            <div>
                                <img src="./financial.png" className="U-img"/>
                                <p className="tab-U">Financial Calculator<br/>
                                <select className="selectItem" onChange={handleOption}>
                                <option> Calculator</option>
                                    <option value="SimpleInterest">Simple Interest Calculator</option>
                                    <option value="CompoundInterest">Compound Interest Calculator</option>
                                    <option value="Salary">Salary Calculato</option>
                                    <option value="Retirement">Retirement Calculator</option>
                                    <option value="SalesandTax">Sales and Tax Calculator</option>
                                </select>
                                </p>
                            </div>
                            </td>
                            <td className="U-td">
                            <div>
                                <img src="./health-fitness.png" className="U-img"/>
                                <p className="tab-U">Health and Fitness Calculators
                                <select className="selectItem" onChange={handleOption}>
                                <option> Calculator</option>
                                    <option value="BMI">BMI Calculato</option>
                                    <option value="BMR">BMR Calculator</option>
                                    <option value="Calorie">Calorie Calculator</option>
                                    <option value="BodyFat">Body Fat Calculator</option>
                                    <option value="IdealWeight">Ideal Weight Calculator</option>
                                </select>
                                </p>
                            </div>
                            </td>
                            <td className="U-td">
                            <div>
                                <img src="./conversion.png" className="U-img" style={{backgroundColor:"black"}}/>
                                <p className="tab-U">Conversion Calculator<br/>
                                <select className="selectItem" onChange={handleOption}>
                                <option> Calculator</option>
                                    <option value="Length">Length Calculator</option>
                                    <option value="Age">Age Calculator</option>
                                    <option value="HourMinuteSecond">Hour to Minute & Seconds Calculator</option>
                                    <option value="Date">Date Calculator</option>
                                    <option value="GPA">GPA Calculator</option>
                                    <option value="Password">Password Generator</option>
                                    <option value="BillandTip">Bill and Tip Calculator</option>
                                    <option value="Height">Height Calculator</option>
                                </select>
                                </p>
                            </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="U-td">
                            <div>
                                <img src="./geo.png" className="U-img" />
                                <p className="tab-U">Geometry Calculators<br/>
                                <select className="selectItem" onChange={handleOption}>
                                <option> Calculator</option>
                                    <option value="twoDimension">2D Distance Calculator</option>
                                    <option value="ThreeDimension">3D Distance Calculator</option>
                                    <option value="EquilateralTriangle">Equilateral Triangle Calculator</option>
                                    <option value="IsoscelesTriangle">Isosceles Triangle Calculator</option>
                                    <option value="RightAngledTriangle">Right-Angled Triangle Calculator</option>
                                    <option value="Cube">Cube Calculator</option>
                                    <option value="Cone">Cone Calculator</option>
                                    <option value="Circle">Circle Calculator</option>
                                    <option value="Cylinder">Cylinder Calculator</option>
                                    <option value="Rectangle">Rectangle Calculator</option>
                                    <option value="Square">Square Calculator</option>
                                    <option value="Sphere">Sphere Calculator</option>
                                </select>
                                </p>
                            </div>
                            </td>
                            <td className="U-td">
                            <div>
                                <img src="./math-alebra.png" className="U-img" />
                                <p className="tab-U">Math and Algebra Calculators
                                <select className="selectItem" onChange={handleOption}>
                                <option> Calculator</option>
                                    <option value="Inequality">Inequality Calculator</option>
                                    <option value="FlowRate">Flow Rate Calculator</option>
                                    <option value="Impulse">Impulse Calculator</option>
                                    <option value="Factorization">Factorization Calculator</option>
                                    <option value="Percentage">Percentage Calculator</option>
                                </select>
                                </p>
                                
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}
export default Unit;