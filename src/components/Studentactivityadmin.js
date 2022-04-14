import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import '../App.scss';

export const Studentactivityadmin = () => {
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const dt = useRef(null);

    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked)
            selectedValue.push(e.value);
        else
            selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    const columns = [
        { field: 'code', header: 'CourseName' },

    ];
    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>

                <Button label="Delete" icon='pi pi-trash' />
            </React.Fragment>
        );
    }
    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>

                <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />

            </React.Fragment>
        );
    }
    const countryBodyTemplate3 = (rowData) => {
        return (
            <React.Fragment>

                <Checkbox inputId="checkOption2" name="option" value="aab" checked={checkboxValue.indexOf('aab') !== -1} onChange={onCheckboxChange} />

            </React.Fragment>
        );
    }
    const countryBodyTemplate4 = (rowData) => {
        return (
            <React.Fragment>

                <Link to='/admin/studentactivity/work-image'><Button label="View Work Images" icon='pi pi-eye' /></Link>
            </React.Fragment>
        );
    }




    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <>
            <div>
                <div className='card'>
                    <span className="p-input-icon-right search">
                        <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                        <i className="pi pi-search" />
                    </span>

                </div>

                <div className="card">
                    <h5>Student Activity</h5>
                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        {dynamicColumns}

                        <Column header='Student' body={countryBodyTemplate2} />
                        <Column header='Faculty' body={countryBodyTemplate3} />
                        <Column header='Student Work' body={countryBodyTemplate4} />
                        <Column header='Delete' body={countryBodyTemplate1} />

                    </DataTable>
                </div>
            </div>



        </>
    );
}