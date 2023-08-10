import React from 'react'
import "./Search.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Posts from '../Posts/Posts'


const Search = () => {
    const result = useSelector((state) => {
        return state.searchResult
    })
    console.log(result);
  return (
    <div className='search-component'>
        <Posts posts={result} data={"Result Not Found"}/>
        <Link to="/">
        <button>Home</button>
        </Link>
    </div>
  )
}

export default Search