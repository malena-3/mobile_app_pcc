import React, { useRef } from 'react';
import {
    IonButton,
    IonModal,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonNote,
    IonText

} from '@ionic/react';

import { chevronForward, listCircle } from 'ionicons/icons';

function CanvasSlideUp() {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                <IonContent className="ion-padding">

                    <IonList inset={true}>
                    <IonItem button={true}>
                        <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
                        <IonLabel>All Courses</IonLabel>
                        <IonNote slot="end">6</IonNote>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
                        <IonLabel>ARCH 024B</IonLabel>
                        <IonNote slot="end">15</IonNote>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
                        <IonLabel>CS 008</IonLabel>
                        <IonNote slot="end">3</IonNote>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
                        <IonLabel>MATH 05C</IonLabel>
                        <IonNote slot="end">8</IonNote>
                    </IonItem>
                </IonList>

                </IonContent>
            </IonModal>
        </>
    );
}

export default CanvasSlideUp;
