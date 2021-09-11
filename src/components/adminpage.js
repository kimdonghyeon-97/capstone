import React from "react";
import Return from "./return";

function AdminPage(){
    return(
      <div>
        <Return></Return>
        <h1>※ 검색 조건 목록</h1>
        <div id = "test1">
        <h2>&nbsp;상태</h2>
        <h2>&nbsp;가격</h2>
        <h2>&nbsp;분류1</h2>
        <h2>&nbsp;분류2</h2>
        <h2>&nbsp;분류3</h2>
        </div>
        <br></br>
       <center>
         <button>등록</button>&nbsp;
         <button>수정</button>&nbsp;
         <button>삭제</button>
       </center>
      </div>
    )
  }

export default AdminPage;
