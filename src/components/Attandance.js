import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';


import '../App.scss';

export const Attandance = () => {
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'January', code: 'Option 1' },
        { name: 'February', code: 'Option 2' },
        { name: 'March', code: 'Option 3' },
        { name: 'April', code: 'Option 4' },
        { name: 'May', code: 'Option 5' },
        { name: 'June', code: 'Option 6' },
        { name: 'July', code: 'Option 7' },
        { name: 'August', code: 'Option 8' },
        { name: 'September', code: 'Option 9' },
        { name: 'Octomber', code: 'Option 10' },
        { name: 'November', code: 'Option 11' },
        { name: 'December', code: 'Option 12 ' },

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
        }, 60);
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, [value]);

    return (
        <>
            <div>
                <div className="col-12">
                    <div className='card'>
                        <h4>Attandance</h4>
                    </div>
                    <div className="card">

                        <div className="p-fluid formgrid grid">


                            <div className="field col-12 md:col-3">
                                <label htmlFor="state">Month</label>
                                <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select Month"></Dropdown>
                            </div>
                            <div className="col-10">
                                <div className="card">
                                    <h5>ProgressBar</h5>
                                    <div className="grid">

                                        <div className="col">
                                            <ProgressBar value={value} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
