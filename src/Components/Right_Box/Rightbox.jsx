import React, { useState } from 'react'
import "./Rightbox.css"
import { useDispatch, useSelector } from 'react-redux'

const Rightbox = () => {

    const [state,setState] = useState([]);
    const [previous,setPrevious] = useState([])
    const righrData = useSelector((state) => {
        return state.rightbox
    })


    const [toggle,setToggle] = useState(false)

    const dispatch = useDispatch();

    function calculateAverageAge(){
        let ans = righrData.reduce((acc,curr) => {
            acc += curr.age
            return acc
        },0)

        return ans/righrData.length
    }

    function deleteEmployee(id){
        const arr = righrData.filter((item) => {
            if(item.id !== id){
                return item
            }
        })

        dispatch({
            type:"right_data_change",
            payload:arr
        })
    }

    function sortEmployee(righrData,dispatch){
        const sortedEmployee = righrData.sort((a,b) => {
            return a.age - b.age
        })

        dispatch({
            type:"right_data_change",
            payload:sortedEmployee
        })

    }

  return (
    <div className='right_container'>
       <h1>TEAM</h1>
       <button onClick={() => {
        sortEmployee(righrData,dispatch)
        setToggle(!toggle)
       }}>Sort by age</button>

       <div className="data_container1">
        {righrData &&
          righrData.map((item) => {
            return <div className="employee_container">
                <h4>{item.first_name}</h4>
                <h4>{item.age}</h4>
                <button onClick={() => {
                    deleteEmployee(item.id)
                }}>Remove</button>
            </div>;
          })}
      </div>
      <div className="average_count">
        <h4>Average Age: {calculateAverageAge() !== NaN ? calculateAverageAge().toFixed(1) : "0"}</h4>
      </div>
    </div>
  )
}

export default Rightbox