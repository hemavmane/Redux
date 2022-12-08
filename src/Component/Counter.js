import{ React,useState} from "react"

export function Counter1(){
    const [counter,setCoutner] = useState(0)
   return (
    <>
    <button onClick={()=>setCoutner(counter+1)} > + </button>

    <h1>{counter}</h1>

    <button onClick={()=>setCoutner(counter-1)}> - </button>
    </>
   )
}