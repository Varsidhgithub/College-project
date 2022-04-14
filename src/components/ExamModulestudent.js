import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import '../App.scss';

export const ExamModulestudent = () => {
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'english', code: 'Option 1' },
        { name: 'gujrati', code: 'Option 2' },
        { name: ' state', code: 'Option 3' },
        { name: ' account', code: 'Option 4' },
        { name: ' hindi', code: 'Option 5' },
        { name: ' social science', code: 'Option 6' },

    ];
    const [value, setValue] = useState(0);
    const interval = useRef(null);


    useEffect(() => {
        let val = value;
        interval.current = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                clearInterval(interval.current);
            }
            setValue(val);
        }, 2000);
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, [value]);

    return (
        <>

            <div className="col-12">
                <div className='card'>
                    <h4>Exam Module</h4>
                </div>
                <div className="card">

                    <div className="p-fluid formgrid grid">


                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">Subject</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>


                    </div>
                    <div className="p-fluid formgrid grid">


                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">Time Table</label>
                            <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />
                        </div>


                    </div>
                    <div className="p-fluid formgrid grid">


                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">Quetion Paper</label>
                            <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}
