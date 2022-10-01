import React,{useContext} from 'react';
import { IonSlides, IonSlide, IonContent, IonButton } from '@ionic/react';
import './SliderLayer.css'
import {Modal} from '../../Contextapi'
import {logoInstagram,thumbsUpOutline,locationOutline} from 'ionicons/icons'


function SliderLayer() {
  const {Open,setOpen,Mdata,Ddata,index}=useContext(Modal);

  const slideOpts = {
    initialSlide: index,
    speed: 400
  };
  console.log(Mdata);
    return (
<IonContent className='main-slider'>
    <IonSlides  options={slideOpts} pager={true}>
     
      {
        Ddata.map((data)=>
        <IonSlide>
       <div className='test'>
          <div className='slider-image'>
            <img style={{'height':'80vh'}} src={data.urls.small}/>
            <IonButton className='slider-close' onClick={()=>setOpen(false)} color="warning">CLOSE</IonButton>
          </div>  
          <div className='slider-detail'>
            <p>{data.created_at}</p>
            <p>Likes {data.likes}</p>
            <p>ID  {data.id}</p>
          </div>
       </div>
      </IonSlide>
        )
      }

    </IonSlides>
  </IonContent>
    )
}

export default SliderLayer;