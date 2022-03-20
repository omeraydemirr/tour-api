
import { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../env'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.saveProcess = this.saveProcess.bind(this);

  }

  async saveProcess() {
    let obj = this.state;
    const signUpForm = axios({
      method: 'post',
      url: API_URL + '/auth/signup/',
      data: {
        username: obj.username,
        password: obj.password,
      }
    }).then((response) => {
      if (response.status == 201) {
        alert("Successfuly Signed Up to Platform!")
        window.location = '/login'
      }
      else if (response.status == 400) {
        alert("The user already exists!")
      }
      else {
        alert("Something went wrong")
      }
    });


  }

  render() {
    return (
      <div style={{ alignItems: 'center', margin:"0 auto",width:1000 }}>
        <h2>Sign Up</h2>
        <div style={{ alignSelf: 'center', justifyContent: 'space-between', display: 'row', width: '300px' }}>
          <input type={'text'} onChange={(v) => {
            this.setState({ username: v.target.value })
          }} style={{ marginBottom: '20px' }} placeholder='Username...' />


          <input type={'password'} onChange={(v) => {
            this.setState({ password: v.target.value })
          }} style={{ marginBottom: '20px' }} placeholder='Password...' />
        </div>
        <div style={{ alignSelf: 'center', justifyContent: 'space-between', display: 'flex', width: '300px' }}>
          <button onClick={this.saveProcess} >SAVE</button>
        </div>
      </div>
    );
  }
}

