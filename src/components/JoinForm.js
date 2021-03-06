import React, { Component } from 'react';
import Rtest from './Rtest';

class JoinForm extends Component {
  state = {
    firstPassword: '',
    checkPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
    admin: '',
  };
  //input onChange ์ด๋ฒคํธ
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ event.target.name์ด name ์๋ ๊ฒฝ์ฐ์๋ง handleCheckํจ์ ์คํ
    // setTimeout์ผ๋ก ๋๋ ์ด๋ฅผ ์ค ์ด์ ๋ ๋๋ ์ด๋ฅผ ์ฃผ์ง ์์์ ๊ฒฝ์ฐ setState ๋ณ๊ฒฝ๋ ๊ฐ์ด handleCheck์์ ๋ฐ๋ก ๋ฐ์๋์ง ์์
    if (e.target.name !== 'name') {
      setTimeout(this.handleCheck, 100);
    }
  };
  //๋น๋ฐ๋ฒํธ ์ฒดํฌ
  handleCheck = () => {
    const { firstPassword } = this.state;
    // ๋น๋ฐ๋ฒํธ ๋ฌด์๋ ฅ ์ํ์ผ ๋์ ๋ ์ค์ ํ๋์ ๊ฐ์ด ์๋ ฅ ์ํ๊ฐ ์๋๋
    if (firstPassword.length < 1 ) {
      this.setState({
        checkPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
        admin: '',
      });
      // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ๋ค๋ฉด ์ผ์น
    } else if (firstPassword === '1234') {
      this.setState({
        checkPassword: 'โ์ผ์น โ',
        admin: <Rtest></Rtest>,
      });
      // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ์ง ์๋ค๋ฉด ๋ถ์ผ์น
    } else {
      this.setState({
        checkPassword: 'โ๋ถ์ผ์น โ',
        admin: '',
      });
    }
  };
  render() {
    const { firstPassword, checkPassword, admin } = this.state;
    return (
      <div>
        <form className="joinForm">
          <input name="firstPassword" onChange={this.handleChange} value={firstPassword} placeholder="๋น๋ฐ๋ฒํธ"/>
        </form>
        <div className="showText">
        <br></br><br></br>
          <span>์ผ์น์ฌ๋ถ : {checkPassword}</span><br></br><br></br>
          <span>{admin}</span>
        </div>
      </div>
    );
  }
}

export default JoinForm;