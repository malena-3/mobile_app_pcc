import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonIcon, IonFab} from '@ionic/react';
import {logOut} from "ionicons/icons";

const UserAccount: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonFab slot="fixed" vertical="top" horizontal="center">

                    <IonIcon color="danger" icon={logOut}> </IonIcon>
                </IonFab>


                <h2>Welcome to the User Account page!</h2>
                {/* Add more content here */}
            </IonContent>
        </IonPage>
    );
};

export default UserAccount;
