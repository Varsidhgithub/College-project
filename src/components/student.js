import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import '../App.scss';
import { Row, Col } from 'react-bootstrap';



export const Student = () => {
    const toast = useRef(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState(emptyProduct);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
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
    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/ViewStudent"><Button label="View Profile" icon="pi pi-eye" /></Link>
            </React.Fragment>
        );
    }
    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <Button label="Delete" icon="pi pi-trash" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
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
                    <Row>
                        <Col sm={12} md={6} >
                            <span className="p-input-icon-right search">
                                <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                                <i className="pi pi-search" />
                            </span>
                        </Col>
                        <Col sm={12} md={6} className='add'>
                            <Link to="/admin/addStudent"><Button label="Add Student" icon="pi pi-plus" /></Link>
                        </Col>
                    </Row>
                </div>


                <div className="card">
                    <DataTable ref={dt} value={products} className="p-datatable-gridlines datatable-responsive"
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Image"></Column>
                        <Column field="name" header="First Name" filter filterPlaceholder="Search by First name" style={{ minWidth: '12rem' }}></Column>
                        <Column field="name" header="Last Name" filter filterPlaceholder="Search by Last name" style={{ minWidth: '12rem' }}></Column>
                        <Column field="name" header="Father Name" filter filterPlaceholder="Search by Father name" style={{ minWidth: '12rem' }}></Column>
                        <Column field="quantity" body={countryBodyTemplate} header="View Profile"></Column>
                        <Column field="quantity" body={countryBodyTemplate1} header="Delete"></Column>
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
