import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Adminaddtest = () => {
  const navigate = useNavigate();
  const [testName, settest] = useState(" ");
  const [testCharges, setcharges] = useState("");

  const nextalldetails = () => {
    navigate("/admin/alldetails");
  };

  const addtest = (e) => {
    e.preventDefault();

    if (testName.length === 0) {
      toast.warning("please Add the test");
    } else if (testCharges.length === 0) {
      toast.warning("please Add the charges");
    } else {
        
      const body = { testName, 
                    testCharges };
      axios.post("http://localhost:8080/api/t1/test", body).then((response) => {
        const result = response.data;
        console.log(result);

        if (result["status"] === "success") {
          toast.success("Test Added successful");
        } else {
          toast.error("Testalredy exists.");
        }
      });
    }
  };

  return (
    <>
    
    <h1 className="text-center  text-danger" >ADMIN</h1>
      <div className=" mx-auto" Style="width: 200px; mt-10 ">
        <div className=" container-fluid  text-center h-50">
          <div className="container colalign-self-center"></div>
          <br></br>
          <div className="container">
            <label>Test Name</label>
            <input type="text" onChange={(e) => settest(e.target.value)} />
          </div>
          <br></br>
          <div className="container">
            <label>Test Charges</label>
            <input type="text" onChange={(e) => setcharges(e.target.value)} />
          </div>
          <br></br>
          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-primary text-md-left"
              onClick={addtest}
            >
              Add Test
            </button>
            <br></br>
            <br></br>
            <button
              type="submit"
              className="btn btn-primary text-md-right"
              onClick={nextalldetails}
            >
            All PATIENT DETAILS
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto" Style="width: 200px; height:50% "></div>
    </>
  );
};

export default Adminaddtest;
