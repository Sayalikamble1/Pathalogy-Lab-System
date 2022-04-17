import DatePicker from "react-date-picker";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import {TestGetURL,TestPostURL} from "../EndPoint/endpoint"




const TestBook = () => {
  const navigate = useNavigate()
  const [value1, onChange] = useState(new Date());

  const [test2, settest2] = useState([]);
  const bookinguser = sessionStorage.getItem("userId");
  const patient = sessionStorage.getItem("PatientId");

  var [test, settest1] = useState("");
  

  function handleSettest1(e) {
    
    settest1(e.target.value);
    console.log(e.target.value);
    
  }

  useEffect(() => {
    fetchTest();
  }, []);

  const fetchTest = () => {
    axios.get(TestGetURL).then((response) => {
      console.log(response);
      
      settest2(response.data);
    
    });
  };

  const bookingDate = value1;

  var postdata = {
    test,
    bookingDate,
    bookinguser,
    patient,
    value1,
  };

 // var testcharges={};
 
  const forwardtest = () => {
    axios
      .post(TestPostURL, postdata)
      .then((response) => {
       
        const result = response.data;
        console.log(result["data"]);

        if (result["status"] === "success") {
           toast.success("proceed to payment");
           navigate("/payment")
        } else {
            toast.error("bhaag jaa");
        }
      });
  };


  return (
    <>
      <div className=" mx-auto" Style="width: 200px; mt-10 ">
        <div className=" container-fluid  text-center h-50">
          <div className="container colalign-self-center">
            <select className="custom-select" onChange={handleSettest1}  >
              {test2.map((value) => {
                return (
               //   testcharges[value.testId]=value.testCharges;

                  <option value={value.testId}>
                    {value.testId} - {value.testName} and charges ₹
                    {value.testCharges}/-
                  </option>
                  
                );
              })}
            </select>
          </div>

          <br></br>
          <div className="container">
            <DatePicker
              onChange={onChange}
              value={value1}
              format="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>
          <br></br>
          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-primary text-md-left"
              onClick={forwardtest}
            >
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto" Style="width: 200px; height:50% "></div>
    </>
  );
};

export default TestBook;