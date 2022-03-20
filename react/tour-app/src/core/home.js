
import { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../env'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoArray: [{
        company: '',
        title: '',
        description: '',
        start_date_time: '',
        end_date_time: '',
        price: ''
      }]
    }

  }





  async componentDidMount() {
    const dataArray = []

    let token = window.sessionStorage.getItem('token')
    try{
      const tourInfo = await axios({
        method: 'get',
        url: API_URL + '/tour',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`,
        }
      }).then((response) => {
        if(response.status == 200)
        {
          const responseData = response.data;
          responseData.forEach((data) =>
            dataArray.push(data)
    
          )
        }
        this.setState({ infoArray: dataArray })
      })
    }
    catch{
      window.location = '/login'
    }
   

  }

  render() {
    return (<div style={{width:1000,margin:"0 auto"}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Tours</h2> <button onClick={()=>window.location = '/createtour'}>Create Tour</button>
      <a href='/login' onClick={()=> window.sessionStorage.removeItem("token")} style={{marginLeft:20}}>Logout</a>

      </div>
      {this.state.infoArray.map((data, index) => {
        return <div style={{ border: 'solid', width: 200, margin: 5 }}>
          <ul>
            <li key={index}>{data.company}</li>
            <li key={index}>{data.title}</li>
            <li key={index}>{data.description}</li>
            <li key={index}>{data.start_date_time}</li>
            <li key={index}>{data.end_date_time}</li>
            <li>{data.price}</li>
          </ul>
        </div>
      })}

    </div>)
  }
}

