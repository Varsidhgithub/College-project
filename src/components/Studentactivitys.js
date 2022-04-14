import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { FileUpload } from 'primereact/fileupload';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Col, Row } from 'react-bootstrap';
import '../App.scss';

export const Studentactivitys = () => {

    const [checkboxValue, setCheckboxValue] = useState([]);
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const [dropdownItem1, setDropdownItem1] = useState(null);
    const dropdownItems1 = [
        { name: 'Web Desiging', code: 'Option 1' },
        { name: 'Fullstack devloper', code: 'Option 2' },
        { name: 'Python', code: 'Option 3' },
        { name: 'Tally', code: 'Option 4' },
        { name: 'Game Developer', code: 'Option 5' }

    ];

    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked)
            selectedValue.push(e.value);
        else
            selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    const columns = [
        { field: 'code', header: 'CourseName' },

    ];
    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>

                <Checkbox name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />

            </React.Fragment>
        );
    }

    const countryBodyTemplate4 = (rowData) => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
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
                <div className='card'>
                    <Row>
                        <Col md={6} sm={12}>
                            <span className="p-input-icon-right">
                                <h4>Student Activity</h4>
                            </span>
                        </Col>
                        <Col md={6} sm={12} className="courses">

                            <Dropdown id="state" value={dropdownItem1} onChange={(e) => setDropdownItem1(e.value)} options={dropdownItems1} optionLabel="name" placeholder="Select Courses  "></Dropdown>
                        </Col>

                    </Row>

                </div>
                <div className="card">

                    <DataTable ref={dt} value={products}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No products found." responsiveLayout="scroll">
                        {dynamicColumns}

                        <Column header='Student' body={countryBodyTemplate2} />
                        <Column header='Work upload' body={countryBodyTemplate4} />

                    </DataTable>
                </div>
            </div>
        </>
    );
}
