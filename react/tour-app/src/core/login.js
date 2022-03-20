import { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../env'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.loginProcess = this.loginProcess.bind(this);

  }




  async loginProcess() {
    window.sessionStorage.removeItem("token")
    let obj = this.state;
    try{
      const LoginForm = await axios({
        method: 'post',
        url: API_URL + '/token-auth/',
        data: {
          username: obj.username,
          password: obj.password,
        }
      }).then((response) => {
        let authToken = response.data.token;
        if (response.status == 200) {
          window.sessionStorage.setItem("token", authToken);
          window.location = '/home'
        }
      });
    }
    catch (error){
      alert("Wrong Credentials,Please Sign Up!")
    }



  }

  render() {
    return (
      <div style={{ alignItems: 'center', margin:"0 auto",width:1000 }}>
        <h2>Login</h2>

        <div style={{ alignSelf: 'center', justifyContent: 'space-between', display: 'row', width: '300px' }}>
          <input type={'text'} onChange={(v) => {
            this.setState({ username: v.target.value })
          }} style={{ marginBottom: '20px' }} placeholder='Username...' />


          <input type={'password'} onChange={(v) => {
            this.setState({ password: v.target.value })
          }} style={{ marginBottom: '20px' }} placeholder='Password...' />
        </div>
        <div style={{ alignSelf: 'center', justifyContent: 'space-between', display: 'flex', width: '300px' }}>

          <button onClick={this.loginProcess} >LOGIN</button>

          <button onClick={() => window.location = '/signup'} ><a>SIGN UP</a></button>
        </div>

      </div>
    );
  }

}
