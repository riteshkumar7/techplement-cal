import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import './conversion.css';
import { useNavigate } from 'react-router-dom';

const BillandTip = () => {
    const [showResults, setShowResults] = useState(false);
    const [price, setPrice] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [gstPercentage, setGstPercentage] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [tipAmount, setTipAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [totalBillAmount, setTotalBillAmount] = useState('');

    const handleSubmit = () => {
        const totalPrice = parseFloat(price);
        const tipPercent = parseFloat(tipPercentage);
        const gstPercent = parseFloat(gstPercentage);
        const peopleCount = parseInt(numPeople);

        if (!isNaN(totalPrice) && !isNaN(tipPercent) && !isNaN(gstPercent) && !isNaN(peopleCount) && peopleCount > 0) {
            const tip = totalPrice * (tipPercent / 100);
            const gst = totalPrice * (gstPercent / 100);
            const totalBill = totalPrice + tip + gst;
            const billPerPerson = totalBill / peopleCount;

            setTipAmount(tip.toFixed(2));
            setTotalAmount(billPerPerson.toFixed(2));
            setTotalBillAmount(totalBill.toFixed(2));
            setShowResults(true);
        }
    }

    const navigate = useNavigate();
    const unitConversion=()=>{
      navigate("/unit");
  }

    return (
        <div className="billTip">
            <nav className="conversion-nav">
                <p style={{margin:'0 0 0 450px'}}>Bill and Tip Calculator</p>
                <button className='nav-button' onClick={unitConversion}>Go To Unit Conversion</button>
            </nav>
            <div>
                <Form className={`billtip-form ${showResults ? 'expanded' : ''}`} onSubmit={handleSubmit}>
                    <FormField>
                        <label>Price</label>
                        <input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </FormField>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FormField>
                            <label>Tip %</label>
                            <input placeholder='Tip %' style={{ width: '200px' }} value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} />
                        </FormField>
                        <FormField>
                            <label>GST %</label>
                            <input placeholder='GST %' style={{ width: '200px' }} value={gstPercentage} onChange={(e) => setGstPercentage(e.target.value)} />
                        </FormField>
                    </div>
                    <FormField>
                        <label>Number of People</label>
                        <input placeholder='Number of People' value={numPeople} onChange={(e) => setNumPeople(e.target.value)} />
                    </FormField>
                    <Button type='submit' style={{ marginLeft: '110px' }}>Bill & Tip Calculate</Button>
                    {showResults && (
                        <div className="billtip-result">
                            <p>Tip: {tipAmount}</p>
                            <p>Total Amount per Person: {totalAmount}</p>
                            <p>Total Bill Amount: {totalBillAmount}</p>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    )
}

export default BillandTip;
