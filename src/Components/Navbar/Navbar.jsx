import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { searchPost } from '../../Function/function'
import { useDispatch, useSelector } from 'react-redux'


const Navbar = () => {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const arr = useSelector((state) => {
        return state.post
    })

    const navigate = useNavigate()

  return (
    <div className='navbar'>
        <input placeholder='Seach Here !!!' onChange={(e) => {
            setInput(e.target.value)
        }} value={input} type="text"/>
        <Link to="/search">
        <button onClick={() => {
            
                searchPost(input,arr,dispatch)
            
        }}>Search</button>
        </Link>
    </div>
  )
}

export default Navbar