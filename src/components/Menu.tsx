import React from 'react';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton
} from '@ionic/react';
import './Menu.css';
import LogButton from "./LogButton";
import ToolBar_Footer from "./ToolBar_Footer";

const Menu: React.FC = () => {
    return (
        <IonMenu color="danger" contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar color={'danger'}>
                    <IonTitle>PCC Mobile App</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="danger">
                <LogButton />
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
