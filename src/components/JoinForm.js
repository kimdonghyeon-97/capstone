import React, { Component } from 'react';
import Rtest from './Rtest';

class JoinForm extends Component {
  state = {
    firstPassword: '',
    checkPassword: '📝패스워드 입력📝',
    admin: '',
  };
  //input onChange 이벤트
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
    // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
    if (e.target.name !== 'name') {
      setTimeout(this.handleCheck, 100);
    }
  };
  //비밀번호 체크
  handleCheck = () => {
    const { firstPassword } = this.state;
    // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
    if (firstPassword.length < 1 ) {
      this.setState({
        checkPassword: '📝패스워드 입력📝',
        admin: '',
      });
      // 비밀번호가 같다면 일치
    } else if (firstPassword === '1234') {
      this.setState({
        checkPassword: '✅일치 ✅',
        admin: <Rtest></Rtest>,
      });
      // 비밀번호가 같지 않다면 불일치
    } else {
      this.setState({
        checkPassword: '❌불일치 ❌',
        admin: '',
      });
    }
  };
  render() {
    const { firstPassword, checkPassword, admin } = this.state;
    return (
      <div>
        <form className="joinForm">
          <input name="firstPassword" onChange={this.handleChange} value={firstPassword} placeholder="비밀번호"/>
        </form>
        <div className="showText">
        <br></br><br></br>
          <span>일치여부 : {checkPassword}</span><br></br><br></br>
          <span>{admin}</span>
        </div>
      </div>
    );
  }
}

export default JoinForm;