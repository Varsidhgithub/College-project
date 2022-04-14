import React, { useState, useEffect, useRef } from 'react';

import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';
import { Column } from 'primereact/column';

export function Complaint() {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <Button label="Delete" icon="pi pi-trash" />
            </React.Fragment>
        );
    }
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);
    return (
        <>
            <div className='card'>
                <span className="p-input-icon-right search">
                    <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                    <i className="pi pi-search" />
                </span>
            </div>
            <div className='card'>
                <h5> Student Complaints</h5>
                <DataTable ref={dt} value={products}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                    <Column field="code" header="Roll No." filter filterPlaceholder="Search by Roll no."></Column>
                    <Column field="name" header="Student Name" filter filterPlaceholder='Search by Student name'></Column>
                    <Column field="name" header="Complaints"></Column>
                    <Column field="quantity" body={countryBodyTemplate1} header="Delete"></Column>
                </DataTable>
            </div>
        </>
    )
}
