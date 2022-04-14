import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import '../App.scss';

export const Addinstitute = () => {

    return (

        <div>
            <div className='card'>
                <span><Link to="/super-admin/Institutemanagement">Manage Institute</Link> / Add Institute</span>

            </div>
            <div className="grid">


                <div className="col-12">
                    <div className="card">
                        <h5>Institute Details</h5>
                        <div className="p-fluid formgrid grid">
                            <div className="field col-12 md:col-8">
                                <label htmlFor="Institutename">Institute Name</label>
                                <InputText id="Institutename" type="text" />
                            </div>

                            <div className="field col-12 md:col-6">
                                <label htmlFor="loginid">Login id</label>
                                <InputText id="loginid" type="email" />
                            </div>
                            <div className="field col-12 md:col-5">
                                <label htmlFor="password">Password</label>
                                <InputText id="password" type="text" />
                            </div>


                            <div className="field col-12 md:col-6">
                                <label htmlFor="mobile">Mobile No.</label>
                                <InputText id="mobile" type="number" />
                            </div>

                            <div className="field col-12 md:col-3">
                                <label htmlFor="dateofjoin">Date Of Join</label>
                                <InputText id="dateofjoin" type="date" />
                            </div>

                        </div>
                        <div>
                            <Button label="Submit" icon="pi pi-check" />

                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}
