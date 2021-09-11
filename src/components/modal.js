import { createPortal } from "react-dom";
import { useState, useEffect } from 'react';
import JoinForm from "./JoinForm";
import Return2 from "./return2";

function Modal(props) {
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };
  const closeModal = () => {
    setIsShowing(false);
  };

  return createPortal(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 510,
        left: 0,
        width: "100%",
        height: 50,
      }}
    >
      <div
        style={{
          width: "35%",
          textAlign: "center",
          borderRadius: 30,
          background: "grey",
          fontSize: 20,
          color: "white",
        }}
      > 
        <p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;관리자 로그인</p>
        <p>패스워드를 입력해 주세요</p>
        <JoinForm></JoinForm>
        <p align="center"><Return2></Return2></p>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;