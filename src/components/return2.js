import React from "react";

function Return2(){
    function handleClick(e) {
        window.location.replace("/capstone")
    }
    return(
        <button onClick = {handleClick}>
            Close
        </button>
    )
}

export default Return2;