import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


import { Dialog } from 'primereact/dialog';

import '../App.scss';

export const Courses = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,

    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const [products, setProducts] = useState([]);
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Back" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Submit" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
    ];
    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link to='/admin/viewcourses'><Button label="View" icon='pi pi-eye' /></Link>
            </React.Fragment>
        );
    }
    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>

                <Button label="Delete" icon='pi pi-trash' />
            </React.Fragment>
        );
    }




    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <>
            <div>
                <div className='top'>

                    <div className='card'>
                        <span className="p-input-icon-right search">
                            <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                            <i className="pi pi-search" />
                        </span>
                        <Button label="Add Courses" icon="pi pi-plus" onClick={() => onClick('displayBasic')} />

                    </div>
                    <Dialog header="Add Courses" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                        <div className='card'>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <div className="card p-fluid">

                                        <div className="field">
                                            <label htmlFor="name1">Courses</label>
                                            <InputText id="name1" type="text" />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
                <div className="card">
                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        {dynamicColumns}
                        <Column header='View' body={countryBodyTemplate} />
                        <Column header='Delete' body={countryBodyTemplate1} />
                    </DataTable>
                </div>
            </div>



        </>
    );
}
