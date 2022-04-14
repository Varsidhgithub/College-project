import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import '../App.scss';
import { Col, Row } from 'react-bootstrap';



export const Faculty = () => {

    const [products, setProducts] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);


    const dialogFuncMap = {
        // 'displayBasic': setDisplayBasic,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        // if (position) {
        //     setPosition(position);
        // }
    }


    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/admin/viewfaculty"><Button label="View Profile" icon="pi pi-eye" /></Link>
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

    const productService = new ProductService();
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>

            <div>
                <div className='card'>
                    <Row>
                        <Col md={6} sm={12}>

                            <span className="p-input-icon-right search">
                                <InputText type="text" placeholder="Search" onInput={(e) => setGlobalFilter(e.target.value)} />
                                <i className="pi pi-search" />
                            </span>
                        </Col>
                        <Col md={6} sm={12} className="faculty">

                            <Link to="/admin/Faculty/addFaculty"><Button label="Add Faculty" icon="pi pi-plus" onClick={() => onClick('displayBasic')} /></Link>
                        </Col>
                    </Row>


                </div>
                <div className="card">
                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        <Column field="code" header="Image"></Column>
                        <Column field="name" header="First Name" filter filterPlaceholder="Search by First name" style={{ minWidth: '9rem' }}></Column>
                        <Column field="name" header="Last Name" filter filterPlaceholder="Search by First name" style={{ minWidth: '9rem' }}></Column>
                        <Column field="name" header="Subject Name" filter filterPlaceholder="Search by Subject Name" style={{ minWidth: '8rem' }}></Column>
                        <Column field="name" header="Mobile No" filter filterPlaceholder="Search by Mobile No" style={{ minWidth: '8rem' }}></Column>
                        <Column field="quantity" body={countryBodyTemplate} header="View Profile"></Column>

                        <Column field="quantity" body={countryBodyTemplate1} header="Delete"></Column>

                    </DataTable>
                </div>
            </div>
        </>
    );
}
