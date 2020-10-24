import React, { useEffect } from "react";
import Title from "../components/title";
import {TweenMax} from "gsap";
import moonStar from "../pages/images/moon.png";

function Home ()  {

  useEffect(() => { 
  TweenMax.to('#image', 3,{rotationY:360, transformOrigin:"left top", delay: 10,
  repeat: -10,
  repeatDelay: 5,
  immediateRender: true } ) 
  TweenMax.to('#image', 3,{rotationY:360, transformOrigin:"left 50% -200", delay: 5,
  repeat: -5,
  repeatDelay: 5,
  immediateRender: true } ) 
}, []);


  return (

    <div className='inner'  > 
      <Title
        lineContent='Graficacion 3D' 
        lineContent2='Por medio del framework GSAP ♡'
      />
      <div>

        <p className='other'>
        un objeto o ente es tridimensional si tiene tres dimensiones. 
        Es decir, cada uno de sus puntos puede ser localizado especificando tres 
        números dentro de un cierto rango. Por ejemplo, anchura, altura y profundidad.
        </p>
        <div className = "moon-image" id = "image">
    <img src = {moonStar} alt = "moon"/>
    </div> 

   
      </div>
    </div>
  );
};

export default Home;


