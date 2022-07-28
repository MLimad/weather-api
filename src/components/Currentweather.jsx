import React from 'react'
import {ImArrowUp,ImArrowDown} from "react-icons/im";
import {SiRainmeter} from "react-icons/si";
import {FiWind} from "react-icons/fi";
import {BsSpeedometer} from "react-icons/bs";


const Currentweather = ({city,weather}) => {

    

  return (
    <div>
      
        <section id='currentWeather'>
            <div className="row">
                <div className="col-md-12">
                    
                {
                    city.map((item,index)=>(
                        
            
                        <div className='mb-4' key={index}>
                                <h1 className='text-center display-6'>{item.name},{item.country}</h1>                                
                        </div>
                    ))
                 }
                   
                    <div className="row">

                    {
                        weather.map(item=>(
                            <div className="text-center">
                                <h1 className='display-5 m-0'>{Math.trunc(item.main.temp)}°</h1>
                            </div>
                        ))
                       }

                        {
                            weather.map(item=>(
                                item.weather.map(item=>(
                                    <div className=" d-flex align-items-center flex-column ">
                            <div className="img-box">
                                <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="sun" width={"100px"} />
                            </div>
                            <p className='fs-4 text-capitalize'><strong>{item.description}</strong></p>
                         </div>
                                ))
                            ))
                        }
                       
                            
                    
                        
                       
                          
                    </div>
                </div>
                    <>
                         {
                        weather.map(item=>(
                            <div className="row">
                            <h6 className='text-capitalize text-center'>{`feels Like ${Math.trunc(item.main.feels_like)}°`}</h6>
                            <ul id='min-max'>
                                <li><span><ImArrowUp/></span>{Math.trunc(item.main.temp_max)}°</li>
                                <li><span><ImArrowDown/></span>{Math.trunc(item.main.temp_min)}°</li>
                            </ul>
                            </div>
                        ))
                       }
                   
                   

                        {
                        weather.map(item=>(
                            <div className="row">
                            <div className='col-md-4 col-sm-6 text-center'>
                                <li><span><SiRainmeter/></span></li>
                                <li>Humidity</li>
                                <li>{item.main.humidity}%</li>
                            </div>
                            <div  className='col-md-4 col-sm-6 text-center'>
                                <li><span><FiWind/></span></li>
                                <li>Wind</li>
                                <li>{item.wind.speed} m/s</li>
                             </div>
                            <div  className='col-md-4 col-sm-12 text-center'>
                                <li><span><BsSpeedometer/></span></li>
                                <li>Pressure</li>
                                <li>{item.main.pressure} hpa</li>
                            </div>
                        </div>
                        ))
                       }

                      </>  
            </div>
        </section>
    </div>
  )
}

export default Currentweather