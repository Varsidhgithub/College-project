import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';

import '../App.scss';

export const Resultmodule = () => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };


    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/resultmodule/createresult"><Button label="Create Result" icon="pi pi-check-circle" /></Link>
            </React.Fragment>
        );
    }
    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }




    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>

            <div >
                <div className='card'>
                    <span className="p-input-icon-right search">
                        <InputText type="text" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search" />
                        <i className="pi pi-search" />
                    </span>


                </div>
                <div className=" col-12 card">
                    {/* <DataTable value={products} responsiveLayout="scroll"> */}
                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Exam Name" filter style={{ minwidth: '5rem' }} filterPlaceholder="Search by Exam Name"></Column>
                        <Column field="name" header="Exam Date" dataType="date" style={{ minWidth: '10rem' }} filter filterElement={dateFilterTemplate} filterField="date"></Column>
                        <Column field="quantity" body={countryBodyTemplate2} header="Create Result"></Column>



                    </DataTable>


                </div>
            </div>
        </>
    );
}
