import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import '../App.scss';



export const Feesmanagement = () => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/feesmanagement"><Button label="View Receipt" icon="pi pi-eye" /></Link>
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
    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>

            <div>
                <div className='card'>
                    <span className="p-input-icon-right search">
                        <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                        <i className="pi pi-search" />
                    </span>
                    {/* <Link to="/admin/Faculty/addFaculty"><Button label="Add Faculty" icon="pi pi-plus" onClick={() => onClick('displayBasic')} /></Link> */}


                </div>
                <div className="card">
                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Student Name" filter filterPlaceholder='Search by Student Name'></Column>
                        <Column field="name" header="Standard"></Column>
                        <Column field="name" header="Payment"></Column>
                        <Column field="name" header="Date & Time" dataType="date" style={{ minWidth: '10rem' }} filter filterElement={dateFilterTemplate} filterField="date"></Column>
                        <Column field="name" header="Payment Mode" filter filterPlaceholder='Search by Payment Mode'>></Column>
                        <Column field="quantity" body={countryBodyTemplate} header="View Receipt"></Column>

                        <Column field="quantity" body={countryBodyTemplate1} header="Delete"></Column>

                    </DataTable>
                </div>
            </div>
        </>
    );
}
