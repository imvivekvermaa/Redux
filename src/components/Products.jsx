import { useEffect } from "react"
import { getProducts } from "../store/reducers/productReducer"
import { useDispatch, useSelector } from "react-redux"
import { asyncGetProducts } from "../store/actions/actionProduct"

function Products() {
    const {products} = useSelector((state)=> state.productReducer)
    console.log(Products)
    const dispatch= useDispatch(getProducts)
    
    useEffect(()=>{
        dispatch(asyncGetProducts())
        //) dispatch(getProducts())
    }, [])

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className=" text-2xl font-bold text-red-900">Product List</h1>
        <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              <h1>
                {item.title}{" "}
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

// HOF
// 1.
// function a(){
    // return ()=>{

    // }
   
// }
// 2.
// ()=> ()=>{}   a function return another function ft. anonymous  arrow function


export default Products