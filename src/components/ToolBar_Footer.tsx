import React from 'react';
import {IonButton, IonFooter, IonIcon, IonTitle, IonToolbar} from '@ionic/react';
import {logOut, mail, create, home, notifications, person} from "ionicons/icons";

import "./Menu.css";

function ToolBarFooter() {
    return (
        <>
            <IonFooter collapse="fade">
                <IonToolbar color="danger">
                    <IonButton color="danger">
                        <IonIcon color="light" icon={mail}> </IonIcon>
                    </IonButton>
                    <IonButton color="danger">
                        <IonIcon color="light" icon={create}> </IonIcon>
                    </IonButton>
                    <IonButton color="danger">
                        <IonIcon color="light" icon={home}> </IonIcon>
                    </IonButton>
                    <IonButton color="danger">
                        <IonIcon color="light" icon={notifications}> </IonIcon>
                    </IonButton>
                    <IonButton color="danger">
                        <IonIcon color="light" icon={person}> </IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </>
    );
}
export default ToolBarFooter;
