import React, { useState } from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const ViewCourses = () => {
  const [input, setInput] = useState('');
  const [h1Tag, setH1Tag] = useState([]);

  const AddHandler = () => {
    let copyArray = [...h1Tag];
    copyArray.push(input)
    setH1Tag(copyArray);
    setInput('')
  }
  const deleteH1Handler = (index) => {
    console.log(index);
    let copyArray = [...h1Tag];
    copyArray.splice(index, 1);
    setH1Tag(copyArray)
  }
  return (
    <div>

      <div className="card">
        <span><Link to='/admin/courses'>Courses</Link> / View Course</span>
      </div>
      <div className='card'>
        <div className="p-fluid formgrid grid">
          <div className="field col-12 md:col-4">
            <label htmlFor="firstname2">Courses</label>
            <InputText id="firstname2" placeholder="Add student" type="text" />
            {
              h1Tag.map((el, i) => {

                return <InputText id="firstname2" placeholder="Add student" type="text" />

              })
            }
          </div>
          <div className="field col-12 md:col-2 mr">
            <Button label="Add" icon='pi pi-plus' onClick={AddHandler} />
          </div>
          <div className="field col-12 md:col-2 mr1">
            <Button label="Delete" icon='pi pi-trash' onClick={deleteH1Handler} />
          </div>
          <div className="field col-12 md:col-2 mb">
            <Link to="/admin/courses"><Button label="Submit" icon='pi pi-check' /></Link>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default ViewCourses;
