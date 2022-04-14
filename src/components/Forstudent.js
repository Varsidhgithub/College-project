import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { FileUpload } from 'primereact/fileupload';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import '../App.scss';

export const For_Student = () => {
    const [products, setProducts] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState([]);
    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked)
            selectedValue.push(e.value);
        else
            selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    const toast = useRef(null);
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }


    const columns = [
        { field: 'code', header: 'CourseName' },

    ];

    const countryBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <InputTextarea id="" rows="4" value="Student Notes..." disabled />


            </React.Fragment>
        );
    }
    const countryBodyTemplate2 = (rowData) => {
        return (
            <React.Fragment>

                <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />

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
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <>
            <div>
                <div className="card">
                    <h2>Student Activity</h2>
                    <DataTable value={products} responsiveLayout="scroll" selectableRows >
                        {dynamicColumns}

                        <Column header='Student' body={countryBodyTemplate2} />
                        <Column header='Student Note' body={countryBodyTemplate1} />
                        <Column header='Work upload' body={countryBodyTemplate4} />
                    </DataTable>
                </div>
            </div>



        </>
    );
}