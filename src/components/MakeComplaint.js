import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


export function MakeComplaint() {
    return (
        <div>
            <div className='card'>
                <h4>MakeComplaint</h4>
            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-2">
                        <label htmlFor="firstname2">Roll.No</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div className="field col-12 md:col-3">
                        <label htmlFor="firstname2">Standard</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div className="field col-12 md:col-8">
                        <label htmlFor="lastname2">Name</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="address">Complaint</label>
                        <InputTextarea id="address" rows="6" />
                    </div>
                </div>
                <div className='bb'>
                    <Button label='Submit'></Button>
                </div>
            </div>
        </div>
    )
}
