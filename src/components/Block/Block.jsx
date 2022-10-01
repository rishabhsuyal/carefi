import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import './Block.css'

const slideOpts = {
    initialSlide: 1,
    speed: 400
  }
function Block({data}) {
  return (
    <IonContent>
    <IonSlides pager={true} options={slideOpts}>
    {
        data.map((item)=>
        <IonSlide>  
        <img className='slider-image' src={item.urls.small} alt="" />
      </IonSlide>
        )
    }
      
    </IonSlides>
  </IonContent>

  )
}

export default Block