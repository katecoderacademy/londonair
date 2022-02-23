import React, { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
// import TableCell from "@mui/material/TableCell";
// import { Button } from "@mui/material";

// const someElement = document.getElementById("element")
    
// if(someElement) {
//   ReactDOM.render(<Search />, someElement)
// }

const data = [
  {
    id: 1001,
    label: "Action1"
  },
  {
    id: 1002,
    label: "Action2"
  },
  {
    id: 1003,
    label: "Action3"
  },
  {
    id: 1004,
    label: "Action4"
  },
  {
    id: 1005,
    label: "Action5"
  }
];




export function ContactUs() { 
  const [showed, setShowed] = useState(false);

  return (
<>
<div
      style={showed ? { display: "none" } : { display: "block" }}
      className="d-flex justify-content-between align-center pl-2 pr-2"
    >
      <h6>this is div</h6>
      <h6 onClick={(e) => setShowed(true)}>hide</h6>
    </div>
    </>
  
  );

  
  

}


