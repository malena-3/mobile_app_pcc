
import React from 'react';
import { IonButton, IonFooter, IonIcon, IonToolbar } from '@ionic/react';
import { mailOutline, mailOpen, create, createOutline, home, homeOutline, notifications, notificationsOutline, person, personOutline } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router-dom';
import './ToolBar_Footer.css';

function ToolBarFooter() {
    const history = useHistory();
    const location = useLocation();

    const handleMailClick = () => {
        history.push('/Inbox');
    };

    const handleCanvasClick = () => {
        history.push('/Canvas');
    };

    const handleHomeClick = () => {
        history.push('/HomePage');
    };

    const handleUserAccountClick = () => {
        history.push('/UserAccount');
    };

    const isActive = (path: string): boolean => location.pathname === path;

    return (
        <>
            <IonFooter collapse="fade">
                <IonToolbar color="danger">
                    <IonButton onClick={handleHomeClick} color="danger" fill="clear">
                        <IonIcon icon={isActive('/HomePage') ? home : homeOutline} color="light" />
                    </IonButton>

                    <IonButton onClick={handleCanvasClick} color="danger" fill="clear">
                        <IonIcon icon={isActive('/Canvas') ? create : createOutline} color="light" />
                    </IonButton>

                    <IonButton onClick={handleMailClick} color="danger" fill="clear">
                        <IonIcon icon={isActive('/Inbox') ? mailOpen : mailOutline} color="light" />
                    </IonButton>

                    <IonButton color="danger" fill="clear">
                        <IonIcon icon={isActive('/Notifications') ? notifications : notificationsOutline} color="light" />
                    </IonButton>

                    <IonButton onClick={handleUserAccountClick} color="danger" fill="clear">
                        <IonIcon icon={isActive('/UserAccount') ? person : personOutline} color="light" />
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </>
    );
}

export default ToolBarFooter;
