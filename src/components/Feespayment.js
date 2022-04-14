import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { SiGooglepay } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import { GoCreditCard } from 'react-icons/go';
import { RiAmazonFill } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';



export function FeesPayment() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    const [cities, setCities] = useState([]);
    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }
    return (
        <div>
            <div className='card'>
                <h4>Fees Payment</h4>
            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="name2">Name</label>
                        <InputText id="name2" type="text" disabled />
                    </div>
                    <div className="field col-12 md:col-3">
                        <label htmlFor="rollno2">RollNo</label>
                        <InputText id="rollno2" type="text" disabled />
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="standard">Standard</label>
                        <Dropdown id="standard" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="state">FeesPayment</label>
                        <InputText id="rollno2" type="text" disabled />
                    </div>
                    <div className='pt-5'>
                        <h5 className='pb-3'>Payment Mode</h5>
                        <Row>
                            <Col>
                                <Link to="https://pay.google.com/" target="_blank">
                                    <div className="field-checkbox line" title='Google Pay'>

                                        <SiGooglepay className='big' title='Google Pay' />
                                    </div>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="https://www.onlinesbi.com/" target="_blank" >
                                    <div className="field-checkbox  line" title='Net Banking'>

                                        <BsBank className='big' title='Net Banking' /><br />

                                    </div>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="https://paymate.in/" target="_blank">
                                    <div className="field-checkbox line" title="Payment Using Debit Card">

                                        <GoCreditCard className='big' title="Payment Using Debit Card" />
                                    </div>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="https://www.amazon.in/amazonpay/home" target="_blank">
                                    <div className="field-checkbox line" title='Amazon Pay'>

                                        <RiAmazonFill className="big" title='Amazon Pay' />
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='pay'>
                    <Button label="Pay" icon="pi pi-check" className="p-button-primary" />
                </div>
            </div>
        </div>
    )
}
