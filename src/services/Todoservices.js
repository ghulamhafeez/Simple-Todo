// import {BaseUrl} from './constant'


export const getTodos =()=>{
  return  fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>res.json())
}