import React from "react"
import { useSelector ,useDispatch} from "react-redux"




export function Counters(){


    const disptach = useDispatch();
    let counter =  useSelector((state)=>{
               return state.counter
         })
let name = useSelector((state)=>{
    return state.name
})
    const handleIncrement = ()=>{
           disptach({"type":"increment"})
    }

    const handleDecrement = ()=>{
        disptach({"type":"decrement"})
 }
      
 const handleChange = () =>{
    disptach({"type":"change"})
 }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} >Decrement</button>
        <p>{name}</p>
        <button onClick={handleChange}>chagne</button>
        </>
    )
       
}