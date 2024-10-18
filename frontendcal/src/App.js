import './App.css';
import { Route, Routes } from "react-router-dom";
import Calculate from './calculate/calculate';

import Login from "./Login/login" 

import Home from './Home/home';
import Unit from './unitconverter/unit';
import SimpleInterest from './Allfile/financial/SimpleInterest';
import CompoundInterest from './Allfile/financial/CompoundInterest';
import Salary from './Allfile/financial/Salary';
import Retirement from './Allfile/financial/Retirement';
import SalesandTax from './Allfile/financial/SalesandTax';

import BMI from './Allfile/healthfitness/BMI';
import BMR from './Allfile/healthfitness/BMR';
import BodyFat from './Allfile/healthfitness/BodyFat';
import Calorie from './Allfile/healthfitness/Calorie';
import IdealWeight from './Allfile/healthfitness/IdealWeight';

import Age from './Allfile/conversion/Age';
import BillandTip from './Allfile/conversion/BillandTip';
import Date from './Allfile/conversion/Date';
import GPA from './Allfile/conversion/GPA';
import Height from './Allfile/conversion/Height';
import HourMinuteSecond from './Allfile/conversion/HourMinuteSecond';
import Length from './Allfile/conversion/Length';
import Password from './Allfile/conversion/Password';

import TwoDimension from './Allfile/geometry/twoDimension';
import ThreeDimension from './Allfile/geometry/ThreeDimension';
import EquilateralTriangle from './Allfile/geometry/EquilateralTriangle';
import IsoscelesTriangle from './Allfile/geometry/IsoscelesTriangle';
import RightAngledTriangle from './Allfile/geometry/RightAngledTriangle';
import Circle from './Allfile/geometry/Circle';
import Cube from './Allfile/geometry/Cube';
import Cone from './Allfile/geometry/Cone';
import Cylinder from './Allfile/geometry/Cylinder';
import Rectangle from './Allfile/geometry/Rectangle';
import Sphere from './Allfile/geometry/Sphere';
import Square from './Allfile/geometry/Square';

import Inequality from './Allfile/MathAlgebra/Inequality';
import FlowRate from './Allfile/MathAlgebra/FlowRate';
import Impulse from './Allfile/MathAlgebra/Impulse';
import Factorization from './Allfile/MathAlgebra/Factorization';
import Percentage from './Allfile/MathAlgebra/Percentage';
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/calculate" element={<Calculate />}/>
        <Route path="/unit" element={<Unit />}/>
        <Route path="/SimpleInterest" element={<SimpleInterest />}/>
        <Route path="/CompoundInterest" element={<CompoundInterest />}/>
        <Route path="/Salary" element={<Salary/>}/>
        <Route path="/Retirement" element={<Retirement/>}/>
        <Route path="/SalesandTax" element={<SalesandTax/>}/>

        <Route path="/BMI" element={<BMI/>}/>
        <Route path="/BMR" element={<BMR/>}/>
        <Route path="/BodyFat" element={<BodyFat/>}/>
        <Route path="/Calorie" element={<Calorie/>}/>
        <Route path="/IdealWeight" element={<IdealWeight/>}/>

        <Route path="/Age" element={<Age/>}/>
        <Route path="/BillandTip" element={<BillandTip/>}/>
        <Route path="/Date" element={<Date/>}/>
        <Route path="/GPA" element={<GPA/>}/>
        <Route path="/Height" element={<Height/>}/>
        <Route path="/HourMinuteSecond" element={<HourMinuteSecond/>}/>
        <Route path="/Length" element={<Length/>}/>
        <Route path="/Password" element={<Password/>}/>

        <Route path="/twoDimension" element={<TwoDimension/>}/>
        <Route path="/ThreeDimension" element={<ThreeDimension/>}/>
        <Route path="/EquilateralTriangle" element={<EquilateralTriangle/>}/>
        <Route path="/IsoscelesTriangle" element={<IsoscelesTriangle/>}/>
        <Route path="/RightAngledTriangle" element={<RightAngledTriangle/>}/>
        <Route path="/Rectangle" element={<Rectangle/>}/>
        <Route path="/Cube" element={<Cube/>}/>
        <Route path="/Circle" element={<Circle/>}/>
        <Route path="/Cylinder" element={<Cylinder/>}/>
        <Route path="/Sphere" element={<Sphere/>}/>
        <Route path="/Square" element={<Square/>}/>
        <Route path="/Cone" element={<Cone/>}/>

        <Route path="/Inequality" element={<Inequality/>}/>
        <Route path="/FlowRate" element={<FlowRate/>}/>
        <Route path="/Impulse" element={<Impulse/>}/>
        <Route path="/Factorization" element={<Factorization/>}/>
        <Route path="/Percentage" element={<Percentage/>}/>
        </Routes>
    </div>
  );
}

export default App;
