//
//
// src/pages/LogInScreen.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonItem, IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonLoading, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const LogInScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<{show: boolean, message: string}>({show: false, message: ''});
    const history = useHistory();

    const handleLogin = async () => {
        setShowLoading(true);

        // Simulate an API call
        setTimeout(() => {
            setShowLoading(false);
            if (email === '' && password === '') {
                history.push('/Inbox');
            } else {
                setShowToast({show: true, message: 'Invalid credentials'});
            }
        }, 2000);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTitle style={{textAlign: 'center'}}>
                    Hello and Welcome
                </IonTitle>
                <IonTitle style={{textAlign: 'center'}}>
                    to the PCC Mobile App!
                </IonTitle>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        type="email"
                        value={email}
                        onIonChange={e => setEmail(e.detail.value!)}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                        type="password"
                        value={password}
                        onIonChange={e => setPassword(e.detail.value!)}
                        required
                    />
                </IonItem>
                <IonButton color="danger" expand="block" onClick={handleLogin}>Log In</IonButton>

                <IonLoading
                    isOpen={showLoading}
                    message={'Logging in...'}
                />

                <IonToast
                    isOpen={showToast.show}
                    message={showToast.message}
                    duration={2000}
                    onDidDismiss={() => setShowToast({show: false, message: ''})}
                />
            </IonContent>
        </IonPage>
    );
};

export default LogInScreen;

