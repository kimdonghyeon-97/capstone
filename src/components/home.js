import React from "react";

function Home(){
    function handleClick(e) {
        window.location.replace("/capstone/next")
    }
    return(
        <button onClick = {handleClick}>
            <h5>관리자 페이지로 이동</h5>
        </button>
    )
}

export default Home;
