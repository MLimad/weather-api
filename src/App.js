import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Currentweather from './components/Currentweather';
import './App.css';


function App() {

  const [city,setCity]  = useState([])
  const [cityName,setCityName] = useState("London")
  const apiKey = "7c3e85e99693a9779335cd51b1d942c8"
  const [weather,setWeather]  =  useState([])
  const [isChecked,setChecked] = useState(false)
  

  

// Get Latatitude and Longtitude
  useEffect(()=>{
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    axios.get(url).then(response =>{
      setCity(response.data)
    })

  },[cityName])


  // Get Current Weather
    useEffect(()=>{

      if(city.length > 0)
      {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city[0]["lat"]}&lon=${city[0]["lon"]}&units=${isChecked ? "imperial":"metric" }&appid=${apiKey}`
        axios.get(url).then(response =>(setWeather([response.data])))
      }
      else{
        console.log("Data Not Loaded Yet");
      }
    
    },[city,isChecked])
 
  return (
    <div className="App">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
        
            <div className="row">
            <div className="switch-btn d-flex">
                <label htmlFor='switch' className='mx-1'>°Celsius</label>
                <div class="form-check form-switch mx-1">
                  <input class="form-check-input" id="switch" value={isChecked} checked={isChecked} onChange={()=>setChecked(!isChecked)} type="checkbox" role="switch" />
                </div>
                <label htmlFor='switch'>°Fahrenheit</label>
            </div>
            </div>

              <div className="row">
              <div className="form-group mb-2">
              <input 
                  onChange={(e)=>setCityName(e.target.value)}
                  type="text" 
                  id='location'
                  className="form-control" 
                  placeholder="e.g : London" />
            </div>
              </div>
            
              <Currentweather city={city}  weather={weather} />
          </div>
        </div>
      </div>
       


    </div>

  );
}

export default App;
