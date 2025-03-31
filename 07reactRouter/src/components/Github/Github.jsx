import {useEffect,useState} from "react"

export default function Github(){
    const [data,setData]=useState([])
    useEffect(()=>{
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then((res)=>res.json())
    .then((data)=>setData(data) )
    },[])
    return(
        <div className="bg-gray-700 text-3xl text-white text-center m-10 p-4">Github followers:{data.followers}</div>
    )
}