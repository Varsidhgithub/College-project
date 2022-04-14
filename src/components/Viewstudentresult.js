import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProductService } from '../service/ProductService';
import { Row, Col } from 'react-bootstrap';


export function Viewstudentresult() {
    const [products, setProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const productService = new ProductService();
    const dt = useRef(null);

    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>
                <Link to="/ViewResult"><Button label="View" icon="pi pi-eye" /></Link>
            </React.Fragment>
        );
    }
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);
    return (
        <div>
            <div className='card'>
                <div className="field ">
                    <Row>
                        <Col md={6}>
                            <span className="p-input-icon-right search">
                                <InputText type="text" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search" />
                                <i className="pi pi-search" />
                            </span>
                        </Col>
                        <Col md={6} className="faculty">
                            <Link to="/student/Resultstudent"><Button label="Back" icon="pi pi-angle-left" className="p-button-primary" /></Link>
                        </Col>

                    </Row>
                </div>
            </div>
            <div className='card'>
                <h4>View Result</h4>
                <DataTable ref={dt} value={products}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                    <Column field="code" header="Roll No"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="name" header="ExamName" filter filterPlaceholder='Search by Examname'></Column>
                    <Column field="name" header="Subject 1"></Column>
                    <Column field="name" header="Subject 2"></Column>
                    <Column field="name" header="Subject 3"></Column>
                    <Column field="name" header="Subject 4"></Column>
                    <Column field="name" header="Subject 5"></Column>
                    <Column field="name" header="Total Marks"></Column>
                    <Column field="name" header="Pass/Fail"></Column>

                    <Column field="quantity" body={countryBodyTemplate2} header="View"></Column>


                </DataTable>
            </div>
        </div>

    )
}

