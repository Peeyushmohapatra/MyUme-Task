import React from "react";
import "./Leftbox.css";
import { useDispatch, useSelector } from "react-redux";

const Leftbox = () => {
    const dispatch = useDispatch()
  const employee = useSelector((state) => {
    return state.employee;
  });

  const rightdata = useSelector((state) => {
    return state.rightbox
  })


  function check(id,dispatch,item){
    if(rightdata.length === 0){
        dispatch({
            type:"right_data",
            payload:item
        })
    }
    else{
        for(let i=0; i<rightdata.length; i++){
            if(rightdata[i].id === id){
                return 
            }
        }
    
        dispatch({
            type:"right_data",
            payload:item
        })
    }
    
  }
  return (
    <div className="left_box">
      <h2>Employees</h2>
      <div className="data_container">
        {employee &&
          employee.map((item) => {
            return <div className="employee_container">
                <h4>{item.first_name}</h4>
                <h4>{item.age}</h4>
                <button onClick={() => {
                    check(item.id,dispatch,item)
                    
                }}>Add</button>
            </div>;
          })}
      </div>
    </div>
  );
};

export default Leftbox;
