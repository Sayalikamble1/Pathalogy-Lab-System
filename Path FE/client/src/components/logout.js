import React from 'react'
import { useNavigate } from "react-router"
import { toast } from 'react-toastify'

const Logout = () => {
    const navigate = useNavigate()

const logouttohome= () =>{
 
sessionStorage.clear();
navigate('/')
toast.success("Logout Successful...")

}



  return (
    
    <>

<div class="print btn-btn-primary">
                    <button
                      type="submit"
                      className="btn btn-primary text-md-left" onClick={logouttohome}>
                    
                     LOGOUT
                    </button>
                  </div>
    
    </>

  )
}

export default Logout