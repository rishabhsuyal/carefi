import React from 'react'
import './Gallery.css'
import GalleryBlock from '../GalleryBlock/GalleryBlock';
import { IonButton } from '@ionic/react';
function Gallery({data,handleN}) {

  var index=0;

  return (
    <div style={{'overflow':'scroll','overflow-x':'hidden'}}>
        <div className='gallery_box'>
        {
            data.map((item)=>
             <GalleryBlock index={index++} data={item} />
            )
        }
       </div>
      
      {
        data.length>0?
        <div className='button-strip'>
        <IonButton onClick={()=> handleN(-1)} fill="outline">PREV</IonButton>
       <IonButton onClick={()=> handleN(1)} fill="outline">NEXT</IonButton>
       </div>
        :null
      }
       
    </div>
  )
}

export default Gallery;

