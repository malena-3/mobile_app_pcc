import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';

import './Menu.css';
import {logOutOutline, logOut} from "ionicons/icons";

function LogButton() {
    return (
        <IonFab slot="fixed" vertical="top" horizontal="center">
            <IonFabButton color="light">
                <IonIcon color="danger" icon={logOut}> </IonIcon>
                Log Out
            </IonFabButton>
        </IonFab>
    );
}
export default LogButton;

