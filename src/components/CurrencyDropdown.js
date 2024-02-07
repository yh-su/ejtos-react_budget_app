import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const currencyNames = {
        '$': "Dollar",
        '£': "Pound",
        '€': "Euro",
        '₹': "Ruppee"
    };

    const [newCurrency, setNewCurrency] = useState(currency + ' ' + currencyNames[currency]);
    const [selected, setSelected] = useState("default");

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
        setNewCurrency(event.target.value + ' ' + currencyNames[event.target.value]);
        setSelected("default");
    }

    return(<div className='alert alert-secondary'>
        <select className="custom-select" id="currencySelect" onChange={handleCurrencyChange} value={selected}
                style={{backgroundColor: '#90EE90', color: 'white', border:'none', borderRadius: '3px', padding:'5px'}}>
                <option value= "default" selected disabled hidden>Currency ({newCurrency})</option>
                <option value="$" name="dollar" style={{color: 'black',border:'1px'}}>$ Dollar</option>
                <option value="£" name="pound" style={{color: 'black',border:'1px'}}>£ Pound</option>
                <option value="€" name="euro" style={{color: 'black',border:'1px'}}>€ Euro</option>
                <option value="₹" name="ruppee" style={{color: 'black',border:'1px'}}>₹ Ruppee</option>
        </select>
    </div>);
}
export default CurrencyDropdown;