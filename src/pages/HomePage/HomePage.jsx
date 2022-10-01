import React, { useState ,useEffect,useContext} from 'react';
import { IonSearchbar,IonButton,IonPage, IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import axios from 'axios'
import './HomePage.css'
import Gallery from '../../components/Gallery/Gallery';
import SliderLayer from '../../components/SliderLayer/SliderLayer';
import NoResults from '../NoResults/NoResults';

import {Modal} from '../../Contextapi';
import {Link} from 'react-router-dom'
function HomePage(){
  
  const {Open,Ddata,setDdata,auth,setAuth}=useContext(Modal);
  const [page,setpage] = useState(1);
  const [searchText,setsearchText] = useState("latest");

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=20&query=latest&client_id=PIxXvSykAV9RSBxDTMyyJinI6OwNh4g7sPcN6nI1-1Q`)
    .then((res)=>setDdata(res.data.results))  
  }, [])
  
 
  let cancelToken;
  async function handleChange(ev){
    var text=ev.detail.value
    if(text==="")
    text="Latest"
    
    if(cancelToken){
        cancelToken.cancel("CANCEL CALL")
    }
    cancelToken=axios.CancelToken.source();
    let result;
    try{
    result = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${text}&client_id=PIxXvSykAV9RSBxDTMyyJinI6OwNh4g7sPcN6nI1-1Q`,{cancelToken:cancelToken.token})
    setDdata(result.data.results);    
    }catch(err){
        console.log(err);
    }
    console.log(result);
    setsearchText(text);
    
  }
  function handleNext(k){
    if(page+k<=0) setpage(1)
    else setpage(page+k);
    axios.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${searchText}&client_id=PIxXvSykAV9RSBxDTMyyJinI6OwNh4g7sPcN6nI1-1Q`)
    .then((response)=>setDdata(response.data.results))
    .catch((err)=>console.log(err))
  }

  function doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      handleNext(1);
      event.detail.complete();
    }, 2000);
  }
  return (
<IonContent>
<IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
  <IonRefresherContent>
  </IonRefresherContent>
</IonRefresher>
<IonPage>
      <div className='searchBar'>
       <div className='searchInside'>
         <h1>CARE Fi</h1>
         <IonSearchbar debounce={1000} onIonChange={(ev) =>handleChange(ev)}></IonSearchbar>
       </div>
      
      <div className='login-button'>

      {
        !auth?
         <Link to='/login'>
           <IonButton color="warning">Login</IonButton>
         </Link>
         :
         <IonButton color="warning" onClick={()=>setAuth(false)}>Logout</IonButton>


      }
      </div>

      </div>  

      {
        Ddata.length>0?
        <Gallery data={Ddata} handleN={handleNext}/>
        :
        <NoResults/>
      }
      {
        Open?<SliderLayer  />:null
      }
      
</IonPage>
</IonContent>
  );
};

export default HomePage;