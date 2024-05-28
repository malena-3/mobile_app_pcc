
import React, { useRef } from 'react';
import {
    IonModal,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonNote
} from '@ionic/react';

import { listCircle } from 'ionicons/icons';

interface CanvasSlideUpProps {
    onSelectCourse: (course: string, color: string) => void;
}

const CanvasSlideUp: React.FC<CanvasSlideUpProps> = ({ onSelectCourse }) => {
    const modal = useRef<HTMLIonModalElement>(null);

    const handleCourseClick = (course: string, color: string) => {
        onSelectCourse(course, color); // passing course color
        modal.current?.dismiss();
    };

    return (
        <>
            <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                <IonContent className="ion-padding">
                    <IonList inset={true}>
                        <IonItem button={true} onClick={() => handleCourseClick('All', '')}>
                            <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
                            <IonLabel>All Courses</IonLabel>
                            <IonNote slot="end">6</IonNote>
                        </IonItem>
                        <IonItem button={true} onClick={() => handleCourseClick('ARCH024B', 'tertiary')}>
                            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
                            <IonLabel>ARCH 024B</IonLabel>
                            <IonNote slot="end">15</IonNote>
                        </IonItem>
                        <IonItem button={true} onClick={() => handleCourseClick('CS008', 'success')}>
                            <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
                            <IonLabel>CS 008</IonLabel>
                            <IonNote slot="end">3</IonNote>
                        </IonItem>
                        <IonItem button={true} onClick={() => handleCourseClick('MATH05C', 'primary')}>
                            <IonIcon color="primary" slot="start" icon={listCircle} size="large"></IonIcon>
                            <IonLabel>MATH 05C</IonLabel>
                            <IonNote slot="end">8</IonNote>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonModal>
        </>
    );
};

export default CanvasSlideUp;
