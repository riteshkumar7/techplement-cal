import React,{useState} from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import "./allfile.css"
const SalesandTax=()=>{

    const [showResults, setShowResults] = useState(false); 
    const [price, setPrice] = useState('');
    const [taxPercentage, setTaxPercentage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

        const handleSalesTax=(e)=>{
          e.preventDefault();
        const totalPriceValue = parseFloat(price) * (1 + parseFloat(taxPercentage) / 100) * parseInt(quantity);
          setTotalPrice(totalPriceValue.toFixed(2));
            setShowResults(true);
        }
  const navigate = useNavigate();
  const unitConversion=()=>{
    navigate("/unit");
}
    return(
        <div style={{backgroundColor:'whitesmoke',height:'646px'}}>
            <nav className='SI-nav'>
                <p style={{margin:'0 0 0 450px'}}>Sales and Tax Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div >
            <Form className={`salesTax ${showResults ? 'expanded' : ''}`}>
    <FormField>
      <label>Price</label>
      <input placeholder='Price' 
       value={price}
       onChange={(e) => setPrice(e.target.value)}
      />
    </FormField>
    <div style={{display:'flex',gap:'10px'}}>
    <FormField>
      <label>Tax %</label>
      <input placeholder='Tax %' style={{width:'225px'}}
         value={taxPercentage}
         onChange={(e) => setTaxPercentage(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Quantity</label>
      <input placeholder='Quantity' style={{width:'225px'}}
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
      />
    </FormField>
    </div>
    <Button type='submit' onClick={handleSalesTax} style={{marginLeft:'130px'}}>Sales-Tax calculate</Button>
    {showResults && (
    <div className='salesTax-result'>
         <p>Total Price :- {totalPrice}</p>   
    </div>
    )}
  </Form>
            </div>
        </div>
    )
}
export default SalesandTax;