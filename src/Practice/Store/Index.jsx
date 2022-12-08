import {createStore} from 'redux'


   const Default_State = {
    counter:0,
    name:""
   }


   const Reducer = (state=Default_State,action) =>{
             
               if(action.type === "increment"){
                 return {...state,counter:state.counter+1}
               }
               if(action.type ==="decrement"){
                return {...state,counter:state.counter-1}
               } 
               if(action.type === "change"){
          
                return {...state,name:"Hema"}
              }
               return state
   }

const store = createStore(Reducer)
export default store 

