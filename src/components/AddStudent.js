import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import '../App.scss';

export const AddStudent = () => {

  const [dropdownItem, setDropdownItem] = useState(null);
  const [dropdownItem1, setDropdownItem1] = useState(null);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };


  const dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];
  const dropdownItems1 = [
    { name: 'Course 1', code: 'Option 1' },
    { name: 'Course 2', code: 'Option 2' },
    { name: 'Course 3', code: 'Option 3' },
    { name: 'Course 4', code: 'Option 3' },
    { name: 'Course 5', code: 'Option 3' }

  ];
  const cityDropdown = [
    { name: 'Surat', code: 'Option 1' },
    { name: 'Ahemdabad', code: 'Option 2' },
    { name: 'Vadodara', code: 'Option 3' },
    { name: 'Rajkot', code: 'Option 4' },
    { name: 'Amreli', code: 'Option 5' },
    { name: 'Navsari', code: 'Option 6' },
    { name: 'Valsad', code: 'Option 7' },
    { name: 'Bahruch', code: 'Option 8' },
    { name: 'Gadhinagar', code: 'Option 9' },
    { name: 'Junagadh', code: 'Option 10' },
  ];


  return (

    <div >
      <div className='card'>
        <span><Link to="/SAdmin/Student">Student</Link> / Add Student</span>

      </div>
      <div className="grid">


        <div className="col-8">
          <div className="card">
            <h5>Student Details</h5>
            <div className="p-fluid formgrid grid">
              <div className="field col-12 md:col-4">
                <label htmlFor="firstname">Firstname</label>
                <InputText id="firstname" type="text" />
              </div>
              <div className="field col-12 md:col-4">
                <label htmlFor="lastname">Lastname</label>
                <InputText id="lastname" type="text" />
              </div>
              <div className="field col-12 md:col-4">
                <label htmlFor="fathername">Fathername</label>
                <InputText id="fathername" type="text" />
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="dateofjoin">Date Of Joining</label>
                <InputText id="dateofjoin" type="date" />
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="mobile">Student Mobile no.</label>
                <InputText id="mobile" type="number" />
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="coursename">Course Name</label>
                <Dropdown id="coursename" value={dropdownItem1} onChange={(e) => setDropdownItem1(e.value)} options={dropdownItems1} optionLabel="name" placeholder="Select One"></Dropdown>

              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="workinghour">Working Hours</label>
                <InputText id="workinghour" type="number" />

              </div>
              <div className="field col-12">
                <label htmlFor="address">Address</label>
                <InputTextarea id="address" rows="4" />
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="city">City</label>
                <Dropdown id="city" value={cityDropdown} onChange={(e) => setDropdownItem(e.value)} options={cityDropdown} optionLabel="name" placeholder="Select One"></Dropdown>
              </div>
              <div className="field col-12 md:col-3">
                <label htmlFor="state">State</label>
                <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
              </div>
              <div className="field col-12 md:col-3">
                <label htmlFor="zip">Pincode</label>
                <InputText id="zip" type="text" />
              </div>
            </div>
          </div>
        </div>


        <div className='col-4'>
          <div className='card card-user'>
            <div>
              <label htmlFor="upload-button">
                {image.preview ? (
                  <img className="profilepic" src={image.preview} alt="dummy" />
                ) : (
                  <>
                    <span className="fa-stack fa-2x mt-3 mb-2">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fas fa-store fa-stack-1x fa-inverse" />
                    </span>
                    <h5 className="text-center choose pi pi-check"> Choose Image</h5>
                  </>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-12">
                  <label htmlFor="email">Email</label>
                  <InputText id="email" type="email" />
                </div>
                <div className="field col-12 md:col-12">
                  <label htmlFor="password">Password</label>
                  <InputText id="password" type="text" />
                </div>
              </div>
            </div>
            <div className='backbtn'>
              <Link to="/admin/Students"><Button className="submitbtn mr-5" label="Back" icon="pi pi-arrow-left" /></Link>
              <Link to="/admin/Students"><Button className="submitbtn" label="Submit" icon="pi pi-check" /></Link>
            </div>


          </div>

        </div>
      </div>

    </div >
  )
}
