import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Cards.css'
const Select = () => {
    const navigate=useNavigate();
    const f1=()=>{
        navigate('/Fashion')
    }
    const f2=()=>{
        navigate('/Electronics')
    }
    const f3=()=>{
        navigate('/Furniture')
    }
    const f4=()=>{
        navigate('/Books')
    }

  return (
    <div>
        <div className="d-flex justify-content-center mt-5">
            
                <div className="btn select m-1 " onClick={f1}>Fashion</div>
            
                <div className="btn select m-1" onClick={f2}>Electronics</div>
      
                <div className="btn select m-1" onClick={f3}>Furniture</div>
      
                <div className="btn select m-1" onClick={f4}>Books</div>
        </div>
    </div>
  )
}

export default Select