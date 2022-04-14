import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';

export function InterestforInquiry() {
    const [radioValue, setRadioValue] = useState(null);

    return (
        <div>
            <div className='card'>
                <h4>Interest for Inquiry</h4>
            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="name2">Name</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="phoneno2">Phone No</label>
                        <InputText id="phoneno2" type="text" />
                    </div>
                </div>

                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="date2">Date</label>
                        <InputText id="date2" type="text" />
                    </div>
                </div>
                <div>

                    <div className="grid">
                        <h6 className='ps-2 pt-2'>Highest degree you have earned: </h6>
                        <div className="col-12 md:col-2">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option1" name="option" value="Chicago" checked={"Chicago" === radioValue} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option1">BCA</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-2">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option2" name="option" value="Los Angeles" checked={"Los Angeles" === radioValue} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option2">B.COM</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-2">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={"New York" === radioValue} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">B.B.A</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-2">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="USA" checked={"USA" === radioValue} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">BA</label>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="name2">Course Interest</label>
                        <InputText id="name2" type="text" />
                    </div>

                </div>
                <div>
                    <p>How did you learn about the program?

                    </p>
                    <InputText id="name2" type="text" />
                </div>
                <div className='bb'>
                    <Button label='Submit' icon="pi pi-check"></Button>
                </div>
            </div>
        </div>
    )
}
