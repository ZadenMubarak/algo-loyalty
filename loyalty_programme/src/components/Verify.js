import React, {useState} from "react";
import "./verify.css";
import Sure from "./Sure";

const Hex = `{
    "clientName":"0x4ee45541ce49a773-403417447992879846'",
    "ClientWalletAddress":"'-0x31b5c4704550e2ce <0x000001BB3BD73C90>'",
    "WordOfThanksAndCongratulations":"3504444770047708670-0x30a249f375ab4fde",
    "company":"'0x208265c2c0b41563'"
  }`

function Modal({ setOpenModal }) {

  const [modalOpen1, setModalOpen1] = useState(false);

  const funcofunc = ()=>{
    setModalOpen1(true);
    
  }

  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
          <h2>sign transaction</h2>
          
        </div>
        <div className="body">
          <p>{Hex}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
          onClick={() => {
            funcofunc()
            // setOpenModal(false);
          }}
            
          >Continue</button>
        </div>
      </div>

      {modalOpen1 && <Sure setOpenModal_={setModalOpen1}/>}
    </div>
  );
}

export default Modal;