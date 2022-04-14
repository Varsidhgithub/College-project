import React from 'react';
import '../App.scss';

export const Studentprofile = () => {


  return (

    <div >
      <div className='card'>
        <h4>Student Profile</h4>

      </div>
      <div className="grid">


        <div className="col-8">
          <div className="card profile">
            <h5>Student Details</h5>
            <div className="p-fluid formgrid grid data">
              <div className="field col-12 md:col-4">
                <label htmlFor="firstname" id="firstname">First Name</label>
                <h6>Varsidh</h6>
              </div>
              <div className="field col-12 md:col-4">
                <label htmlFor="fathername" id='fathername'>Fathername</label>
                <h6>Vinubhai</h6>
              </div>
              <div className="field col-12 md:col-4">
                <label htmlFor="lastname" id='lastname'>Last Name</label>
                <h6>Mangroliya</h6>
              </div>

              <div className="field col-12 md:col-6">
                <label htmlFor="dateofjoin" id='dateofjoin'>Date Of Joining</label>
                <h6>01/01/2022</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="dateofend" id='dateofend'>Date Of Course-End</label>
                <h6>24/06/2023</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="mobile" id='mobile'>Student Mobile no.</label>
                <h6>+1234567890</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="workinghour" id='workinghour'>Working Hours</label>
                <h6>2 hours</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="email" id='email'>Email id</label>
                <h6>Abc@gmail.com</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="password" id='password'>Password</label>
                <h6>Password</h6>

              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="coursename" id='coursename'>Course Name</label>
                <h6>Web Desiging</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="firstname" id="firstname">Faculty Name</label>
                <h6>BCD</h6>
              </div>
              <div className="field col-12">
                <label htmlFor="address" id='address'>Address</label>
                <h6>Surat, Gujrat.</h6>
              </div>
              <div className="field col-12 md:col-6">
                <label htmlFor="city" id='city'>City</label>
                <h6>Surat</h6>
              </div>
              <div className="field col-12 md:col-3">
                <label htmlFor="state" id='state'>State</label>
                <h6>Gujrat</h6>

              </div>
              <div className="field col-12 md:col-3">
                <label htmlFor="zip" id='zip'>Zip Code</label>
                <h6>395004</h6>
              </div>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='card card-user'>
            <div className="author">

              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img className='profilepic' src='assets/layout/images/emilyz.105ff23d.jpg' alt="logo" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}