import React from 'react';
import {IonButton, IonFooter, IonIcon, IonTitle, IonToolbar} from '@ionic/react';
import {logOut, mail, create, home, notifications, person} from "ionicons/icons";

import { useHistory} from "react-router-dom";

import "./Menu.css";

function ToolBarFooter() {
    const history = useHistory();

    const handleUserAccountClick = () =>
    {
        history.push('/UserAccount');
    }
    return (
        <>
            <IonFooter collapse="fade">
                <IonToolbar color="danger">
                    <IonButton fill = "clear">
                        <IonIcon color="light" icon={mail}> </IonIcon>
                    </IonButton>
                    <IonButton fill = "clear">
                        <IonIcon color="light" icon={create}> </IonIcon>
                    </IonButton>
                    <IonButton fill= "clear">
                        <IonIcon color="light" icon={home}> </IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                        <IonIcon color="light" icon={notifications}> </IonIcon>
                    </IonButton>

                    <IonButton onClick={handleUserAccountClick} fill= "clear">
                        <IonIcon color="light" icon={person}/>
                    </IonButton>

                </IonToolbar>
            </IonFooter>
        </>
    );
}
export default ToolBarFooter;
