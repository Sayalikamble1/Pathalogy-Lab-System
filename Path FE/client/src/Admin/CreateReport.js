import DatePicker from 'react-date-picker';
import React, { useState } from 'react';
const CreateReport = () => {
  const [value, onChange] = useState(new Date());
  return (
   <>
   <h1 className="text-center  text-danger" >ADMIN</h1>
   <div className='container text-center'>
   <div className='container'>
     <labl>Date</labl>
                <DatePicker onChange={onChange} value={value} />
                <hr></hr>
                <lable>Patient Name</lable>
                <input type ="text"/>
                <br></br>
                <br></br>
                <lable>Patient Age</lable>
                <input type ="text"/>
                <br></br>
                <br></br>
                <lable>Patient Gender</lable>
                <select class="custom-select">
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
                </select>
                <br></br>
                <br></br>
                <lable>Patient Height</lable>
                <input type ="text"/>
                <hr></hr>
                <lable>Patient Weight</lable>
                <input type ="text"/>
                <br></br>
                <lable>Pateint Date of Birth</lable>
                <DatePicker onChange={onChange} value={value} />
                <br></br>
                <lable> Date of Issue</lable>
                <DatePicker onChange={onChange} value={value} />
                <br></br>
                <hr></hr>
                <lable>Place Of issue</lable>
                <input type="text"/>
                <br></br>
                <lable>Nationality</lable>
                <input type="text"/>
                <br></br>
                <lable>Aadhar Number</lable>
                <input type="text"/>
                <br></br>
                <lable>Test Applied For</lable>
                <input type="text"/>
                <br></br>
                <br></br>
                <hr></hr>
                <h1 className='text-dark-green-ic'>Medical Examinitation</h1>
                <br></br>
                <strong>Eyes</strong>
                <br></br>
                <select class="custom-select">
                <option selected>Vision Right Eye</option>
                <option value="1">6/6</option>
                <option value="2">6/9</option>
                <option value="3">6/18</option>
                </select>
                <br></br>
                <br></br>
                <select class="custom-select">
                <option selected>Vision Left Eye</option>
                <option value="1">6/6</option>
                <option value="2">6/9</option>
                <option value="3">6/18</option>
               </select>
               <hr></hr>
               <strong>Ear</strong>
               <br></br>
               <label>Right Ear</label>
               <input type="text" />
               <br></br>
               <label>Left Ear</label>
               <input type="text" />
               <hr></hr>
               <h1>Systematic Exam</h1>
               <label>Blood Pressure </label>
               <input type="text" placeholder='mm Hg' />
               <br></br>
               <br></br>
               <label>Heart Rate</label>
               <input type="text" />
               <br></br>
               <br></br>
               <label>Lungs</label>
               <input type="text" />
               <br></br>
               <br></br>
               <label>Abodomen</label>
               <input type="text" />
               <br></br>
               <br></br>
               <hr></hr>
               <h3>VENEREAL DISEASES (CLINICAL)</h3>
               <br></br>
               <br></br>
               <label>VDRL/TPHL</label>
               <select class="custom-select">
                <option value="1">Reactive</option>
                <option value="2"> Non Reactive</option>
               </select>
               <hr></hr>
               <h1>Lab Investigation</h1>
               <br></br>
               <br></br>
               <h3>Urine</h3>
               <label>Sugar</label>
               <input type="text" />
               <br></br>
               <br></br>
               <label>Alpumin</label>
               <input type="text" />
               <br></br>
               <br></br>
               <label>others</label>
               <input type="text" />
               <hr></hr>
               <h1>Blood</h1>
               <br></br>
               <br></br>
               <label>Hemohglobin</label>
               <input type="text" placeholder= "%gm"/>
               <br></br>
               <br></br>
               <label>Malaria Rapid</label>
               <input type="text" />
               <br></br>
               <br></br>
               <label>Micro Filaria</label>
               <select class="custom-select">
                <option value="1">Reactive</option>
                <option value="2"> Non Reactive</option>
               </select>
               <br></br>
               <br></br>
               <label>Blood Group </label>
               <select class="custom-select">
                <option value="1">A+</option>
                <option value="2"> B+</option>
                <option value="3"> O+</option>
                <option value="4"> AB+</option>
                <option value="5">AB-</option>
                <option value="6"> B-</option>
                <option value="7"> A-</option>
                <option value="8"> O-</option>
               </select>
               <br></br>
               <br></br>
               <lable>Others</lable>
                <input type ="text"/>
                <hr></hr>
                <h1>Remark</h1>
                <br></br>
               <br></br>
               <label>Fit Or Unfit</label>
                <select class="custom-select">
                <option value="1">Fit</option>
                <option value="2"> Unfit</option>
                 </select> 
                 <br></br>
               <br></br>
                 <lable>Remark</lable>
                 <input type ="text"/>
                <br></br>
               <br></br>
                <label>Click this to print final report</label>
                <input type="checkbox"></input>
                <br></br>
                <br></br>
                <input type ="button "className= "btn-primary text-center" value="Genrate Report" Style='border-radius:50px'/>
                <br></br>
                <br></br>
                <br></br>



          </div>
          </div>
   </>
  
  )
}

export default CreateReport