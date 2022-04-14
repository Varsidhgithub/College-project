import React, { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';



export function Createresult() {
    const [dropdownItem, setDropdownItem] = useState(null);
    const [globalFilter] = useState(null);
    const [selectedProducts] = useState(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();
    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>

                <InputText className="col-12 md:col-8" id="subject1" type="text" />

            </React.Fragment>
        );
    }
    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>
                <InputText className=" col-12 md:col-8" id="subject2" type="text" />
            </React.Fragment>
        );
    }
    const countryBodyTemplate3 = (rowData) => {
        return (
            <React.Fragment>
                <InputText className=" col-12 md:col-8" id="subject3" type="text" />
            </React.Fragment>
        );
    }
    const countryBodyTemplate4 = (rowData) => {
        return (
            <React.Fragment>
                <InputText className=" col-12 md:col-8" id="subject4" type="text" />
            </React.Fragment>
        );
    }
    const countryBodyTemplate5 = (rowData) => {
        return (
            <React.Fragment>
                <InputText className="col-12 md:col-8" id="subject5" type="text" />
            </React.Fragment>
        );
    }
    const countryBodyTemplate6 = (rowData) => {
        return (
            <React.Fragment>
                <InputText className=" col-12 md:col-12" id="totalmarks" type="text" placeholder="marks" disabled />
            </React.Fragment>
        );
    }
    const countryBodyTemplate7 = (rowData) => {
        return (
            <React.Fragment>
                <Dropdown className="select" id="passfail" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItem1} optionLabel="name" placeholder="Select"></Dropdown>
            </React.Fragment>
        );
    }
    const countryBodyTemplate8 = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/resultmodules"><Button label="Submit" icon="pi pi-check" /></Link>
            </React.Fragment>
        );
    }
    const dt = useRef(null);
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
    const dropdownItem1 = [
        { name: 'Pass', code: 'Option 1' },
        { name: 'Fail', code: 'Option 2' },

    ];
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className='card col-12'>
                <span className="p-input-icon-right search1">
                    <span><Link to="/admin/resultmodules">Result Management</Link> / Create Result</span>
                </span>


            </div>
            <div className='card'>
                <h5>Create Result :</h5>


                <div className="field col-12 md:col-6">
                    <label htmlFor="state">Select Classes</label>
                    <Dropdown className="select" id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                </div>

                <div className="field col-12 ">
                    <DataTable ref={dt} value={products} selection={selectedProducts}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Student Name"></Column>
                        <Column field="name" body={countryBodyTemplate1} header="Subject 1"></Column>
                        <Column field="name" body={countryBodyTemplate2} header="Subject 2"></Column>
                        <Column field="name" body={countryBodyTemplate3} header="Subject 3"></Column>
                        <Column field="name" body={countryBodyTemplate4} header="Subject 4"></Column>
                        <Column field="name" body={countryBodyTemplate5} header="Subject 5"></Column>
                        <Column field="name" body={countryBodyTemplate6} header="Total Marks"></Column>
                        <Column field="name" body={countryBodyTemplate7} header="Pass & Fail"></Column>
                        <Column field="quantity" body={countryBodyTemplate8} header="Submit Result"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    )
}

