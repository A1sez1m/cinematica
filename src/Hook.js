import React, {useState} from 'react'
import { useEffect } from 'react'

export default function Hook(props) {
    const [name,setName] =useState(0)
    const [count,setCount] =useState(0)

        console.log('albina')
    useEffect(()=>{
        console.log('aisezim')
        alert(name)
    },[name])
    return (
        <div style={{marginLeft:'50px'}}>
        <div style={{ color: name < 0 ?'red' :  'black' }}>{name} </div>
        <div style={{ color: count < 0 ?'red' :  'black' }}> {count}</div>

        <button onClick={()=>setName(name +1)}>name+</button>
        <button onClick={()=>setName(name -1)}>name-</button>
        <button onClick={()=>setCount(count +1)}>count+</button>
        <button onClick={()=>setCount(count -1)}>count-</button>

        </div>
    )
}
