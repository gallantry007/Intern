import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import Axios from 'axios'
import { useState } from "react";
import moment from "moment";

function App() {
  const [data, setData] = useState([])
  const [avail, setAvail] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let res = await Axios.get('https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
    let res2 = res.data
    console.log(res2)
    setData(res2)
  }

  return (
    <div className="App">
      <div class="sidebar">

        <h2>
          MentorPlus
        </h2>
        <a class="active" href="#home">Home</a>


        <a href="#about">About</a>
        <a href=""></a>
        <a href=""></a>
      </div>


      <div class="content">
        <h1>

        </h1>
        <h2>
          Book Demo Session Slot
        </h2>
        <h1></h1>
        <h4>
          Select Date
        </h4>
        {data.map(item => <button type="button" class="btn btn-outline-success " onClick={() => {
          setAvail(item.available)
          console.log(item.available)
        }}>{moment(item.date).format('ddd DD MMM')}</button>)}
        <br />
        <h1></h1>
        <h5>
          Select Slot
        </h5>
        {avail.map(item => <button type="button" class="btn btn-success">{item.hour}{item.min != 0 ? `:${item.min}` : ""} PM - {item.hour + 1}{item.min != 0 ? `:${item.min}` : ""} PM</button>)}
        <br />
        <br />
        <button type="button" class="btn btn-dark">
          Processed To Pay
        </button>
      </div>


    </div>
  );
}

export default App;
