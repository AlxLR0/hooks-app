import  { useState, useEffect } from "react";

const colors={
    red:'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse',
};

type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {
 const [light,setLight] = useState<TrafficLightColors>('red');
  const [countdown, setCountDown] = useState (5);

    //effect countdown
    useEffect(()=>{
      // console.log(light);
      if(countdown === 0) return;


      
      const intervalId = setInterval(()=>{
        setCountDown(prev => prev-1)
      },1000)

      return()=>{
        console.log('clean');
        clearInterval(intervalId);
        
      }
      
    },[countdown])


    //effect cambio de color
    useEffect(()=>{

      if(countdown > 0) return;
        
      setCountDown(5);
        if (light ==='red') {
          setLight('green')
          return;
        }
        if (light ==='yellow') {
          setLight('red')
          return;
        }
        if (light ==='green') {
          setLight('yellow')
          return;
        }
        return
      


    },[countdown,light])


    return{
        countdown,
        light,
        colors,

        percentage: (countdown / 5) * 100,
    }
}
