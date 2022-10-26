import React from "react";
import './style/sure.css';

function Sure({ setOpenModal_ }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer1">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal_(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>confirm to send reward to customer</h1>
            
          </div>
          <div className="body">
            <p>{"sending reward Token from:ZXZ2BIHE47MWFDPPQOLUQF7KC45XB7RLTK4TSPQ7437PQDMQQ7KZMYLKDA - to : CHXGGDT2OOW4MX2VSUZLPAAPOA5JAYMVO73PZVLNZK32S464HAQAOGYGXE"}</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal_(false);
              }}
              id="cancelBtn"
            >
              Done
            </button>
            <button
            onClick={()=>{setOpenModal_(false)}}
            >cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sure;