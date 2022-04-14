import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export function Timetablestudent() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: ' Standard 1', code: 'Option 1' },
        { name: ' Standard 2', code: 'Option 2' },
        { name: ' Standard 3', code: 'Option 3' },
        { name: ' Standard 4', code: 'Option 4' },
        { name: ' Standard 5', code: 'Option 5' },
        { name: ' Standard 6', code: 'Option 6' },
        { name: ' Standard 7', code: 'Option 7' },
        { name: ' Standard 8', code: 'Option 8' },
        { name: ' Standard 9', code: 'Option 9' },
        { name: ' Standard 10', code: 'Option 10' },


    ];
    return (
        <div>
            <div className='card'>
                <h4>TimeTable</h4>

            </div>
            <div className='card'>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-3">
                        <label htmlFor="state">Select Standard</label>
                        <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>


                </div>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-3">
                        <label htmlFor="timetable">Time Table</label>
                        <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}
