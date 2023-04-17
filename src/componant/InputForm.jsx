import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/ContextProvider";

const InputForm = () => {
  const medicinRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const quantRef = useRef();

  const { setData, data } = useContext(DataContext);
  const [cartData,setCartData]=useState([])
  const handelSubmit = (event) => {
    event.preventDefault();
    const obj = {
      medicin: medicinRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      quantity: quantRef.current.value,
    };
    setData([...data, obj]);
  };

  const handleIncrement = (index) => {
    const newData = [...data];
    newData[index].quantity++;
    setData(newData);
  };

  const handleDecrement = (index) => {
    const newData = [...data];
    if (newData[index].quantity >= 1) {
      newData[index].quantity--;
      setData(newData);
    }
  };
const handelAddCart = (index) => {
  const newData = [...data];
  setCartData([newData[index]])
}
console.log(cartData)
  return (
    <div>
      
      <form onSubmit={handelSubmit}>
        <label>Medicine Name</label>
        <input placeholder="Medicine Name" ref={medicinRef} />
        <label>Description</label>
        <input placeholder="Description" ref={descRef} />
        <label>Price</label>
        <input placeholder="Price" ref={priceRef} />
        <label>Quantity Available</label>
        <input placeholder="Quantity" ref={quantRef} />
        <input type="submit" value={"Add Product"} />
      </form>
      <div>
        <span style={{marginLeft:'1200px',padding:'10px',marginTop:'-20px'}}><span>Cart</span>{cartData.length}</span>
      </div>
      <div>
        {data?.map((el, index) => (
          <div
            key={index}
            style={{
              marginTop: "100px",
              padding: "20px",
              fontSize: "21px",
              display: "flex",
            }}
          >
            <h4 style={{ width: "20%" }}>{el.medicin}</h4>{" "}
            <h5 style={{ width: "30%" }}>{el.desc}</h5>{" "}
            <h3 style={{ width: "30%" }}>{el.price}</h3>{" "}
            <h4 style={{ width: "30%" }}>{el.quantity}</h4>{" "}
            <div>
              <button onClick={() => handleDecrement(index)}>-</button>{" "}
              <button onClick={() => handleIncrement(index)}>+</button>
              <button onClick={() => handelAddCart(index)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputForm;
