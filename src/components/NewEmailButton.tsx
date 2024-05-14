import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React from 'react';

const NewEmailButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={onClick} color='danger'>
                <IonIcon icon={addOutline} />
            </IonFabButton>
        </IonFab>
    );

};

export default NewEmailButton;