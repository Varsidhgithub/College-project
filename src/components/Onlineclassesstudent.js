import { Button } from 'primereact/button'
import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export function Onlineclassesstudent() {
    const [products, setProducts] = useState(null);
    const productService = new ProductService();
    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Link><Button label="Join" icon='pi pi-eye' /></Link>
            </React.Fragment>
        );
    }
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);
    return (
        <div>
            <div className='card'>
                <h4>Online Classes</h4>
            </div>
            <div>

            </div>
            <div className='card cc'>
                <Row>
                    <Col md={6} sm={12} className="onlineclass">
                        <Button label='Upcoming Classes'></Button>
                    </Col>
                    <Col md={6} sm={12}>
                        <Button label='Previous / Expired Classes' className='b1'></Button>
                    </Col>
                </Row>
                <h6>Note :</h6>
                <p>How to join and attend on online classes?</p>
                <p>1.Make sure your internet Conection is of high speed and uninterrupted during the class.</p>
                <p>2.Click on join option for switching your session.</p>
                <p>3.Allow Camera option for switching on your video.</p>
                <p>4.join Audio by computer for switching on your audio.</p>
                <div>
                    <DataTable value={products} className="p-datatable-gridlines">
                        <Column field="code" header="Sr.no"></Column>
                        <Column field="name" header="Subject(Staff Name)"></Column>
                        <Column field="category" header="Topic/Agenda"></Column>
                        <Column field="quantity" header="Start Time"></Column>
                        <Column field="quantity" header="Duration(Minutes)"></Column>
                        <Column header="Action" body={countryBodyTemplate} ></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    )
}
