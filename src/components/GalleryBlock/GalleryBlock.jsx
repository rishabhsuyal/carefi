import React,{useState,useContext} from 'react'
import './GalleryBlock.css'
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonButton,
  useIonToast, 
} from '@ionic/react';
import { caretDownCircleOutline } from 'ionicons/icons';

import {Modal} from '../../Contextapi';
function GalleryBlock({ index,data }) {
  const [presentToast] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');
  const {Open,setOpen,setMdata,setindex,auth}=useContext(Modal);
  function handleClick(){
    if(auth){
      setOpen(true);
    setMdata(data);
    setindex(index);
    }else{
      presentToast({
        message: 'Please Login',
        duration: 3000,
        onDidDismiss: (e) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
        buttons: [
          {
            text: 'Dismiss',
            role: 'cancel',
            handler: () => { setHandlerMessage('Dismiss clicked'); }
          }
        ]
      })
    }

  }
  const url= data.urls.small;
  const username=data.user.username
  return (
    <div className='image-div'>
      <div onClick={handleClick}>
      <img  className='gallery_block' src={url} alt=""  />
      </div>
      <div className='accodian-div'>
        <IonAccordionGroup>
          <IonAccordion value="first" toggleIcon={caretDownCircleOutline} toggleIconSlot="start">
            <IonItem toggleIcon="" slot="header" >
              {username}
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>Created At  {data.created_at}</p>
              <p>Likes {data.likes}</p>
              <p>ID  {data.id}</p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </div>
    </div>


  )
}

export default GalleryBlock

