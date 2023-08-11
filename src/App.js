import React, { useEffect } from "react";
import "./App.css"
import {useDispatch, useSelector} from "react-redux"
import { employees } from "./Essentials/functions";
import Leftbox from "./Components/Left-Box/Leftbox";
import Rightbox from "./Components/Right_Box/Rightbox";

const App = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => {
    return state.employee
  })

  useEffect(() => {
    if(employee.length === 0){
      dispatch({
        type:"employee_data",
        payload:employees
      })
    }
  },[dispatch])
  return <div className="App_container">
    <Leftbox/>
    <Rightbox/>
  </div>;
};

export default App;
