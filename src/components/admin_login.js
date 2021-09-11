import React from "react";
import Modal from "./modal";
import { useState, useEffect } from 'react';

const AdminLogin = () => {
        const [isShowing, setIsShowing] = useState(false);
        const openModal = () => {
          setIsShowing(true);
        };
        const closeModal = () => {
          setIsShowing(false);
        };
        
        /*
        useEffect(() => {
          if (isShowing) {
            const notiTimer = setTimeout(() => {
              setIsShowing(false);
            }, 3000); // 타이머 지정
            return () => clearTimeout(notiTimer);
          }
        }, [isShowing]);
        */
        return (
          <div>
            <p align="right"><button onClick={openModal}>ADMIN LOGIN</button></p>
            <div>{isShowing && 
            <Modal/>}</div>
          </div>
        );
};

export default AdminLogin;
