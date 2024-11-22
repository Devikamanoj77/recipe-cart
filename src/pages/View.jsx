import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const View = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  console.log(product);
  

  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  
  useEffect(()=>{

    if(sessionStorage.getItem("allProducts")){
       const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      //  console.log(allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id))
    }
     
  },[])
  
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <div style={{ fontSize: "40px" }} className="text-center text-success fw-bolder">
          {product?.name}
        </div>
        <div className="row  mt-5 ">
          <div className="col-lg-6 text-center">
            <img
              width={"400px"}
              height={"300px"}
              src={product?.image}
              alt=""
            />
           
          </div>
          <div className="col-lg-6 mt-3">
            <h5 style={{fontSize:'20px'}}><span><b><span style={{fontSize:'25px'}} className="text-success">Ingedients :</span> <br /> {product?.ingredients}</b></span></h5>
            <h5 style={{fontSize:'20px'}}>
              <span><b><span style={{fontSize:'25px'}} className="text-success">Instructions :</span></b></span><p >{product?.instructions}</p>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
