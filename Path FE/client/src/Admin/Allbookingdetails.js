import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Allbookingdetails = () => {
  const [test2, settest2] = useState([]);
  const navigate = useNavigate();

  const togeneratereports = () => {
    navigate("/admin/createreport");
  };


  useEffect(() => {
    fetchTest();
  }, []);

  const fetchTest = () => {
    axios.get("http://localhost:8080/api/b1/book").then((response) => {
      console.log(response);

      settest2(response.data);
    });
  };

  return (
    <>
      <div className=" mx-auto" Style="width: 200px; mt-10 ">
        <div className=" container-fluid  text-center h-50">
          <div className="container colalign-self-center">
            <h1>demo</h1>
            {/*  <select className="custom-select"   >

              
              {test2.map((value) => {
                return (
               //   testcharges[value.testId]=value.testCharges;

                  <option value={value.bookingId}>
                    {value.bookingDate} - {value.test.testName} -
                    {value.patient.firstName}-
                  </option>
                  
                );
              })}
            </select> */}
<div className = "row">
                        <table className = "table table-striped table-bordered">

            <thead>
              <tr>
                <th>USER NAME</th>
                <th> PATIENT NAME</th>
                <th> TEST</th>
                <th> BOOKING DATE</th>
              </tr>
            </thead>

            <tbody>
                {
                   test2.map((value) => {
                    return (
                       <>
                        <tr value={value.bookingId}>
                       <td>username</td>
                       <td>{value.patient.firstName} {value.patient.lastName}</td>
                       <td> {value.test.testName}</td>
                       <td>  {value.bookingDate} </td>
                       </tr>
                       </>
                   ); }
                   
                   )}
            </tbody>
            </table>
            </div>

            <button
              type="submit"
              className="btn btn-primary text-md-right"
              onClick={togeneratereports}
            >
            TO GENERATE REPORT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allbookingdetails;
