import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { SiGooglepay } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import { GoCreditCard } from 'react-icons/go';
import { RiAmazonFill } from 'react-icons/ri';
import { Button } from 'primereact/button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Staffsalary() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const [cities, setCities] = useState([]);
    const dropdownItems = [
        { name: 'Teachers', code: 'Option 1' },
        { name: 'Principle', code: 'Option 2' },
        { name: 'Supervisor', code: 'Option 3' },
        { name: 'puan', code: 'Option 4' }
    ];

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
                <h4>Staff Salary Payment</h4>
            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="empname"> Employee Name</label>
                        <InputText id="empname" type="text" />
                    </div>
                    <div className="field col-12 md:col-3">
                        <label htmlFor="empno">Employee No.</label>
                        <InputText id="empno" type="number" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="category">Employee Category</label>
                        <Dropdown id="category" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="payment">Salary Payment</label>
                        <InputText id="payment" type="number" />
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
        </div >
    )
}

