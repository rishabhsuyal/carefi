import React, { useState,useContext } from 'react';
import { useIonToast, IonButton, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import './LoginPage.css'
import {Modal} from '../../Contextapi';
import { useNavigate } from "react-router-dom";
function LoginPage() {
    let navigate = useNavigate(); 
    const [presentToast] = useIonToast();
    const [handlerMessage, setHandlerMessage] = useState('');
    const [roleMessage, setRoleMessage] = useState('');
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [rusername, setrusername] = useState("")
    const [rpassword, setrpassword] = useState("")
    const {setAuth}=useContext(Modal)


    
    function handleLogin(){
        console.log(username,password);
        var user=localStorage.getItem('username')
        var pass=localStorage.getItem('password')

        if(user==username && pass==password){
            console.log("hi");
          setAuth(true)
          presentToast({
            message: 'Welcome',
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
          navigate('/')
          
        }
        else{
            presentToast({
                message: 'Login Credential Mismatch',
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
    
    function handleRegister(e){
        localStorage.setItem('username',rusername);
        localStorage.setItem('password',rpassword);
        setrpassword("")
        setrusername("")
        presentToast({
            message: 'User Registered',
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
    return (
        <div className='login-page'>
        <div className='half'>
            <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput type='text' onIonChange={(e)=>setusername(e.detail.value)} ></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput  onIonChange={(e)=>setpassword(e.detail.value)} type='password'></IonInput>
            </IonItem>

            
      <IonButton fill="clear" onClick={handleLogin}>Login</IonButton>
        </div>

        <div className='half'>
        <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput type='text' onIonChange={(e)=>setrusername(e.detail.value)} value={rusername}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput  onIonChange={(e)=>setrpassword(e.detail.value)} type='password' value={rpassword}></IonInput>
            </IonItem>

            <IonButton  fill="clear"
        onClick={(e)=>handleRegister(e)}
      >
        Register
      </IonButton>
        </div>



        </div>
    )
}

export default LoginPage