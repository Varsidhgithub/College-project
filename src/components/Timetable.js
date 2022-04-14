import React, { useState, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export function Timetable() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }
    const dropdownItems = [
        { name: 'Standard 1', code: 'Option 1' },
        { name: 'Standard 2', code: 'Option 2' },
        { name: 'Standard 3', code: 'Option 3' },
        { name: 'Standard 4', code: 'Option 3' },
        { name: 'Standard 5', code: 'Option 3' },
        { name: 'Standard 6', code: 'Option 3' },
        { name: 'Standard 7', code: 'Option 3' },
        { name: 'Standard 8', code: 'Option 3' },
        { name: 'Standard 9', code: 'Option 3' },
        { name: 'Standard 10', code: 'Option 3' },

    ];
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: 'Timetable Submitted', life: 3000 });
    };
    return (
        <div className="grid">
            <div className='col-12'>
                <div className='card'>
                    <h4>Timetable Management</h4>
                </div>
                <div className='card'>
                    <div className="p-fluid formgrid grid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="state">Select Classes</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>

                    </div>
                    <div className="p-fluid formgrid grid">

                        <div className="field col-12 md:col-7">
                            <label htmlFor="state">Upload Timetable </label>
                            <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="images/*" maxFileSize={2000000} />

                        </div>

                    </div>

                    <br></br>
                    <div className="p-fluid formgrid grid">

                        <div className="field col-12 md:col-2">
                            <Toast ref={toast} />
                            <Button icon="pi pi-check" onClick={showSuccess} label="Submit" />


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
