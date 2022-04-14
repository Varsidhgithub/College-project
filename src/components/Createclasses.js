import React from 'react'
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export function Createclasses() {
    return (
        <>
            <div className='card'>

                <span className="p-input-icon-right">
                    <span><Link to="/admin/onlineclass">Online Class Management</Link> / Create Online Classes</span>
                </span>


            </div>
            <div className='card'>
                <h5>Create Online Classes</h5>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-5">
                        <label htmlFor="subjectname">Subject Name</label>
                        <InputText id="subjectname" type="text" />
                    </div>
                    <div className="field col-12 md:col-5">
                        <label htmlFor="subjecttopic">Subject Topic</label>
                        <InputText id="subjecttopic" type="text" />
                    </div>

                    <div className="field col-12 md:col-3">
                        <label htmlFor="timing">Starting Time</label>
                        <InputText id="timing" type="time" />
                    </div>
                    <div className="field col-12 md:col-3">
                        <label htmlFor="duration">Class Duration (In Minutes)</label>
                        <InputText id="duration" type="number" />
                    </div>



                    <div className="field col-12 md:col-7">
                        <label htmlFor="link">Class Link </label>
                        <InputText id="link" type="text" />
                    </div>
                </div>
                <div className="online">
                    <Link to="/admin/onlineclass"><Button label="Submit" icon="pi pi-check" /></Link>

                </div>
            </div>
        </>
    )
}
