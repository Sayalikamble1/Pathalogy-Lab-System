import { useState } from "react"
import DatePicker from "react-date-picker";
import axios from "axios";
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import {PaymentURL} from "../EndPoint/endpoint"


const Payment = () => {


const navigate = useNavigate()
//const [CardId,setcardid] = useState("")
const paymentuser = sessionStorage.getItem("userId");
const [cardNo,setcardnumber] = useState("")
const [cvv,setcvv] = useState("")
const [nameOnCard,setnameoncard] = useState("")
// const [validTill,setvalidtill] = useState("")
const [validTill, onChange] = useState(new Date());



const postpayment =() =>
{
  
  var postdata = {
    //CardId,
    paymentuser,
    cardNo,
    cvv,
    nameOnCard,
    validTill,
  };
  if (cardNo.length === 0 || cardNo.length !== 16) {
    toast.warning("please enter your 16 digit card no");
  } else if (cvv.length === 0 || cvv.length !== 3) {
    toast.warning("please enter your  3 digit cvv");
  }
  else if (nameOnCard.length === 0 ) {
    toast.warning("please enter your card name");
  }
  else
  axios.post(PaymentURL,postdata)
  .then((response) =>{
   
    var result = response["data"]
    console.log(result)

    if (result["status"] === "success"){
      toast.success("Payment successful")

      navigate('/paymentReciept')
    }else{
      toast.error("Something Went Wrong")
    }
  
  });

}




  return (
    <section Style="background-color: #eee;">
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card rounded-3">
            <div className="card-body mx-1 my-2">
              <div className="d-flex align-items-center">
                <div>
                  <i className="fab fa-cc-visa fa-4x text-black pe-3"></i>
                </div>
                <div>
                  <p className="d-flex flex-column mb-0 text-primary">
                    <b>Card Number</b><span className="small text-muted"></span>
                    <input type ="text" placeholder='Enter Your card Number' onChange={(e) => setcardnumber(e.target.value)}   />
                    <b>CVV</b><span className="small text-muted"></span>
                    <input type ="password" placeholder='Enter Your CVV' onChange={(e) => setcvv(e.target.value)}/>
                    <b>Expirity Date</b><span className="small text-muted"></span>
                    {/* <input type ="text" placeholder='Expirity Date Of Card' onChange={(e) => setvalidtill(e.target.value)}/> */}
                    <div className="small text-muted">
            <DatePicker 
              onChange={onChange}
              value={validTill}
              format="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>
                    <b>Name On Card</b><span className="small text-muted"></span>
                    <input type ="text" placeholder='Enter Your Name' onChange={(e) => setnameoncard(e.target.value)}/>
                  </p>
                </div>
              </div>
  
              <div className="pt-3">
                <div className="d-flex flex-row pb-3">
                  <div
                    className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                    Style="background-color: rgba(18, 101, 241, 0.07);"
                  >
                    <div className="d-flex align-items-center pe-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioNoLabelX"
                        id="radioNoLabel11"
                        value=""
                        aria-label="..."
                        checked
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 small text-primary">Total amount</p>
                      <h6 className="mb-0 text-primary"> ₹550</h6>
                    </div>
                  </div>
                </div>
  
                <div className="d-flex flex-row pb-3">
                  <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                    <div className="d-flex align-items-center pe-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioNoLabelX"
                        id="radioNoLabel22"
                        value=""
                        aria-label="..."
                      />
                    </div>
                    <div className="d-flex flex-column py-1">
                      <p className="mb-1 small text-primary">Other Payment Method</p>
                      <div className="d-flex flex-row align-items-center">
                        <h6 className="mb-0 text-primary pe-1">Cash</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="d-flex justify-content-between align-items-center pb-1">
               
                <button type="button" className="btn btn-primary btn-lg" onClick={postpayment}>Pay amount</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Payment