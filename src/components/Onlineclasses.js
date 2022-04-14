import React, { useState, useEffect, useRef } from 'react';

// PrimeReact
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { ProductService } from '../service/ProductService';
import { InputText } from 'primereact/inputtext';


export function Onlineclasses() {
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/onlineclasses/createclasses"><Button label="Create Classes" icon="pi pi-video" /></Link>
            </React.Fragment>
        );
    }
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
                <h5>Previous Classes / Expired Classes</h5>

                <DataTable ref={dt} value={products}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                    <Column field="code" header="Sr. No."></Column>
                    <Column field="name" header="Subject" filter filterPlaceholder='Search by Subject'></Column>
                    <Column field="name" header="Topic(Agenda)"></Column>
                    <Column field="name" header="Start Time"></Column>
                    <Column field="quantity" header="Duration(Minutes)"></Column>
                    <Column field="quantity" body={countryBodyTemplate} header="Create Classes"></Column>

                    <Column field="quantity" body={countryBodyTemplate1} header="Delete"></Column>

                </DataTable>

            </div>
        </>

    );
}
