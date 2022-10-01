/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';
import {IonApp,setupIonicReact} from '@ionic/react';

import HomePage from './pages/HomePage/HomePage'
import Context from './Contextapi';
import LoginPage from './pages/LoginPage/LoginPage'
import {
  Routes,
  Route,
} from "react-router-dom";

setupIonicReact();

const App: React.FC = () => (
  <Context>
    <IonApp>
    <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}/>       
    </Routes>
    </IonApp>
    </Context>  
);

export default App;
