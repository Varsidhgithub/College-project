import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { InputTextarea } from 'primereact/inputtextarea';

import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';
import '../App.scss';



export const Resultstudent = () => {
    const toast = useRef(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState();
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);

    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/student/viewstudentresult"><Button label="View" icon="pi pi-eye" /></Link>
            </React.Fragment>
        );
    }

    const productService = new ProductService();
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct();
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </>
    );

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    return (
        <>

            <div>
                <div className='card'>
                    <span className="p-input-icon-right search">
                        <InputText type="text" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search" />
                        <i className="pi pi-search" />
                    </span>


                </div>
                <div className="card">
                    <h4>Result</h4>

                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Roll No" filter filterPlaceholder='Search by Roll no'></Column>
                        <Column field="name" header="Name" filter filterPlaceholder='Search by Name'></Column>
                        <Column field="name" header="ExamName" filter filterPlaceholder='Search by ExamName'></Column>
                        <Column field="name" header="Total Marks"></Column>
                        <Column field="name" header="Pass/Fail"></Column>
                        <Column field="quantity" body={countryBodyTemplate2} header="View"></Column>
                    </DataTable>

                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                        </div>
                    </Dialog>

                </div>
            </div>
        </>
    );
}