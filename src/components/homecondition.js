import React from "react";
import Button from "./button";
import Text from "./text";

function HomeCondition(){
    return(
      <div>
        <div id = "test1"><br></br>
        <center><b>상태</b>&nbsp;&nbsp;
        <Button padding='5px 5px 5px 5px' width="80px"><Text>상</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>중</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>하</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>전체</Text></Button></center><br></br>
        <center><b>가격</b>&nbsp;&nbsp;
        <Button padding='5px 5px 5px 5px' width="80px"><Text>~10만원</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>~30만원</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>~50만원</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>~100만원</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>전체</Text></Button></center><br></br>
        <center><b>검색조건3</b>&nbsp;&nbsp;
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류1</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류2</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류3</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류4</Text></Button></center><br></br>
        <center><b>검색조건4</b>&nbsp;&nbsp;
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류1</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류2</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류3</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류4</Text></Button></center><br></br>
        <center><b>검색조건5</b>&nbsp;&nbsp;
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류1</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류2</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류3</Text></Button>
        <Button padding='5px 5px 5px 5px' width="80px"><Text>분류4</Text></Button></center><br></br>
        </div>
      </div>
    )
  }

export default HomeCondition;
