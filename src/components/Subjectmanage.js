import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export function Subjectmanage() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const [dropdownItem1, setDropdownItem1] = useState(null);

    const dropdownItems = [
        { name: 'abc', code: 'Option 1' },
        { name: 'abc1', code: 'Option 2' },
        { name: 'abc3', code: 'Option 3' },
        { name: 'abc4', code: 'Option 4' }
    ];
    const dropdownItems1 = [
        { name: 'Gujrati', code: 'Option 1' },
        { name: 'English', code: 'Option 2' },
        { name: 'Hindi', code: 'Option 3' },
        { name: 'Maths', code: 'Option 4' },
        { name: 'Science', code: 'Option 5' },
        { name: 'Economices', code: 'Option 6' },
        { name: 'Account', code: 'Option 7' },
        { name: 'Statistics', code: 'Option 8' },
    ];

    return (
        <div>
            <div className='card'>
                <h4>Subject Management</h4>
            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">

                    <div className="field col-12 md:col-5">
                        <label htmlFor="standard">Faculty Name</label>
                        <Dropdown id="standard" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>



                </div>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-5">
                        <label htmlFor="state">Subject Name</label>
                        <Dropdown id="standard" value={dropdownItem1} onChange={(e) => setDropdownItem1(e.value)} options={dropdownItems1} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>

                </div>
                <div className='pay'>
                    <Button label="Submit" icon="pi pi-check" className="p-button-primary" />
                </div>
            </div>
        </div>
    )
}