import React, { useRef, useState } from 'react'

const InputForm = () => {
    const medicinRef=useRef();
    const descRef=useRef();
    const priceRef=useRef();
    const quantRef=useRef();
    const [data,setData] = useState([])
    const handelSubmit = (event) =>{
        event.preventDefault();
        let obj={};
       let medicinInput=medicinRef.current.value;
       let descInput=descRef.current.value;
       let priceInput=priceRef.current.value;
       let quantInput=quantRef.current.value;
       obj={
        "medicin":medicinInput,
        'desc':descInput,
        'price':priceInput,
        'quantity':quantInput
        }
        setData([...data,obj]);
        
    }
    console.log(data)
  return (
    <div>
        <form onSubmit={handelSubmit}>
      <label>Medicin Name</label>
      <input placeholder='medicin Name' ref={medicinRef}/>
      <label>Description</label>
      <input placeholder='Description' ref={descRef}/>
      <label>Price </label>
      <input placeholder='Price' ref={priceRef}/>
      <label>Quantity Available</label>
      <input placeholder='Quantity' ref={quantRef}/>
     <input type='submit' value={'Add Product'}/>
   </form>
   <div>
    {data?.map(el=>(
        <>
        <div style={{marginTop:'100px',padding:'20px',fontSize:"21px",display:'flex'}}>
            <h4 style={{width:'20%'}}>{el.medicin}</h4>{" "}
            <h5 style={{width:'30%'}}>{el.desc}</h5>{" "}
            <h3 style={{width:'30%'}}>{el.price}</h3>{" "}
            <h4 style={{width:'30%'}}>{el.quantity}</h4>{" "}
            <div>
            <button onClick={()=>{
                if(el.quantity>=1){
                    data.find(el=>el.price-1);
                }
            }}>-</button>{" "}<button>+</button>
            </div>
        </div>
        
        </>
    ))}
   </div>
    </div>
  )
}

export default InputForm
