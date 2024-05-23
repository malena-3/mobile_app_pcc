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
    IonSegment,
    IonSegmentButton,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonFabList,
    useIonViewWillEnter,
} from '@ionic/react';
import { personCircle, openOutline} from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMail.css';

function decodeBase64(base64: any) {
    return new TextDecoder().decode(base64ToBytes(getValidBase64(base64)));
}

function base64ToBytes(base64: any) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => {
        const code = m.codePointAt(0);
        if (code === undefined) {
            throw new Error("Invalid character in base64 string");
        }
        return code;
    });
}

function getValidBase64(input: any) {
    input = input.replace(/-/g, "+").replace(/_/g, "/");
    return input;
}

function ViewMail() {
    const [email, setEmail] = useState<Email>(); // State to hold our email
    const [viewMode, setViewMode] = useState('html');
    const params = useParams<{ id: string }>(); // Get the URL parameters which here is the id of our email

    useIonViewWillEnter(() => {
        const email = getEmail(parseInt(params.id, 10));
        setEmail(email);
    }); // This hook will run when the component is mounted

    const renderContent = () => {
        if (email) {
            if (viewMode === 'html' && email.html) {
                const htmlContent = decodeBase64(email.html);
                return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
            } else if (email.plaintext) {
                console.log("Encoded Plaintext:", email.plaintext);
                const plainText = decodeBase64(email.plaintext);
                console.log("Decoded Plaintext:", plainText);
                return <div>{plainText}</div>;
            }
        }
        return <div>Email not found</div>;
    };

    return (
        <IonPage id="view-message-page">
            <IonHeader translucent>
                <IonToolbar color='danger'>
                    <IonButtons slot="start">
                        <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
                    </IonButtons>
                    <IonSegment value={viewMode} onIonChange={e => setViewMode((e.detail.value as string) ?? 'html')}>
                        <IonSegmentButton value="text">
                            Text
                        </IonSegmentButton>
                        <IonSegmentButton value="html">
                            HTML
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>

            {/* if email is found, display the email, else display a message */}
            <IonContent fullscreen>
                {email ? (
                    <>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={personCircle} color="medium"></IonIcon>
                            <IonLabel className="ion-text-wrap">
                                <h2>{email.from}</h2>
                                <h3>To: <IonNote>Me</IonNote></h3>
                            </IonLabel>
                        </IonItem>
                        <div className="ion-padding">
                            {renderContent()}
                        </div>
                    </>
                ) : (
                    <div>Email not found</div>
                )}
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton className="custom-size" color="danger">
                        <IonIcon icon={openOutline}></IonIcon>
                        Open in Mail
                    </IonFabButton>

                </IonFab>
            </IonContent>
        </IonPage>
    );
}

export default ViewMail;
