import React from "react";

function Return(){
    function handleClick(e) {
        window.location.replace("/capstone")
    }
    return(
        <p align="right"><button onClick = {handleClick}>
            웹페이지로 돌아가기
        </button></p>
    )
}

export default Return;