import React, { useState } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';
import {logoInstagram,thumbsUpOutline,locationOutline} from 'ionicons/icons'
import './Modal.css'

function Modal({isOpen,setIsOpen,data}) {

    const username=data.user.username
    const {alt_description,created_at,likes,color,}=data
    const {bio,instagram_username,location,portfolio_url,
        total_likes,total_photos,collections
    } =data.user
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Inline Modal</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Uploaded by {username} at {created_at.slice(0,7)}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={()=>setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <div className='modal-content'>
        <h3>Description {alt_description}</h3>
         
          <div className='insta-block'>
             <img src={locationOutline} style={{'width':'50px'}}/>
             <h3> {location}</h3>
           </div>
          
          
          <div className='insta-block'>
             <img src={thumbsUpOutline} style={{'width':'50px'}}/>
             <h3> {likes}</h3>
           </div>
          

          
          <div className='insta-block'>
             <img src={logoInstagram} style={{'width':'50px'}}/>
             <h3> {instagram_username}</h3>
          </div>

        </div>
        </IonContent>
      </IonModal>
    </IonContent>
  </IonPage>
  );
}

export default Modal;