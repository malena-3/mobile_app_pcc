/*
import React, { useRef, useEffect } from 'react';
import { IonDatetime } from '@ionic/react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon
} from '@ionic/react';
import {calendarOutline, fingerPrintOutline} from "ionicons/icons";
import ToolBar_Footer from "../components/ToolBar_Footer";
import CanvasSlideUp from "../components/CanvasSlideUp";
import './Canvas.css'; // Import the CSS file

const Canvas: React.FC = () => {
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);

    useEffect(() => {
        if (!datetime.current) return;
        datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle color="light">
                        Canvas
                        <IonIcon icon={calendarOutline} style={{ marginLeft: '200px', fontSize: '25px' }} />
                        <IonIcon icon={fingerPrintOutline} style={{ marginLeft: '14px', fontSize: '25px' }}/>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonDatetime ref={datetime} presentation="date" multiple={true} className="full-screen-datetime"></IonDatetime>
            </IonContent>
            <CanvasSlideUp />
            <ToolBar_Footer />

        </IonPage>
    );
};

export default Canvas;
*/
import React, { useRef, useEffect } from 'react';
import { IonDatetime } from '@ionic/react';
import {
    IonPage,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton
} from '@ionic/react';
import { calendarOutline, fingerPrintOutline } from "ionicons/icons";
import ToolBar_Footer from "../components/ToolBar_Footer";
import CanvasSlideUp from "../components/CanvasSlideUp";
import './Canvas.css'; // Import the CSS file

const Canvas: React.FC = () => {
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);

    useEffect(() => {
        if (!datetime.current) return;
        datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle color="light">
                        Canvas
                        <IonIcon icon={calendarOutline} style={{ marginLeft: '200px', fontSize: '25px' }} />
                        <IonIcon icon={fingerPrintOutline} style={{ marginLeft: '14px', fontSize: '25px' }} />
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonDatetime ref={datetime} presentation="date" multiple={true}
                             className="full-screen-datetime"></IonDatetime>


                <div className="button-wrapper">
                    <IonButton id="open-modal" expand="block" color="warning" className="custom-button">
                        My Assignments
                    </IonButton>
                </div>


                <CanvasSlideUp/>
            </IonContent>
            <ToolBar_Footer/>
        </IonPage>
    );
};

export default Canvas;
