import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';

export const Attendecemanagement = () => {
    const [checkboxValue, setCheckboxValue] = useState([]);
    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked)
            selectedValue.push(e.value);
        else
            selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    const countryBodyTemplate = (rowData) => {


        return (
            <React.Fragment>
                <div className="field-checkbox">
                    <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />
                    <label htmlFor="checkOption1">Present</label>
                </div>
            </React.Fragment>
        );
    }
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);


    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <div className="field-checkbox">
                    <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />
                    <label htmlFor="checkOption1">Absent</label>
                </div>
            </React.Fragment>
        );
    }


    const [dropdownItem, setDropdownItem] = useState(null);
    const [products, setProducts] = useState([]);
    const toast = useRef(null);


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
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: 'Attendence Submitted', life: 3000 });
    };

    return (
        <div className="grid">

            <div className="col-12">
                <div className='card'>
                    <h4>Student Attendance Mangement</h4>
                </div>
                <div className="card">

                    <h5>Select Students Classes</h5>
                    <div className="p-fluid formgrid grid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="state">Select Standard</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>

                    </div>
                    <DataTable value={products} responsiveLayout="scroll">
                        <Column field="code" header="RollNo"></Column>
                        <Column field="name" header="Student Name"></Column>
                        <Column field="name" header="Date"></Column>
                        <Column field="name" body={countryBodyTemplate} header="Present"></Column>
                        <Column field="name" body={countryBodyTemplate1} header="Absent"></Column>


                    </DataTable>
                    <div className='sub'>
                        <Toast ref={toast} />
                        <Button onClick={showSuccess} icon="pi pi-check" className='btn3' label="submit" />
                    </div>

                </div>
            </div>
        </div>
    )
}
