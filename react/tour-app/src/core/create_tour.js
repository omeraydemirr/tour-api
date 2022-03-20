
import { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../env'

export default class CreateTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      description: '',
      start_date_time: '',
      end_date_time: '',
      price: ''
    }
    this.saveTour = this.saveTour.bind(this);

  }

  async componentDidMount() {

    let token = window.sessionStorage.getItem('token')
    try{
      const tourInfo = await axios({
        method: 'get',
        url: API_URL + '/auth/activeuser/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`,
        }
      })
    }
    catch{
      window.location = '/login'
    }
   

  }

  async saveTour() {
    let token = window.sessionStorage.getItem('token')

    let obj = this.state;
    try {
      const saveForm = await axios({
        method: 'post',
        url: API_URL + '/tour',
        data: {
          company: obj.company,
          title: obj.title,
          description: obj.description,
          start_date_time: obj.start_date_time,
          end_date_time: obj.end_date_time,
          price: obj.price
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`,
        }
      }).then((response) => {

        if (response.status == 200) {
          alert("SAVED")
        }
      });
    }
    catch {
      alert("Please fill in the blanks!")
    }
  }



  render() {
    return (<div style={{ alignItems: 'center', margin:"0 auto",width:1000 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 1000 }}>
        <h2>Create Tour</h2> <button onClick={() => window.location = '/home'}>Go To Back</button>
        <a href='/login' onClick={()=> window.sessionStorage.removeItem("token")} style={{marginLeft:20}}>Logout</a>

      </div>
      <div style={{ display: 'row', width: 250, margin: 20, padding: 20 }}>

        <input onChange={(v) => {
          this.setState({ company: v.target.value })
        }} placeholder='Company' type='text' style={{ margin: 10 }}></input>
        <input onChange={(v) => {
          this.setState({ title: v.target.value })
        }} placeholder='Title' type='text' style={{ margin: 10 }}></input>
        <textarea onChange={(v) => {
          this.setState({ description: v.target.value })
        }} placeholder='Description' type='text' style={{ margin: 10 }}></textarea>


        <div>
          <label>Start Time of Tour</label>

          <input onChange={(v) => {
            this.setState({ start_date_time: v.target.value })
          }} placeholder='Start Time' type='date' style={{ margin: 10 }} />
        </div>
        <div>
          <label>End Time of Tour</label>
          <input onChange={(v) => {
            this.setState({ end_date_time: v.target.value })
          }} placeholder='End Time' type='date' style={{ margin: 10 }}></input>

        </div>
        <input onChange={(v) => {
          this.setState({ price: v.target.value })
        }} placeholder='Price' type='number' style={{ margin: 10 }}></input>
      </div>
      <button onClick={this.saveTour} style={{ marginLeft: 50 }}>Apply</button>

    </div>)
  }
}

