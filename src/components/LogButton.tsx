
import React from 'react';
import {IonButton, IonFab, IonFabButton, IonIcon} from '@ionic/react';


import { useHistory} from "react-router-dom";


import './Menu.css';
import {logOutOutline, logOut, create} from "ionicons/icons";

function LogButton() {

    const history = useHistory();

    const handleLogOut = () =>
    {
        history.push('/LogOutScreen');
    }

    return (


        <IonFab slot="fixed" vertical="top" horizontal="center">
            <IonFabButton onClick={handleLogOut} color="light">
                <IonIcon color="danger" icon={logOut}> </IonIcon>
                Log Out
            </IonFabButton>
        </IonFab>
    );
}
export default LogButton;

