import { useState } from 'react';
import { Email, getEmail } from '../data/emails';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMail.css';
import ToolBar_Footer from "../components/ToolBar_Footer";

function ViewMail() {
    const [email, setEmail] = useState<Email>(); // State to hold our email
    const params = useParams<{ id: string }>(); // Get the URL parameters which here is the id of our email

    useIonViewWillEnter(() => {
        const email = getEmail(parseInt(params.id, 10));
        setEmail(email);
    }); // This hook will run when the component is mounted

    return (
        <IonPage id="view-message-page">
            <IonHeader translucent>
                <IonToolbar color='danger'>
                    <IonButtons slot="start">
                        <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            {/* if email is found, display the email, else display a message */}
            <IonContent fullscreen>
                {email ? (
                    <>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                    {email.from}
                                </h2>
                                <h3>
                                    To: <IonNote>Me</IonNote>
                                </h3>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-padding">
                            <h1>{email.subject}</h1>
                            <p>
                                {email.message}
                            </p>
                        </div>
                    </>
                ) : (
                    <div>Email not found</div>
                )}
            </IonContent>
        </IonPage>
    );
}

export default ViewMail;
