import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFabButton,
    IonIcon,
    IonFab,
    IonButton
} from '@ionic/react';
import {logOut, arrowBackCircleOutline, person} from "ionicons/icons";
import ToolBar_Footer from "../components/ToolBar_Footer";

const HomePage: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle color="light">
                        Home
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>


                <h2>Welcome to the User Account page!</h2>
                {/* Add more content here */}
            </IonContent>
            <ToolBar_Footer/>
        </IonPage>
    );
};

export default HomePage;
